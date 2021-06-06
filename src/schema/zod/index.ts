import * as z from 'zod'

export const user = z.object({
  email: z.string(),
  id: z.number().optional(),
  name: z.string(),
})

export type User = z.infer<typeof user>
