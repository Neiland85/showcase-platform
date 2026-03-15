import Fastify from "fastify"

import { projectRoutes } from "./projectRoutes"

const app = Fastify({
  logger: true
})

app.get("/health", async () => {
  return { status: "ok" }
})

app.register(projectRoutes)

app.listen({
  port: 4000
})
