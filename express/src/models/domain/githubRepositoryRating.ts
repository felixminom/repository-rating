import { UUID } from "../common";

export interface GithubRepositoryRating {
    id: UUID,
    name: string,
    starts: number,
    createdAt: Date
}
