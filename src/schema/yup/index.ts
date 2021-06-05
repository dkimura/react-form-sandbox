import * as Yup from 'yup'

const task = Yup.object({
  name: Yup.string().required(),
})

export const taskFormSchema = Yup.object({
  name: Yup.string(),
  tasks: Yup.array(task),
}).optional()

export type TaskFormValues = Yup.InferType<typeof taskFormSchema>

export const value: TaskFormValues = {
  name: 'hoge',
  // tasks: [],
}
