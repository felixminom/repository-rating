import { Request, Response, Router } from 'express'

import * as GithubRepositoryRatingService from '../services/githubRepositoryRatingService'

const router = Router()

router.get('/ratings', async (req: Request, res: Response) => {
  const ratings = await GithubRepositoryRatingService.getRatings()
  res.json(ratings)
})

export default router
