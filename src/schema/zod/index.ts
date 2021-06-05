import * as z from 'zod'

const task = z.object({
  name: z.string(),
})

export const taskFormSchema = z
  .object({
    tasks: z.array(task).optional(),
  })
  .optional()

export type TaskFormValues = z.infer<typeof taskFormSchema>

export const value: TaskFormValues = undefined
