import "server-only";

import { z } from "zod";

const envSchema = z.object({
	AUTH_SECRET: z.string().readonly(),
	SECURITY_TOKEN: z.string().readonly(),
});

export const env = envSchema.parse(process.env);
