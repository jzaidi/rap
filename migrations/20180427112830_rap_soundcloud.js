exports.up = function(knex, Promise) {
  return knex.schema.table("rap_songs", table => {
    table.string("soundcloudlink");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("rap_songs", table => {
    table.dropColumn("soundcloudlink");
  });
};
