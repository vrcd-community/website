interface SearchResultDebugScoreBackend {
  max: number
}

interface SearchResultDebugBackend {
  _score: SearchResultDebugScoreBackend
  from: number
  size: number
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
