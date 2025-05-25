import { GithubRepositoryRating } from "../../models/domain/githubRepositoryRating";
import { GithubRepositoryRatingEntity } from "../../models/persistance/githubRepositoryRatingEntity";

export class GithubRepositoryMapper {

    static toDomain(entity: GithubRepositoryRatingEntity): GithubRepositoryRating {
        return {
            id: entity.id,
            name: entity.repositoryName,
            starts: entity.repositoryStarts,
            createdAt: entity.createdAt
        }
    }
}
