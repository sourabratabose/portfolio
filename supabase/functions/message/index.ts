// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const messgaeValidator = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email().min(5).max(255),
  company: z.string().min(5),
  message: z.string().max(5000)
});

Deno.serve(async (req) => {
  if (req.method != "POST")
    return new Response("Method not allowed.", {
      status: 405,
    });
  try {
    let data: boolean = false;
    let messageObj: z.infer<typeof messgaeValidator> | null = null;
    try {
      const { data, error } = messgaeValidator.safeParse(await req.json());
      if (error) throw error;
      if (data != null) messageObj = data;
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

    try {
      const { error } = await supabase.from("messages").insert(messageObj)
      if (error == null) data = true;
      else throw new Error("DB insertion error : ", error);
    } catch (e) {
      console.error("Error while inserting data into DB : ", e);
    }
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.log("Error occurred in message edge function : ", e);
    return new Response(JSON.stringify(false), {
      headers: { "Content-Type": "application/json" },
    });
  }
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/message' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
