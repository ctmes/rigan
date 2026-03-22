import * as z from "zod";
export declare const plausibleEnvSchema: z.ZodObject<{
    PLAUSIBLE_API_KEY: z.ZodString;
    PLAUSIBLE_SITE_ID: z.ZodString;
    PLAUSIBLE_BASE_URL: z.ZodString;
}, "strip", z.ZodTypeAny, {
    PLAUSIBLE_API_KEY: string;
    PLAUSIBLE_SITE_ID: string;
    PLAUSIBLE_BASE_URL: string;
}, {
    PLAUSIBLE_API_KEY: string;
    PLAUSIBLE_SITE_ID: string;
    PLAUSIBLE_BASE_URL: string;
}>;
export declare const googleAnalyticsEnvSchema: z.ZodObject<{
    GOOGLE_ANALYTICS_CLIENT_EMAIL: z.ZodString;
    GOOGLE_ANALYTICS_PRIVATE_KEY: z.ZodString;
    GOOGLE_ANALYTICS_PROPERTY_ID: z.ZodString;
}, "strip", z.ZodTypeAny, {
    GOOGLE_ANALYTICS_CLIENT_EMAIL: string;
    GOOGLE_ANALYTICS_PRIVATE_KEY: string;
    GOOGLE_ANALYTICS_PROPERTY_ID: string;
}, {
    GOOGLE_ANALYTICS_CLIENT_EMAIL: string;
    GOOGLE_ANALYTICS_PRIVATE_KEY: string;
    GOOGLE_ANALYTICS_PROPERTY_ID: string;
}>;
//# sourceMappingURL=env.d.ts.map