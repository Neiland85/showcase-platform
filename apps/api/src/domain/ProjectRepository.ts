import { Project } from "./Project"

export interface ProjectRepository {

  findById(id: string): Promise<Project | null>

  findAll(): Promise<Project[]>

  save(project: Project): Promise<void>

}
