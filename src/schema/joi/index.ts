import * as j from 'joi'

export const user = j.object({
  email: j.string(),
  id: j.number().optional(),
  name: j.string(),
})

export type User = {
  email: string
  id?: number
  name: string
}
