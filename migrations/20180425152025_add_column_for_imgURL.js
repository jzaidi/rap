
exports.up = function(knex, Promise) {
  return knex.schema.table('rapposts', (table) => {
        table.string('imgurl');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('rapposts', (table) => {
        table.dropColumn('imgurl');
    })
};
