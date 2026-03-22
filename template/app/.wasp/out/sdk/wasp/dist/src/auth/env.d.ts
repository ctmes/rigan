import * as z from 'zod';
export declare const authEnvSchema: z.ZodObject<{
    ADMIN_EMAILS: z.ZodEffects<z.ZodDefault<z.ZodString>, string[], string | undefined>;
}, "strip", z.ZodTypeAny, {
    ADMIN_EMAILS: string[];
}, {
    ADMIN_EMAILS?: string | undefined;
}>;
//# sourceMappingURL=env.d.ts.map