import db from '../db.js';

class ClientRepository {
    async findAllClients() {
        const query = `
            SELECT *
            FROM clients        
        `

        const { rows } = await db.query(query);

        return rows || []
    }

    async findClientById(client_id) {        
            const query = `
                SELECT *
                FROM clients
                WHERE client_id = $1        
            `
            const values = [client_id]
            const { rows } = await db.query(query, values);
    
            const [client] = rows
            return client || null      

    }

    async create(client) {
        const script = `
            INSERT INTO clients (name)
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
            UPDATE clients
            SET
                name = $1            
            WHERE client_id = $2            
        `
        const values = [client.name, client.client_id]
        await db.query(script, values)  
    }

    async remove(client_id) {
        const script = `
            DELETE 
            FROM clients
            WHERE client_id = $1
        `
        const values = [client_id]

        await db.query(script, values) 
    }

}

export default new ClientRepository()