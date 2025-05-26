import { GithubRepositoryRating } from '../../models/domain/githubRepositoryRating'
import { GithubRepositoryRatingEntity } from '../../models/persistance/githubRepositoryRatingEntity'

export const GithubRepositoryMapper = {
  toDomain(entity: GithubRepositoryRatingEntity): GithubRepositoryRating {
    return {
      createdAt: entity.createdAt,
      id: entity.id,
      name: entity.repositoryName,
      starts: entity.repositoryStarts,
    }
  },
}
