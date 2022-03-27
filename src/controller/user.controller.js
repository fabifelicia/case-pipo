

export function userController (partner) {
    
    const query = {
        '8d0e8424-78cb-49ae-af75-d32d2176f1f2' : `INSERT INTO users (cpf, name, data_admissao, email, uuid_plano)
        VALUES($1, $2, $3, $4, $5)
        RETURNING * `,

        'e706ead8-511a-433a-956e-222084f66f40' : `INSERT INTO users (cpf, name, data_admissao, endereço, uuid_plano)
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

