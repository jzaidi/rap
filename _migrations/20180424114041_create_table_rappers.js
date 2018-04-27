exports.up = function(knex, Promise) {
    return knex.schema.createTable('rapposts', table => {
        table.increments();
        table.string('name');
        table.string('song');
        table.text('content');
        table.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('rapposts');
};
