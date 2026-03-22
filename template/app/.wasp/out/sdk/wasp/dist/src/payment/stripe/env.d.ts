import * as z from "zod";
export declare const stripeEnvSchema: z.ZodObject<{
    PAYMENTS_HOBBY_SUBSCRIPTION_PLAN_ID: z.ZodString;
    PAYMENTS_PRO_SUBSCRIPTION_PLAN_ID: z.ZodString;
    PAYMENTS_CREDITS_10_PLAN_ID: z.ZodString;
} & {
    STRIPE_API_KEY: z.ZodString;
    STRIPE_WEBHOOK_SECRET: z.ZodString;
}, "strip", z.ZodTypeAny, {
    PAYMENTS_HOBBY_SUBSCRIPTION_PLAN_ID: string;
    PAYMENTS_PRO_SUBSCRIPTION_PLAN_ID: string;
    PAYMENTS_CREDITS_10_PLAN_ID: string;
    STRIPE_API_KEY: string;
    STRIPE_WEBHOOK_SECRET: string;
}, {
    PAYMENTS_HOBBY_SUBSCRIPTION_PLAN_ID: string;
    PAYMENTS_PRO_SUBSCRIPTION_PLAN_ID: string;
    PAYMENTS_CREDITS_10_PLAN_ID: string;
    STRIPE_API_KEY: string;
    STRIPE_WEBHOOK_SECRET: string;
}>;
//# sourceMappingURL=env.d.ts.map