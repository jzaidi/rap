exports.up = function(knex, Promise) {
    return knex.schema.createTable("rap_songs", table => {
         table.increments();
         table.string("song");
         table.string("artist");
         table.string("imgurl");
         table.text("content");
         table.timestamps(true, true);
       });
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("rap_songs");
};
