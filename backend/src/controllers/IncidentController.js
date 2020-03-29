const connection = require('../database/connection');

module.exports = {
  
    async index(request,response){ //Função que listará os incidentes no front-end

        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
        .join('ongs','ongs.id', '=' ,'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([  
            'incidents.*', 
            'ongs.name', 
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf',
        ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);

    },

    async create(request, response){ //Função que criará o incidente, com os dados recebidos pelo front-end

        const { title, description, value }  = request.body; //Pega a msg no corpo do pacote HTTP.
        const ong_id = request.headers.authorization; //Pega a ongId no cabeçalho do pacote HTTP.

        //Buscar no banco de dados, qual é a tabela de incidents da minha ong
        //const incident = await connection('ongs').where('id', ong_id).select('ong_id').first();

        const [id] = await connection('incidents').insert({

            title,
            description,
            value,
            ong_id,

        });

        return response.json({ id });

    },

    async delete(request, response){

        const { id } = request.params;
        const ong_id = request.headers.authorization;
        
        const incident = await connection('incidents').where('id', id).select('ong_id').first();

        if(incident.ong_id !==  ong_id){

            return response.status(401).json({ error: 'Operation not permitted.' });

        }

        await connection('incidents').where('id',id).delete();

        return response.status(204).send();
        
    }

}