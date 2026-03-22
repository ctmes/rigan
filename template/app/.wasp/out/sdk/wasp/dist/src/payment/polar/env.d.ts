import * as z from "zod";
export declare const polarEnvSchema: z.ZodObject<{
    PAYMENTS_HOBBY_SUBSCRIPTION_PLAN_ID: z.ZodString;
    PAYMENTS_PRO_SUBSCRIPTION_PLAN_ID: z.ZodString;
    PAYMENTS_CREDITS_10_PLAN_ID: z.ZodString;
} & {
    POLAR_ORGANIZATION_ACCESS_TOKEN: z.ZodString;
    POLAR_SANDBOX_MODE: z.ZodString;
    POLAR_WEBHOOK_SECRET: z.ZodString;
}, "strip", z.ZodTypeAny, {
    PAYMENTS_HOBBY_SUBSCRIPTION_PLAN_ID: string;
    PAYMENTS_PRO_SUBSCRIPTION_PLAN_ID: string;
    PAYMENTS_CREDITS_10_PLAN_ID: string;
    POLAR_ORGANIZATION_ACCESS_TOKEN: string;
    POLAR_SANDBOX_MODE: string;
    POLAR_WEBHOOK_SECRET: string;
}, {
    PAYMENTS_HOBBY_SUBSCRIPTION_PLAN_ID: string;
    PAYMENTS_PRO_SUBSCRIPTION_PLAN_ID: string;
    PAYMENTS_CREDITS_10_PLAN_ID: string;
    POLAR_ORGANIZATION_ACCESS_TOKEN: string;
    POLAR_SANDBOX_MODE: string;
    POLAR_WEBHOOK_SECRET: string;
}>;
//# sourceMappingURL=env.d.ts.map