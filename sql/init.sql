CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

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
    cpf varchar(14) NOT NULL,
    name varchar(255),
    email varchar(255),
    endereco varchar(255),
    admissao varchar(10),
    peso integer,
    altura integer,
    horas_meditacao float,
    PRIMARY KEY (cpf)
)


