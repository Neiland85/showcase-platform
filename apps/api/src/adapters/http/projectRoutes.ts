import { FastifyInstance } from "fastify"
import { ListProjects } from "../../application/ListProjects"
import { InMemoryProjectRepository } from "../persistence/InMemoryProjectRepository"

export async function projectRoutes(app: FastifyInstance) {

  const repository = new InMemoryProjectRepository()

  const listProjects = new ListProjects(repository)

  app.get("/projects", async () => {

    return listProjects.execute()

  })

}
