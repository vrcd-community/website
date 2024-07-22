import { Log } from "../types/log"

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)

  if (!config.logger.enabled) {
    return
  }

  const rawUrl = getRequestURL(event, {
    xForwardedProto: true,
  })

  const path = rawUrl.pathname
  const host = rawUrl.host
  const protocol = rawUrl.protocol.replace(":", "")
  const query = rawUrl.search

  const url = {
    path,
    protocol,
    query,
    host,
  }

  const method = event.method
  const headers = getRequestHeaders(event)
  const clientIp =
    getRequestIP(event, {
      xForwardedFor: true,
    }) ||
    event.node.req.socket.remoteAddress ||
    "0.0.0.0"
  const requestTimestamp = Date.now()

  console.log(event.node.req)

  const log: Log = {
    headers,
    url,
    method,
    client_ip: clientIp,
    "request-timestamp": String(requestTimestamp),
  }

  console.log(JSON.stringify(log))
  postLog(log, config.logger)
})

function postLog(
  log: Log,
  loggerConfig: {
    baseUrl: string
    prefix: string
    zone: string
    apiKey: string
    pipeline: string
  }
) {
  const loggerBaseUrl = loggerConfig.baseUrl
  const loggerPrefix = loggerConfig.prefix
  const loggerZone = loggerConfig.zone
  const loggerApiKey = loggerConfig.apiKey
  const loggerPipeline = loggerConfig.pipeline

  fetch(loggerBaseUrl + `/push/${loggerPrefix}/${loggerZone}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "user-agent": `${loggerPrefix}-${loggerZone}`,
      "x-api-key": loggerApiKey,
      "x-pipeline": loggerPipeline,
    },
    body: JSON.stringify(log),
  })
    .then(async (response) => {
      const responseJson = await response.json()

      if (!responseJson.database.errors) {
        return
      }

      console.error("Failed to post log", JSON.stringify(responseJson, null, 2))
    })
    .catch((error) => {
      console.error("Failed to post log", error)
    })
}
