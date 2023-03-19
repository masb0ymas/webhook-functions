import FetchAxios from '@config/axios'
import {
  TELEGRAM_API_URL,
  TELEGRAM_BOT_TOKEN,
  TELEGRAM_CHAT_ID,
} from '@config/env'
import { type AxiosResponse } from 'axios'
import qs from 'qs'

const Fetcher = new FetchAxios(TELEGRAM_API_URL)
const BOT_TOKEN = String(TELEGRAM_BOT_TOKEN)

export default class TelegramService {
  public static api = Fetcher.default

  /**
   * Get Updates
   * @returns
   */
  public static async getUpdates(): Promise<AxiosResponse<any>> {
    const response = await this.api.get(`/bot${BOT_TOKEN}/getUpdates`)
    return response
  }

  public static async sendMessage(
    message: string
  ): Promise<AxiosResponse<any>> {
    const chatId = String(TELEGRAM_CHAT_ID)

    const queryParams = qs.stringify({
      chat_id: chatId,
      text: message,
    })

    const response = await this.api.get(
      `/bot${BOT_TOKEN}/sendMessage?${queryParams}`
    )
    return response
  }
}
