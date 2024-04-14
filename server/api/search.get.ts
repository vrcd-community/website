import { search } from "../searchUtils"
import z from "zod"

const searchSchema = z.object({
  query: z.string().max(100),
  offset: z.coerce.number().int().nonnegative().default(0),
  size: z.coerce.number().int().nonnegative().max(100).default(30),
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
    runtimeConfig.searchApiKey,
    query.data.offset,
    query.data.size
  )
})
