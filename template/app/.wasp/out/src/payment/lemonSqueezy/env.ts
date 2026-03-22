import * as z from "zod";
import { paymentPlansSchema } from "../env";

export const lemonSqueezyEnvSchema = paymentPlansSchema.extend({
  LEMONSQUEEZY_API_KEY: z.string({ invalid_type_error: "LEMONSQUEEZY_API_KEY is required" }),
  LEMONSQUEEZY_WEBHOOK_SECRET: z.string({
    invalid_type_error: "LEMONSQUEEZY_WEBHOOK_SECRET is required",
  }),
  LEMONSQUEEZY_STORE_ID: z.string({
    invalid_type_error: "LEMONSQUEEZY_STORE_ID is required",
  }),
});
