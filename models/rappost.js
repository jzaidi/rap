const knex = require('../db');

const readAll = () => {
    return knex('rap_songs')
        .then( rows => rows)
        .catch( error => {console.error(error); })
}

const readOne = rappost_id => {
    return knex('rap_songs').where('id', rappost_id)
        .then(rows => rows[0])
        .catch(error => {console.error(error); })
}

const create = ({song, artist, content}) => {
    return knex('rap_songs')
        .returning('*')
        .insert({artist, song, content})
        .then(row => row[0])
        .catch(error => {console.error(error); });
}

const update = (rappost_id, updates) => {
    return knex('rap_songs')
    .returning('*')
    .update({...updates, updated_at: new Date(Date.now()).toISOString()})
    .where('id', rappost_id)
    .then( row => row[0])
    .catch(error => {console.error( error ); })
}

const destroy = rappost_id => {
    return knex('rap_songs')
        .returning('*')
        .del()
        .where('id', rappost_id)
        .then(row => row[0])
        .catch(error => { console.error( error);})
}

module.exports = {
    readAll,
    readOne,
    create,
    update,
    destroy
}