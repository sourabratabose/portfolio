// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

Deno.serve(async (req) => {
  if (req.method != "POST")
    return new Response("Method not allowed.", {
      status: 405,
    });
  try {
    let data: boolean = false;
    let action: "subscribe" | "unsubscribe" | null = null;
    let email: string | null = null;
    try {
      const { data, error } = z
        .object({
          action: z.union([z.literal("subscribe"), z.literal("unsubscribe")]),
          email: z.string().email().min(5).max(255),
        })
        .safeParse(await req.json());
      if (error) throw error;
      if (data != null) {
        action = data.action;
        email = data.email;
      }
    } catch (e) {
      console.error("Error parsing request! ", e);
      return new Response("Bad request.", {
        status: 400,
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      {
        global: {
          headers: { Authorization: req.headers.get("Authorization")! },
        },
      }
    );

    if (action == "subscribe") {
      const { error } = await supabase.from("newsletter").insert({
        email,
      });
      if (error == null) data = true;
      else throw new Error("DB insertion error : ", error);
    }
    if (action == "unsubscribe") {
      const { error } = await supabase
        .from("newsletter")
        .delete()
        .eq("email", email);
      if (error == null) data = true;
      else throw new Error("DB deletion error : ", error);
    }
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.log("Error occurred in newsletter edge function : ", e);
    return new Response(JSON.stringify(false), {
      headers: { "Content-Type": "application/json" },
    });
  }
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/newsletter' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
