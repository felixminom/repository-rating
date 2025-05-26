import { v4 as uuidv4 } from 'uuid'

import { GithubRepositoryRating } from '../models/domain/githubRepositoryRating'
import { GithubRepositoryRatingEntity } from '../models/persistance/githubRepositoryRatingEntity'

import { GithubRepositoryMapper } from './mappers/githubRepositoryEntityMapper'

const dummyRating: GithubRepositoryRatingEntity = {
  createdAt: new Date(),
  createdBy: uuidv4(),
  id: uuidv4(),
  repositoryCreatedAt: new Date('2011-01-26T19:01:12Z'),
  repositoryName: 'octocat/hello-world',
  repositoryStarts: 1337,
  updatedAt: new Date(),
}

const ratings: GithubRepositoryRatingEntity[] = [dummyRating]

export const getAll = async (): Promise<GithubRepositoryRating[]> => {
  return Promise.resolve(
    ratings.map((rating) => GithubRepositoryMapper.toDomain(rating))
  )
}
