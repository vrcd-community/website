export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const runtimeConfig = useRuntimeConfig(event)

  const searchResult = await $fetch<SearchResult>(
    runtimeConfig.searchEndpoint,
    { query: { query: query.query } }
  )

  return searchResult
})
