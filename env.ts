import "server-only";

import { z } from "zod";

const envSchema = z.object({
	CLIENT_ID: z
		.string()
		.transform((v) => parseInt(v))
		.readonly(),
	CLIENT_NUMBER: z
		.string()
		.transform((v) => parseInt(v))
		.readonly(),
	AUTH_SECRET: z.string().readonly(),
	SECURITY_TOKEN: z.string().readonly(),
});

export const env = envSchema.parse(process.env);
