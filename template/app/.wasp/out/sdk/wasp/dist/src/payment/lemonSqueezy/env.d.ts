import * as z from "zod";
export declare const lemonSqueezyEnvSchema: z.ZodObject<{
    PAYMENTS_HOBBY_SUBSCRIPTION_PLAN_ID: z.ZodString;
    PAYMENTS_PRO_SUBSCRIPTION_PLAN_ID: z.ZodString;
    PAYMENTS_CREDITS_10_PLAN_ID: z.ZodString;
} & {
    LEMONSQUEEZY_API_KEY: z.ZodString;
    LEMONSQUEEZY_WEBHOOK_SECRET: z.ZodString;
    LEMONSQUEEZY_STORE_ID: z.ZodString;
}, "strip", z.ZodTypeAny, {
    PAYMENTS_HOBBY_SUBSCRIPTION_PLAN_ID: string;
    PAYMENTS_PRO_SUBSCRIPTION_PLAN_ID: string;
    PAYMENTS_CREDITS_10_PLAN_ID: string;
    LEMONSQUEEZY_API_KEY: string;
    LEMONSQUEEZY_WEBHOOK_SECRET: string;
    LEMONSQUEEZY_STORE_ID: string;
}, {
    PAYMENTS_HOBBY_SUBSCRIPTION_PLAN_ID: string;
    PAYMENTS_PRO_SUBSCRIPTION_PLAN_ID: string;
    PAYMENTS_CREDITS_10_PLAN_ID: string;
    LEMONSQUEEZY_API_KEY: string;
    LEMONSQUEEZY_WEBHOOK_SECRET: string;
    LEMONSQUEEZY_STORE_ID: string;
}>;
//# sourceMappingURL=env.d.ts.map