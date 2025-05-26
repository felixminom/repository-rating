import dotenv from 'dotenv'

interface Config {
  nodeEnv: string
  port: number
}

dotenv.config()

const config: Config = {
  nodeEnv: process.env.NODE_ENV ?? 'dev',
  port: Number(process.env.PORT) || 8080,
}

export default config
