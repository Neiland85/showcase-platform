export interface ProjectAnalysis {

  projectId: string

  architecture: string

  testCoverage: number

  dependencies: number

  services: string[]

  lastAnalyzedAt: string

}
