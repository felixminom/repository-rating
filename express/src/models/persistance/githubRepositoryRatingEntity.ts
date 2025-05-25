import { UUID } from "../common";

export interface GithubRepositoryRatingEntity {
    id: UUID,
    repositoryName: string,
    repositoryCreatedAt: Date,
    repositoryStarts: number,
    createdAt: Date,
    updatedAt: Date,
    createdBy: UUID
}
