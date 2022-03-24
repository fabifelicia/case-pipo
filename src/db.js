import pkg from 'pg'

const { Pool } = pkg

const connectionString = process.env.CONNECTION_API
const db = new Pool({connectionString})

export default db