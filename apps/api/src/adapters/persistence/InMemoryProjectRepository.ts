import { ProjectRepository } from "../../domain/ProjectRepository"
import { Project } from "../../domain/Project"

export class InMemoryProjectRepository implements ProjectRepository {

  private projects: Project[] = []

  async findById(id: string) {

    return this.projects.find(p => p.id === id) || null

  }

  async findAll() {

    return this.projects

  }

  async save(project: Project) {

    this.projects.push(project)

  }

}
