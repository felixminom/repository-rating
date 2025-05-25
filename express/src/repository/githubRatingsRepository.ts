import { GithubRepositoryRatingEntity } from "../models/persistance/githubRepositoryRatingEntity";
import { GithubRepositoryRating } from "../models/domain/githubRepositoryRating";
import { GithubRepositoryMapper } from "./mappers/githubRepositoryEntityMapper";

let ratings: GithubRepositoryRatingEntity[] = []

export const getAll = async (): Promise<GithubRepositoryRating[]> => {
    return ratings.map(GithubRepositoryMapper.toDomain)
}
