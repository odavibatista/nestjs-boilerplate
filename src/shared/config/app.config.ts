import 'dotenv/config';

import z, { ZodError } from 'zod';
import { EnvironmentException } from '../domain/errors/Environment.exception';
import { join } from 'path';

const appConfigurationsSchema = z.object({
  FRONTEND_URL: z.string().min(1),

  DB_ENGINE: z.string().min(1).max(12),
  DB_HOST: z.string().min(1),
  DB_PORT: z.number(),
  DB_USER: z.string().min(1),
  DB_PASSWORD: z.string().min(1),
  DB_DATABASE: z.string().min(1),
  DB_ENTITIES: z.string().min(1),
  DB_SYNCHRONIZE: z.boolean(),
  DB_LOGGING: z.boolean(),

  API_URL: z.string().min(1),
  JWT_KEY: z.string().min(1),
  API_PORT: z.number(),
  NODE_ENV: z
    .enum(['development', 'production', 'test', 'local'])
    .default('development'),
  SSL: z.boolean().default(false),

  CAPTCHA_SECRET: z.string().min(1),

  CRYPTO_SECRET: z.string().min(1),

  CRYPTO_IV: z.string().min(1),

  APP_SECRET: z.string().min(1),

  REDIS_HOST: z.string().min(1),
  REDIS_PORT: z.number(),
});

let appConfigurations: z.infer<typeof appConfigurationsSchema> = {};

try {
  appConfigurations = appConfigurationsSchema.parse({
    FRONTEND_URL: process.env.FRONTEND_URL,
    NODE_ENV: process.env.NODE_ENV,

    DB_ENGINE: process.env.DB_ENGINE,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: parseInt(process.env.DB_PORT),
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE:
      process.env.NODE_ENV === 'production'
        ? process.env.DB_DATABASE
        : process.env.DB_DATABASE.concat('_' + process.env.NODE_ENV),
    DB_ENTITIES:
      process.env.NODE_ENV === 'test'
        ? join(__dirname, '../../**/*.entity.ts')
        : process.env.DB_ENTITIES,
    DB_SYNCHRONIZE: process.env.NODE_ENV === 'development' ? true : false,
    DB_LOGGING: process.env.NODE_ENV === 'test' ? false : true,

    API_URL: process.env.API_URL,
    JWT_KEY: process.env.JWT_KEY,
    API_PORT: parseInt(process.env.API_PORT),
    SSL: process.env.NODE_ENV === 'production' ? true : false,

    CAPTCHA_SECRET: process.env.CAPTCHA_SECRET,

    CRYPTO_SECRET: process.env.CRYPTO_SECRET,

    CRYPTO_IV: process.env.CRYPTO_IV,

    APP_SECRET: process.env.APP_SECRET,    
    
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: parseInt(process.env.REDIS_PORT),
  });
} catch (error) {
  if (error instanceof ZodError) {
    throw new EnvironmentException(error);
  }
}

export { appConfigurations };
