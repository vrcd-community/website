interface Timing {
  took: number
  timeout: boolean
}

interface Shards {
  total: number
  successful: number
  skipped: number
  failed: number
}

interface Data {
  value: number
  relation: string
}

interface Score {
  max: number
}

interface Debug {
  _shards: Shards
  _data: Data
  _score: Score
}

interface Chunk {
  title: string
  level: number
  content: string
}

interface Extra {
  source: string
  tags: string[]
  path: string
}

interface Source {
  chunk: Chunk
  title: string
  extra: Extra
}

interface Hit {
  _score: number
  _source: Source
}

interface SearchResultBackend {
  timing: Timing
  debug: Debug
  hits: Hit[]
}
