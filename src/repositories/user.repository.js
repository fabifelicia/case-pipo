import db from '../db.js';
import { userController } from '../controller/user.controller.js'

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
        const script = await userController(user.uuid_plano)
        let values = []
        switch (user.uuid_plano) {
            case '8d0e8424-78cb-49ae-af75-d32d2176f1f2' :  values = [user.cpf, user.name, user.data_admissao, user.email, user.uuid_plano]
            break

            case 'e706ead8-511a-433a-956e-222084f66f40' :  values = [user.cpf, user.name, user.data_admissao, user.endereco, user.uuid_plano]
            break
    
            case '40245f1e-283c-49da-b404-abc71d2953a5' :  values = [user.cpf, user.name, user.peso, user.altura, user.uuid_plano]
            break
    
            case '8bea65ed-6c6c-47c7-8447-72b3c669c2bd' :  values = [user.cpf, user.horas_meditacao, user.uuid_plano]
            break

            default : values = []
        }        
      
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