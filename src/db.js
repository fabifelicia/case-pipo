import { Pool } from 'pg'

const connectionString = 'postgres://yhxsdbwp:zpM3E4MZroTKZvyIzPcWdfW5pMQtXpSp@tuffi.db.elephantsql.com/yhxsdbwp'

const db = new Pool({connectionString})

export default db