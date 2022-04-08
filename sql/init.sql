CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS application_client(
    uuid uuid DEFAULT uuid_generate_v4(),
    name varchar(255) NOT NULL,
    PRIMARY KEY (uuid)
)

CREATE TABLE IF NOT EXISTS application_partner(
    uuid uuid DEFAULT uuid_generate_v4(),
    name varchar(255) NOT NULL,
    PRIMARY KEY (uuid)
)

CREATE TABLE IF NOT EXISTS users(
    uuid uuid DEFAULT uuid_generate_v4(),
    cpf varchar(14) NOT NULL,
    name varchar(255),
    email varchar(255),
    endereco varchar(255),
    data_admissao varchar(10),
    peso float,
    altura float,
    horas_meditacao float,
    uuid_plano uuid NOT NULL, 
    PRIMARY KEY (uuid)        
)


