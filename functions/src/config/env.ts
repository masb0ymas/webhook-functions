import 'dotenv/config'

/**
 *
 * @param value
 * @param fallback
 * @returns
 */
function getEnv(value: any, fallback?: any): any {
  const result = process.env[value]

  // check env value
  if ([undefined, null, ''].includes(result)) {
    // check fallback
    if (fallback) {
      return fallback
    }

    return undefined
  }

  return result
}

/**
 * App Env
 */
const appEnv = {
  // Application
  NODE_ENV: getEnv('NODE_ENV', 'development'),

  APP_KEY: getEnv('APP_KEY'),
  APP_NAME: getEnv('APP_NAME', 'expresso'),
  APP_LANG: getEnv('APP_LANG', 'id'),
  APP_PORT: Number(getEnv('APP_PORT', 8000)),

  // Config
  AXIOS_TIMEOUT: getEnv('AXIOS_TIMEOUT', '5m'),
  RATE_LIMIT: Number(getEnv('RATE_LIMIT', 100)),
  RATE_DELAY: getEnv('RATE_DELAY', '5m'),
}

/**
 * Base URL Env
 */
const baseURLEnv = {
  // Base URL
  URL_CLIENT_STAGING: getEnv(
    'URL_CLIENT_STAGING',
    'https://sandbox.example.com'
  ),
  URL_SERVER_STAGING: getEnv(
    'URL_SERVER_STAGING',
    'https://api-sandbox.example.com'
  ),

  URL_CLIENT_PRODUCTION: getEnv('URL_CLIENT_PRODUCTION', 'https://example.com'),
  URL_SERVER_PRODUCTION: getEnv(
    'URL_SERVER_PRODUCTION',
    'https://api.example.com'
  ),
}

/**
 * Third Party Env
 */
const thirdPartyEnv = {
  // open street map
  OPEN_STREET_MAP_URL: getEnv(
    'OPEN_STREET_MAP_URL',
    'https://nominatim.openstreetmap.org'
  ),

  // Telegram
  TELEGRAM_API_URL: getEnv('TELEGRAM_API_URL', 'https://api.telegram.org'),
  TELEGRAM_BOT_TOKEN: getEnv('TELEGRAM_BOT_TOKEN'),
  TELEGRAM_CHAT_ID: getEnv('TELEGRAM_CHAT_ID'),

  // Slack
  SLACK_API_URL: getEnv('SLACK_API_URL', 'https://slack.com/api'),
  SLACK_TOKEN: getEnv('SLACK_TOKEN'),
}

export const env = {
  ...appEnv,
  ...baseURLEnv,
  ...thirdPartyEnv,
}
