import { Pool } from 'pg'

const connectionString = process.env.CONNECTION_API

const db = new Pool({connectionString})

export default db