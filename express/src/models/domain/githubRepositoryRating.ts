import { UUID } from '../common'

export interface GithubRepositoryRating {
  createdAt: Date
  id: UUID
  name: string
  stars: number
}
