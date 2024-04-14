interface SearchResult {
  timing: SearchResultTiming
  hits: SearchHit[]
  total: number
}

interface SearchResultTiming {
  took: number
  timeout: boolean
}

interface SearchHit {
  title: string
  chunkContent: string
  chunkTitle: string
  chunkLevel: number
  uri: string
  source: string
  tags: string[]
}

interface SearchFilter {
  source: string
}

interface SearchParameters {
  query: string
  filter?: SearchFilter
  offset?: number
  size?: number
}
