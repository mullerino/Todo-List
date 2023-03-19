import { FastifyInstance } from "fastify"
import { createTaskHandler, deleteTaskHandler, getTaskHandler, updateTaskHandler } from "./task.controller"
import { $ref } from "./task.schema"

export const taskRoutes = async (server: FastifyInstance) => {
  server.post(
    "/",
    {
      schema: {
        body: $ref("createTaskSchema"),
        response: {
          201: $ref("createTaskResponseSchema"),
        },
      },
    },
    createTaskHandler
  )

  server.get("/", getTaskHandler)

  server.delete("/delete/:id", deleteTaskHandler)

  server.put("/update/:id", {
    schema: {
      body: $ref("updateTaskSchema"),
      response: {
        201: $ref("createTaskSchema")
      }
    }
  }, updateTaskHandler)
}
