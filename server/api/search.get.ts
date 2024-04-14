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
      uri: getUrl(
        hit._source.extra.source,
        hit._source.extra.path,
        hit._source.title,
        hit._source.chunk.title
      ),
      source: hit._source.extra.source,
    })),
  } as SearchResult
})

function getUrl(
  source: string,
  path: string,
  title: string,
  chunkTitle: string
) {
  switch (source) {
    case "creators.vrchat.com" ||
      "docs.vrchat.com" ||
      "udonsharp.docs.vrchat.com" ||
      "vcc.docs.vrchat.com" ||
      "clientsim.docs.vrchat.com":
      return (
        "https://docs.vrczh.org/" +
        path.replace(".md", "") +
        "#" +
        slugify(chunkTitle)
      )
    case "bookstack":
      return path + "#" + ("bkmrk-" + chunkTitle).substring(0, 26).toLowerCase()
    default:
      return path
  }
}

// https://github.com/mdit-vue/mdit-vue/blob/d493d4ca4cf5af4c54cca56a04b4bae5b8700f0e/packages/shared/src/slugify.ts
const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g
const rCombining = /[\u0300-\u036F]/g

function slugify(str: string): string {
  return (
    str
      .normalize("NFKD")
      // Remove accents
      .replace(rCombining, "")
      // Remove control characters
      .replace(rControl, "")
      // Replace special characters
      .replace(rSpecial, "-")
      // Remove continuos separators
      .replace(/-{2,}/g, "-")
      // Remove prefixing and trailing separators
      .replace(/^-+|-+$/g, "")
      // ensure it doesn't start with a number (#121)
      .replace(/^(\d)/, "_$1")
      // lowercase
      .toLowerCase()
  )
}
