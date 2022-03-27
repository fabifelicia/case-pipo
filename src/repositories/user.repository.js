import db from '../db.js';

class UserRepository {
    async findAllUsers() {
        const query = `
            SELECT *
            FROM users     
        `
        const { rows } = await db.query(query);

        return rows || []
    }

    async findUserById(cpf) {
        const query = `
            SELECT *
            FROM users
            WHERE cpf = $1        
        `
        const values = [cpf]
        const { rows } = await db.query(query, values);

        const [user] = rows

        return user
    }

    async create(user) {
        const script = `
            INSERT INTO users (cpf, name)
            VALUES($1, $2)
            RETURNING cpf, name                  
        `
        const values = [user.name]
        const { rows } = await db.query(script, values);
        
        const [newUser] = rows

        return newUser
    }

    async update(user) {
        const script = `
            UPDATE users
            SET
                name = $1            
            WHERE cpf = $2            
        `
        const values = [user.name, user.cpf]
        await db.query(script, values)  
    }

    async remove(cpf) {
        const script = `
            DELETE 
            FROM users
            WHERE cpf = $1
        `
        const values = [cpf]

        await db.query(script, values) 
    }

}

export default new UserRepository()