

export function userController (partner) {
    
    const query = {
        '8d0e8424-78cb-49ae-af75-d32d2176f1f2' : `INSERT INTO users (cpf, name, data_admissao, email, uuid_plano)
        VALUES($1, $2, $3, $4, $5)
        RETURNING * `,

        'e706ead8-511a-433a-956e-222084f66f40' : `INSERT INTO users (cpf, name, data_admissao, endereco, uuid_plano)
        VALUES($1, $2, $3, $4, $5)
        RETURNING * `,

 
       '40245f1e-283c-49da-b404-abc71d2953a5' : `INSERT INTO users (cpf, name, peso, altura, uuid_plano)
        VALUES($1, $2, $3, $4, $5)
        RETURNING * `,

        '8bea65ed-6c6c-47c7-8447-72b3c669c2bd' : `INSERT INTO users (cpf, horas_meditacao, uuid_plano)
        VALUES($1, $2, $3)
        RETURNING * `
    }
    return query[partner]
}


export function updateUser (partner) {
    
    const query = {
        '8d0e8424-78cb-49ae-af75-d32d2176f1f2' : `UPDATE users
        SET
            cpf = $1,
            name = $2,
            data_admissao = $3,
            email = $4,
            uuid_plano = $5           
        WHERE uuid = $6           
    `,

        'e706ead8-511a-433a-956e-222084f66f40' : `UPDATE users
        SET
            cpf = $1,
            name = $2,
            data_admissao = $3,
            endereco = $4,
            uuid_plano = $5           
        WHERE uuid = $6           
    `,
 
       '40245f1e-283c-49da-b404-abc71d2953a5' : `UPDATE users
       SET
           cpf = $1,
           name = $2,
           peso = $3,
           altura = $4,
           uuid_plano = $5           
       WHERE uuid = $6           
   `,

        '8bea65ed-6c6c-47c7-8447-72b3c669c2bd' : `UPDATE users
        SET
            cpf = $1,
            horas_meditacao = $2,            
            uuid_plano = $3,           
        WHERE uuid = $4           
    `,
    }
    return query[partner]
}