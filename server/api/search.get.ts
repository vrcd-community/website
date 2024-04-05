export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const runtimeConfig = useRuntimeConfig(event)

  const searchResult = await $fetch<SearchResultBackend>(
    runtimeConfig.searchEndpoint,
    {
      query: { query: query.query },
      headers: {
        authorization: "Bearer " + runtimeConfig.searchApiKey,
      },
    }
  )

  return {
    timing: searchResult.timing,
    hits: searchResult.hits.map((hit) => ({
      title: hit._source.title,
      chunkContent: hit._source.chunk.content,
      chunkTitle: hit._source.chunk.title,
      chunkLevel: hit._source.chunk.level,
      uri: hit._source.extra.path,
      source: hit._source.extra.source,
    })),
  } as SearchResult
})
