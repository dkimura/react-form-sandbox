import * as y from 'yup'

export const user = y.object({
  email: y.string().required(),
  id: y.number(),
  name: y.string().required(),
})

export type User = y.InferType<typeof user>
