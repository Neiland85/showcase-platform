export interface Project {

  id: string

  name: string

  description: string

  repositoryUrl: string

  stack: {
    backend?: string
    frontend?: string
    database?: string
  }

  demoEndpoint?: string

}
