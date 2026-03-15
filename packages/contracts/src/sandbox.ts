export interface SandboxSession {

  id: string

  projectId: string

  containerId: string

  status:
    | "starting"
    | "running"
    | "stopped"

}
