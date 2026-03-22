export declare const serverEnvValidationSchema: import("zod").ZodObject<{
    ADMIN_EMAILS: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodString>, string[], string | undefined>;
    STRIPE_API_KEY: import("zod").ZodString;
    STRIPE_WEBHOOK_SECRET: import("zod").ZodString;
    LEMONSQUEEZY_API_KEY: import("zod").ZodString;
    LEMONSQUEEZY_WEBHOOK_SECRET: import("zod").ZodString;
    LEMONSQUEEZY_STORE_ID: import("zod").ZodString;
} & {
    PAYMENTS_HOBBY_SUBSCRIPTION_PLAN_ID: import("zod").ZodString;
    PAYMENTS_PRO_SUBSCRIPTION_PLAN_ID: import("zod").ZodString;
    PAYMENTS_CREDITS_10_PLAN_ID: import("zod").ZodString;
    POLAR_ORGANIZATION_ACCESS_TOKEN: import("zod").ZodString;
    POLAR_SANDBOX_MODE: import("zod").ZodString;
    POLAR_WEBHOOK_SECRET: import("zod").ZodString;
} & {
    OPENAI_API_KEY: import("zod").ZodString;
} & {
    AWS_S3_REGION: import("zod").ZodString;
    AWS_S3_IAM_ACCESS_KEY: import("zod").ZodString;
    AWS_S3_IAM_SECRET_KEY: import("zod").ZodString;
    AWS_S3_FILES_BUCKET: import("zod").ZodString;
} & {
    PLAUSIBLE_API_KEY: import("zod").ZodString;
    PLAUSIBLE_SITE_ID: import("zod").ZodString;
    PLAUSIBLE_BASE_URL: import("zod").ZodString;
} & {
    GOOGLE_ANALYTICS_CLIENT_EMAIL: import("zod").ZodString;
    GOOGLE_ANALYTICS_PRIVATE_KEY: import("zod").ZodString;
    GOOGLE_ANALYTICS_PROPERTY_ID: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    ADMIN_EMAILS: string[];
    PAYMENTS_HOBBY_SUBSCRIPTION_PLAN_ID: string;
    PAYMENTS_PRO_SUBSCRIPTION_PLAN_ID: string;
    PAYMENTS_CREDITS_10_PLAN_ID: string;
    STRIPE_API_KEY: string;
    STRIPE_WEBHOOK_SECRET: string;
    LEMONSQUEEZY_API_KEY: string;
    LEMONSQUEEZY_WEBHOOK_SECRET: string;
    LEMONSQUEEZY_STORE_ID: string;
    POLAR_ORGANIZATION_ACCESS_TOKEN: string;
    POLAR_SANDBOX_MODE: string;
    POLAR_WEBHOOK_SECRET: string;
    OPENAI_API_KEY: string;
    AWS_S3_REGION: string;
    AWS_S3_IAM_ACCESS_KEY: string;
    AWS_S3_IAM_SECRET_KEY: string;
    AWS_S3_FILES_BUCKET: string;
    PLAUSIBLE_API_KEY: string;
    PLAUSIBLE_SITE_ID: string;
    PLAUSIBLE_BASE_URL: string;
    GOOGLE_ANALYTICS_CLIENT_EMAIL: string;
    GOOGLE_ANALYTICS_PRIVATE_KEY: string;
    GOOGLE_ANALYTICS_PROPERTY_ID: string;
}, {
    PAYMENTS_HOBBY_SUBSCRIPTION_PLAN_ID: string;
    PAYMENTS_PRO_SUBSCRIPTION_PLAN_ID: string;
    PAYMENTS_CREDITS_10_PLAN_ID: string;
    STRIPE_API_KEY: string;
    STRIPE_WEBHOOK_SECRET: string;
    LEMONSQUEEZY_API_KEY: string;
    LEMONSQUEEZY_WEBHOOK_SECRET: string;
    LEMONSQUEEZY_STORE_ID: string;
    POLAR_ORGANIZATION_ACCESS_TOKEN: string;
    POLAR_SANDBOX_MODE: string;
    POLAR_WEBHOOK_SECRET: string;
    OPENAI_API_KEY: string;
    AWS_S3_REGION: string;
    AWS_S3_IAM_ACCESS_KEY: string;
    AWS_S3_IAM_SECRET_KEY: string;
    AWS_S3_FILES_BUCKET: string;
    PLAUSIBLE_API_KEY: string;
    PLAUSIBLE_SITE_ID: string;
    PLAUSIBLE_BASE_URL: string;
    GOOGLE_ANALYTICS_CLIENT_EMAIL: string;
    GOOGLE_ANALYTICS_PRIVATE_KEY: string;
    GOOGLE_ANALYTICS_PROPERTY_ID: string;
    ADMIN_EMAILS?: string | undefined;
}>;
//# sourceMappingURL=env.d.ts.map