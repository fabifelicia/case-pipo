export function userController(partner) {
  const query = {
    "Plano de Saúde Norte Europa": `INSERT INTO users (cpf, name, email, data_admissao, partner_id, name_partner)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING * `,

    "Plano de Saúde Pampulha Intermédica": `INSERT INTO users (cpf, name, endereco, data_admissao, partner_id, name_partner)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING * `,

    "Plano Odontológico Dental Sorriso": `INSERT INTO users (cpf, name, peso, altura, partner_id, name_partner)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING * `,

    "Plano de Saúde Mental Mente Sã, Corpo São": `INSERT INTO users (cpf, horas_meditacao, partner_id, name_partner)
        VALUES($1, $2, $3, $4)
        RETURNING * `,
  };
  return query[partner];
}

export function updateUser(partner) {
  const query = {
    "Plano de Saúde Norte Europa": `UPDATE users
        SET 
            cpf = $1,          
            name = $2,
            email = $3,
            data_admissao = $4,
            partner_id = $5,
            name_partner = $6           
        WHERE user_id = $7           
    `,

    "Plano de Saúde Pampulha Intermédica": `UPDATE users
        SET
            cpf = $1,            
            name = $2,
            endereco = $3,
            data_admissao = $4,
            partner_id = $5,
            name_partner = $6           
        WHERE user_id = $7           
    `,

    "Plano Odontológico Dental Sorriso": `UPDATE users
        SET
            cpf = $1,
            name = $2,
            peso = $3,
            altura = $4,
            partner_id = $5,
            name_partner = $6          
        WHERE user_id = $7           
   `,

    "Plano de Saúde Mental Mente Sã, Corpo São": `UPDATE users
        SET 
            cpf = $1,           
            horas_meditacao = $2,
            partner_id = $3,            
            name_partner = $4,           
        WHERE user_id = $5           
    `,
  };
  return query[partner];
}
