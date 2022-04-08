import db from '../db.js';
import { userController, updateUser } from '../controller/user.controller.js'

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
        const script = await userController(user.partner_id)
        let values = []
        switch (user.partner_id) {
            case 1 :  values = [user.cpf, user.name, user.data_admissao, user.email, user.partner_id]
            break

            case 2 :  values = [user.cpf, user.name, user.data_admissao, user.endereco, user.partner_id]
            break
    
            case 3 :  values = [user.cpf, user.name, user.peso, user.altura, user.partner_id]
            break
    
            case 4 :  values = [user.cpf, user.horas_meditacao, user.partner_id]
            break

            default : values = []
        }        
      
        const { rows } = await db.query(script, values);
        
        const [newUser] = rows

        return newUser
    }

    async update(user) {
        const script = await updateUser(user.partner_id)
        let values = []
        switch (user.partner_id) {
            case 1 :  values = [user.name, user.data_admissao, user.email, user.partner_id, user.cpf]
            break

            case 1 :  values = [user.name, user.data_admissao, user.endereco, user.partner_id, user.cpf]
            break
    
            case 3 :  values = [user.name, user.peso, user.altura, user.partner_id, user.cpf]
            break
    
            case 4 :  values = [user.horas_meditacao, user.partner_id, user.cpf]
            break

            default : values = []
        }        
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