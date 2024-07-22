export interface Log {
  headers: Record<string, string | undefined>
  url: {
    path: string
    protocol: string
    query: string
  }
  method: string
  client_ip: string
  "request-timestamp": string
}
