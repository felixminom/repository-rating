import { GithubRepositoryRating } from '../models/domain/githubRepositoryRating'
import * as GithubRatingRepository from '../repository/githubRatingsRepository'

export const getRatings = async (): Promise<GithubRepositoryRating[]> => {
  return GithubRatingRepository.getAll()
}
