import { HttpError } from "wasp/server";
export function ensureArgsSchemaOrThrowHttpError(schema, rawArgs) {
    const parseResult = schema.safeParse(rawArgs);
    if (!parseResult.success) {
        console.error(
        // We keep the `cause` property so that errors have stack traces pointing
        // to the original schema.
        new Error("Operation arguments validation failed:\n" +
            JSON.stringify(parseResult.error.flatten(), null, 2), { cause: parseResult.error }));
        throw new HttpError(400, "Operation arguments validation failed", {
            cause: parseResult.error,
        });
    }
    else {
        return parseResult.data;
    }
}
//# sourceMappingURL=validation.js.map