import { UUID } from '../common'

export interface GithubRepositoryRatingEntity {
  createdAt: Date
  createdBy: UUID
  id: UUID
  repositoryCreatedAt: Date
  repositoryName: string
  repositoryStarts: number
  updatedAt: Date
}
