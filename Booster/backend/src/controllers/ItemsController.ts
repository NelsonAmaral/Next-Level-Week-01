import {Request, Response} from 'express';
import knex from '../database/connection';
import host from '../host';

class ItemsController {
    async index(request: Request, response: Response){
        const items = await knex('items').select('*');
        
        const serializadItems = items.map(item =>{
            return {
                id: item.id,
                title: item.title,
                image_url: `${host}${item.image}`,
            };
        });
    
        return response.json(serializadItems);
    }
}

export default ItemsController;