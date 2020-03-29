
exports.up = function(knex) { //esta função é responsável por criar a tabela. O que vai aconteccer quando excutar essa migration.
  return knex.schema.createTable('ongs', function(table){
    table.string('id').primary();
    
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();

  });
};

exports.down = function(knex) { //Este método geralmente é para desfazer, deletar a tabela.
  
    return knex.schema.dropTable('ongs');

};
