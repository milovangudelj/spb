import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    SOME_SERVER_ENV_VAR: z.string().min(1),
  },
  runtimeEnv: {
    SOME_SERVER_ENV_VAR: process.env.SOME_SERVER_ENV_VAR,
  },
});
