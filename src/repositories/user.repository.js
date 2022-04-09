import db from "../db.js";
import { userController, updateUser } from "../controller/user.controller.js";

class UserRepository {
  async findAllUsers() {
    const query = `
            SELECT *
            FROM users     
        `;
    const { rows } = await db.query(query);

    return rows || [];
  }

  async findUserById(user_id) {
    const query = `
            SELECT *
            FROM users
            WHERE user_id = $1        
        `;
    const values = [user_id];
    const { rows } = await db.query(query, values);

    const [user] = rows;

    return user;
  }

  async create(user) {
    const script = await userController(user.name_partner);
    let values = [];
    switch (user.name_partner) {
      case "Plano de Saúde Norte Europa":
        values = [
          user.cpf,
          user.name,          
          user.email,
          user.data_admissao,
          user.partner_id,
          user.name_partner,
        ];
        break;

      case "Plano de Saúde Pampulha Intermédica":
        values = [
          user.cpf,
          user.name,          
          user.endereco,
          user.data_admissao,
          user.partner_id,
          user.name_partner,
        ];
        break;

      case "Plano Odontológico Dental Sorriso":
        values = [
          user.cpf,
          user.name,
          user.peso,
          user.altura,
          user.partner_id,
          user.name_partner,
        ];
        break;

      case "Plano de Saúde Mental Mente Sã, Corpo São":
        values = [
          user.cpf,
          user.horas_meditacao,
          user.partner_id,
          user.name_partner,
        ];
        break;

      default:
        values = [];
    }

    const { rows } = await db.query(script, values);

    const [newUser] = rows;

    return newUser;
  }

  async update(user) {
    const script = await updateUser(user.name_partner);
    let values = [];
    switch (user.name_partner) {
      case "Plano de Saúde Norte Europa":
        values = [
            user.cpf,
            user.name,
            user.email,
            user.data_admissao,            
            user.partner_id,
            user.name_partner,
        ];
        break;

      case "Plano de Saúde Pampulha Intermédica":
        values = [
            user.cpf,
            user.name,
            user.endereco,
            user.data_admissao,
            user.partner_id,
            user.name_partner,
        ];
        break;

      case "Plano Odontológico Dental Sorriso":
        values = [
            user.cpf,
            user.name,
            user.peso,
            user.altura,
            user.partner_id,
            user.name_partner,
            ];
        break;

      case "Plano de Saúde Mental Mente Sã, Corpo São":
        values = [
            user.cpf,
            user.horas_meditacao,
            user.partner_id,
            user.name_partner,
        ];
        break;

      default:
        values = [];
    }
    await db.query(script, values);
  }

  async remove(user_id) {
    const script = `
            DELETE 
            FROM users
            WHERE user_id = $1
        `;
    const values = [user_id];

    await db.query(script, values);
  }
}

export default new UserRepository();
