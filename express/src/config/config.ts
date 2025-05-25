import dotenv from 'dotenv'

interface Config {
    port: number
    nodeEnv: string
}

dotenv.config()

const config: Config = {
    port: Number(process.env.PORT) || 8080,
    nodeEnv: process.env.NODE_ENV || 'dev',
}

export default config
