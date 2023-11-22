import { object, string, number } from "zod";

export const priceSchema = object({
  name: string(),
  price: number(),
});
