CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS application_client(
    uuid uuid DEFAULT uuid_generate_v4(),
    name varchar(255) NOT NULL,
    PRIMARY KEY (uuid),
);

INSERT INTO application_client (name) VALUES ('admin')