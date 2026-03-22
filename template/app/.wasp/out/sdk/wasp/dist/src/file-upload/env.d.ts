import * as z from "zod";
export declare const fileUploadEnvSchema: z.ZodObject<{
    AWS_S3_REGION: z.ZodString;
    AWS_S3_IAM_ACCESS_KEY: z.ZodString;
    AWS_S3_IAM_SECRET_KEY: z.ZodString;
    AWS_S3_FILES_BUCKET: z.ZodString;
}, "strip", z.ZodTypeAny, {
    AWS_S3_REGION: string;
    AWS_S3_IAM_ACCESS_KEY: string;
    AWS_S3_IAM_SECRET_KEY: string;
    AWS_S3_FILES_BUCKET: string;
}, {
    AWS_S3_REGION: string;
    AWS_S3_IAM_ACCESS_KEY: string;
    AWS_S3_IAM_SECRET_KEY: string;
    AWS_S3_FILES_BUCKET: string;
}>;
//# sourceMappingURL=env.d.ts.map