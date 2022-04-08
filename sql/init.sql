CREATE TABLE IF NOT EXISTS clients(
    client_id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,    
)

CREATE TABLE IF NOT EXISTS partners(
    partner_id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    client_id INTEGER NOT NULL,  
    FOREIGN KEY (client_id) REFERENCES clients(client_id) ON DELETE CASCADE,   
)

CREATE TABLE IF NOT EXISTS users(    
    cpf INTEGER UNIQUE NOT NULL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    endereco VARCHAR(255),
    data_admissao VARCHAR(10),
    peso float,
    altura float,
    horas_meditacao float,
    partner_id INTEGER NOT NULL, 
    FOREIGN KEY (partner_id) REFERENCES partners(partner_id) ON DELETE CASCADE,          
)


