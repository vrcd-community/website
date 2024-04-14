import { search } from "../searchUtils"
import z from "zod"

const searchSchema = z.object({
  query: z.string(),
})

export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(event, (query) =>
    searchSchema.safeParse(query)
  )
  const runtimeConfig = useRuntimeConfig(event)

  if (!query.success)
    throw createError({
      status: 400,
      statusMessage: "Invalid request query",
    })

  return await search(
    query.data.query,
    runtimeConfig.searchEndpoint,
    runtimeConfig.searchApiKey
  )
})
