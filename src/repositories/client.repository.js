import db from '../db.js';

class ClientRepository {
    async findAllClients() {
        const query = `
            SELECT *
            FROM application_client        
        `

        const { rows } = await db.query(query);

        return rows || []
    }

    async findClientById(uuid) {        
            const query = `
                SELECT *
                FROM application_client
                WHERE uuid = $1        
            `
            const values = [uuid]
            const { rows } = await db.query(query, values);
    
            const [client] = rows
            return client        

    }

    async create(client) {
        const script = `
            INSERT INTO application_client (name)
            VALUES($1)
            RETURNING *                  
        `
        const values = [client.name]
        const { rows } = await db.query(script, values);
        
        const [newClient] = rows

        return newClient
    }

    async update(client) {
        const script = `
            UPDATE application_client
            SET
                name = $1            
            WHERE uuid = $2            
        `
        const values = [client.name, client.uuid]
        await db.query(script, values)  
    }

    async remove(uuid) {
        const script = `
            DELETE 
            FROM application_client
            WHERE uuid = $1
        `
        const values = [uuid]

        await db.query(script, values) 
    }

}

export default new ClientRepository()