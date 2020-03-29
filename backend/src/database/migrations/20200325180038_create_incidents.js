
exports.up = function(knex) {
  
    return knex.schema.createTable('incidents', function(table){
        table.increments(); //já cria uma chave primária que incrementa automaticamente à cada nova insercão no banco. Pelo que entendi, essa chave já se chama id.
        
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
    
        table.string('ong_id').notNullable(); // Cria variável que irá receber o relacionamento.
        table.foreign('ong_id').references('id').inTable('ongs') // Relacionamento.

      });

};

exports.down = function(knex) {

    return knex.schema.dropTable('incidents');
  
};
