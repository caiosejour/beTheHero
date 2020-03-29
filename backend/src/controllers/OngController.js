const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {

    async index(request, response){
        
        const ongs = await connection('ongs').select('*');
        console.log('teste');
        return `{ "Resposta modificada" : "teste 1 "}, ${response.json(ongs)}`;
        
    },

    async create(request, response){
    
        const { name, email, whatsapp, city, uf } = request.body; //Já cria variáveis automaticamente para cada dado que chegar, como se fosse uma estrutura de dados. 
        // pelo que eu entendi, cria várias variáveis de uma vez. Se o Jaseon não tiver a mesma quantidade de dados, ele deve dar erro.

        const id = generateUniqueId();

        await connection('ongs').insert({ //É awayt pois este insert pode demorar um pouco. Função do Node.
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return response.json({id});
    }

}  