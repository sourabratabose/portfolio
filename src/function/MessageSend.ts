import { z } from "zod";
import client from "./SupabaseClient";

export const messageSchema = z.object({
  name: z.string().min(5).max(100),
  email: z.string().email().min(5).max(100),
  company: z.string().min(5).max(100).optional(),
  message: z.string().min(5).max(300)
})

export default async function messageSend(msgObj: z.infer<typeof messageSchema>): Promise<boolean> {
  const { data, error } = await client.functions.invoke("message", {
    body: msgObj,
    method: "POST",
  });
  if (error == null) {
    if (data != null) return data;
    else return false;
  } else throw new Error("API unavailable right now");
}
