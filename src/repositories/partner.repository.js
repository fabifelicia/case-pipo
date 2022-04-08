import db from '../db.js';

class PartnerRepository {
    async findAllPartners() {
        const query = `
            SELECT *
            FROM partners        
        `
        const { rows } = await db.query(query);

        return rows || []
    }

    async findPartnerById(partner_id) {
        const query = `
            SELECT *
            FROM partners
            WHERE partner_id = $1        
        `
        const values = [partner_id]
        const { rows } = await db.query(query, values);

        const [partner] = rows

        return partner
    }

    async create(partner) {
        const script = `
            INSERT INTO partners (name, client_id)
            VALUES($1, $2)
            RETURNING *                 
        `
        const values = [partner.name, client_id]
        const { rows } = await db.query(script, values);
        
        const [newPartner] = rows

        return newPartner
    }

    async update(partner) {
        const script = `
            UPDATE partners
            SET
                name = $1            
            WHERE partner_id = $2            
        `
        const values = [partner.name, partner.partner_id]
        await db.query(script, values)  
    }

    async remove(partner_id) {
        const script = `
            DELETE 
            FROM partners
            WHERE partner_id = $1
        `
        const values = [partner_id]
        await db.query(script, values) 
    }

}

export default new PartnerRepository()