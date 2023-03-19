import TelegramService from '@apps/services/telegram.service'
import HttpResponse from '@core/modules/response/HttpResponse'
import route from '@routes/v1'
import { type Request, type Response } from 'express'
import _ from 'lodash'

route.get('/docker', async function getDocker(_req: Request, res: Response) {
  const data = {
    message: 'Webhook Docker is Ready...',
  }

  const httpResponse = HttpResponse.get(data)
  return res.status(200).json(httpResponse)
})

route.post('/docker', async function postDocker(req: Request, res: Response) {
  const formData = req.getBody()

  const buildVersion = _.get(formData, 'push_data.tag', '')
  const repoName = _.get(formData, 'repository.name', '')

  const message = `Docker ${repoName} (${buildVersion}) is ready...`

  const response = await TelegramService.sendMessage(message)

  const httpResponse = HttpResponse.get(response.data)
  return res.status(200).json(httpResponse)
})
