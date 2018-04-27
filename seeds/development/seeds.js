
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rap_songs')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("rap_songs").insert([
        {
          song: "No Complaints",
          artist: "Offset",
          imgurl:
        " https://media.giphy.com/media/xUPGGg3w9Nb4wGorG8/giphy.gif",
          content:
            "In his colloborative effort with notorious producer, Metro Boomin, the artist Offset gives a very compelling story in the single,  No Complaints. Offset gives a deep view into the fallacies behind society and the constant complaining that goes on in this day and age. His lyrical rhythm suggests a genius of poetry who is slowly coming into his own." 
        },
         {
          song: "Day 'n' Nite",
          artist: "Kid Cudi",
          imgurl:
            "https://media.giphy.com/media/E7LcblSOyxELC/source.gif",
          content:
            "The track serves as Cudi’s justification for this “beef” with his deceased uncle, and the way he deals with the pain of their unresolved issues. The drugs help him “run,” but it’s the madness of the industry and making it that caused the problems in the first place.",

        },
        {
          song: "Drive-By",
          artist: "Curren$y",
          imgurl: "https://media.giphy.com/media/mCVnwByALUS1W/giphy.gif",
          content:
            "Made that bitch back-to-back foreigns all in a row Ride by the kid wit' the left up, draped up, dripped up Hold up, I was just dabbin' by mistake"
        }
      ]);
    });
};
