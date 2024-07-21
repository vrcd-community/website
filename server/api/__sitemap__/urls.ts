import { serverQueryContent } from "#content/server"
import { asSitemapUrl, defineSitemapEventHandler } from "#imports"
import { PostBase } from "~/types/post"

export default defineSitemapEventHandler(async (e) => {
  const contentList = (await serverQueryContent(e).find()) as PostBase[]
  const sitemap = contentList.map((c) => {
    return asSitemapUrl({
      loc: c._path,
      lastmod: new Date(c.date).toISOString(),
    })
  })

  const latestTerms = getLatestTerms(contentList)

  sitemap.push(
    ...latestTerms.map((term) => {
      return asSitemapUrl({
        loc: "/" + term.termType,
        lastmod: new Date(term.date).toISOString(),
      })
    })
  )

  return sitemap
})

function getLatestTerms(terms: PostBase[]) {
  const group: Record<string, PostBaseWithTermType[]> = {}

  terms.forEach((term) => {
    const { _path } = term
    const regex = /terms\/(.+)\//

    if (!_path) return group

    const regexResult = regex.exec(_path)
    const termType = regexResult?.[0]

    if (!termType) {
      return group
    }

    if (!group[termType]) group[termType] = []

    group[termType].push({
      ...term,
      termType,
    })
  })

  const result: PostBaseWithTermType[] = []

  Object.keys(group).forEach((key) => {
    result.push(
      group[key].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      })[0]
    )
  })

  return result
}

interface PostBaseWithTermType extends PostBase {
  termType: string
}
