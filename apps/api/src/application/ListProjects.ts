import { ProjectRepository } from "../domain/ProjectRepository"

export class ListProjects {

  constructor(private repository: ProjectRepository) {}

  async execute() {

    return this.repository.findAll()

  }

}
