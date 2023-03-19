import z from 'zod'
import {buildJsonSchemas} from 'fastify-zod'

const task = {
  title: z.string(),
  isComplete: z.boolean(),
}

const createTaskSchema = z.object({
  ...task,
})

const createTaskResponseSchema = z.object({
  ...task,
  id: z.number()
})

const updateTaskSchema = z.object({
  title: z.string().optional(),
  isComplete: z.boolean().optional()
})


export type ICreateTask = z.infer<typeof createTaskSchema>
export type IUpdateTask = z.infer<typeof updateTaskSchema>

export const { schemas: taskSchema, $ref } = buildJsonSchemas({
  createTaskSchema,
  createTaskResponseSchema,
  updateTaskSchema
})