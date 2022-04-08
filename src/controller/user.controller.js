

export function userController (partner) {
    
    const query = {
        1 : `INSERT INTO users (cpf, name, data_admissao, email, partner_id)
        VALUES($1, $2, $3, $4, $5)
        RETURNING * `,

        2 : `INSERT INTO users (cpf, name, data_admissao, endereco, partner_id)
        VALUES($1, $2, $3, $4, $5)
        RETURNING * `,

 
       3 : `INSERT INTO users (cpf, name, peso, altura, partner_id)
        VALUES($1, $2, $3, $4, $5)
        RETURNING * `,

        4 : `INSERT INTO users (cpf, horas_meditacao, partner_id)
        VALUES($1, $2, $3)
        RETURNING * `
    }
    return query[partner]
}


export function updateUser (partner) {
    
    const query = {
        1 : `UPDATE users
        SET            
            name = $1,
            data_admissao = $2,
            email = $3,
            partner_id = $4           
        WHERE cpf = $5           
    `,

        2 : `UPDATE users
        SET            
            name = $1,
            data_admissao = $2,
            endereco = $3,
            partner_id = $4           
        WHERE cpf = $5           
    `,
 
       3 : `UPDATE users
       SET
           name = $1,
           peso = $2,
           altura = $3,
           partner_id = $4           
       WHERE cpf = $5           
   `,

        4 : `UPDATE users
        SET            
            horas_meditacao = $1,            
            partner_id = $2,           
        WHERE cpf = $3           
    `,
    }
    return query[partner]
}