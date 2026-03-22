import * as z from "zod";

export const demoAiAppEnvSchema = z.object({
  OPENAI_API_KEY: z.string({
    invalid_type_error: "OPENAI_API_KEY is required for the demo AI app",
  }),
});
