import db from '../db.js';

class PartnerRepository {
    async findAllPartners() {
        const query = `
            SELECT *
            FROM application_partner        
        `

        const { rows } = await db.query(query);

        return rows || []
    }

    async findPartnerById(uuid) {
        const query = `
            SELECT *
            FROM application_partner
            WHERE uuid = $1        
        `
        const values = [uuid]
        const { rows } = await db.query(query, values);

        const [partner] = rows

        return partner
    }

    async create(partner) {
        const script = `
            INSERT INTO application_partner (name)
            VALUES($1)
            RETURNING *                 
        `
        const values = [partner.name]
        const { rows } = await db.query(script, values);
        
        const [newPartner] = rows

        return newPartner
    }

    async update(partner) {
        const script = `
            UPDATE application_partner
            SET
                name = $1            
            WHERE uuid = $2            
        `
        const values = [partner.name, partner.uuid]
        await db.query(script, values)  
    }

    async remove(uuid) {
        const script = `
            DELETE 
            FROM application_partner
            WHERE uuid = $1
        `
        const values = [uuid]

        await db.query(script, values) 
    }

}

export default new PartnerRepository()