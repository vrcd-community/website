import { search } from "../searchUtils"
import { z } from "zod"

const searchSchema = z.object({
  query: z.string().max(100),
  offset: z.number().int().nonnegative().default(0),
  size: z.number().int().nonnegative().max(100).default(30),
  filter: z
    .object({
      source: z.string().optional(),
    })
    .optional(),
})

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig(event)
  const body = await readValidatedBody(event, (body) =>
    searchSchema.safeParse(body)
  )

  if (!body.success)
    throw createError({
      status: 400,
      statusMessage: "Invalid request body",
    })

  const query = body.data as SearchParameters

  return await search(
    query.query,
    runtimeConfig.searchEndpoint,
    runtimeConfig.searchApiKey,
    query.offset,
    query.size,
    query.filter
  )
})
