import { z } from "zod";

export const messageSchema = z.object({
  name: z.string().min(5).max(100),
  email: z.string().email().min(5).max(100),
  companyName: z.string().min(5).max(100).optional(),
  message: z.string().min(5).max(300)
})

export default async function messageSend(msgObj: z.infer<typeof messageSchema>): Promise<boolean> {
  const response = await fetch("", {
    body: JSON.stringify(msgObj),
    method: "POST"
  });
  if (response.ok) return JSON.parse(await response.text()).body;
  else throw new Error("API unavailable right now!");
}
