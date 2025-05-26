import { Request, Response, Router } from 'express'

import * as GithubReposoritoryRatingService from '../services/githubRepositoryRatingService'

const router = Router()

router.get('/ratings', async (req: Request, res: Response) => {
  const ratings = await GithubReposoritoryRatingService.getRatings()
  res.json(ratings)
})

export default router
