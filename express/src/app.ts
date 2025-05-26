import express from 'express'

import GitHubRatingsRouter from './controllers/githubRatingsController'
import { errorHandler } from './middlewares/errorHandler'

const app = express()

app.use(express.json())

app.use('/api/v1', GitHubRatingsRouter)

// Global error handler
app.use(errorHandler)

export default app
