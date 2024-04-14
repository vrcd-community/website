interface SearchResultDebugScoreBackend {
  max: number
}

interface SearchResultDebugQueryBackend {
  from: number
  size: number
}

interface SearchResultDebugBackend {
  _score: SearchResultDebugScoreBackend
  query: SearchResultDebugQueryBackend
}

interface SearchResultChunkBackend {
  title: string
  level: number
  content: string
}

interface SearchResultExtraBackend {
  source: string
  tags: string[]
  path: string
}

interface SearchResultSourceBackend {
  chunk: SearchResultChunkBackend
  title: string
  extra: SearchResultExtraBackend
}

interface SearchResultHitBackend {
  _score: number
  _source: SearchResultSourceBackend
}

interface SearchResultBackend {
  timing: SearchResultTiming
  debug: SearchResultDebugBackend
  hits: SearchResultHitBackend[]
}
