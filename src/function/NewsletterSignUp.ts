import { z } from "zod";

export const emailSchema = z.string().email().min(5).max(100);

export default async function newsletter(
  action: "subscribe" | "unsubscribe",
  email: z.infer<typeof emailSchema>
): Promise<boolean> {
  const response = await fetch("", {
    body: JSON.stringify({
      action,
      email,
    }),
    method: "POST"
  });
  if (response.ok) return JSON.parse(await response.text()).body;
  else throw new Error("API unavailable right now");
}
