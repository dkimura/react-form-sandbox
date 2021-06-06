import * as s from 'superstruct'

export const user = s.object({
  email: s.string(),
  id: s.optional(s.number()),
  name: s.string(),
})

export type User = s.Infer<typeof user>
