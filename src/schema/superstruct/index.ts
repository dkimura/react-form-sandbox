import * as s from 'superstruct'

const task = s.object({
  name: s.string(),
})

export const tasks = s.optional(
  s.object({
    tasks: s.optional(s.array(task)),
  })
)

export type TaskFormValues = s.Infer<typeof tasks>

export const value: TaskFormValues = undefined
