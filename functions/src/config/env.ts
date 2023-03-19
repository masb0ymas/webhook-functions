import 'dotenv/config'

// node env
export const NODE_ENV = process.env.NODE_ENV ?? 'development'

// app
export const APP_KEY = process.env.APP_KEY ?? undefined
export const APP_NAME = process.env.APP_NAME ?? 'expresso'
export const APP_LANG = process.env.APP_LANG ?? 'id'
export const APP_PORT = Number(process.env.APP_PORT) ?? 8000

export const AXIOS_TIMEOUT = process.env.AXIOS_TIMEOUT ?? '5m'

// url staging
export const URL_CLIENT_STAGING =
  process.env.URL_CLIENT_STAGING ?? 'https://sandbox.example.com'
export const URL_SERVER_STAGING =
  process.env.URL_SERVER_STAGING ?? 'https://api-sandbox.example.com'

// url production
export const URL_CLIENT_PRODUCTION =
  process.env.URL_CLIENT_PRODUCTION ?? 'https://example.com'
export const URL_SERVER_PRODUCTION =
  process.env.URL_SERVER_PRODUCTION ?? 'https://api.example.com'

export const TELEGRAM_API_URL =
  process.env.TELEGRAM_API_URL ?? 'https://api.telegram.org'
export const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN ?? undefined
export const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID ?? undefined
