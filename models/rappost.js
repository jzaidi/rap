const knex = require('../db');

const readAll = () => {
    return knex('rapposts')
        .then( rows => rows)
        .catch( error => {console.error(error); })
}

const readOne = rappost_id => {
    return knex('rapposts').where('id', rappost_id)
        .then(rows => rows[0])
        .catch(error => {console.error(error); })
}

const create = ({name, song, content}) => {
    return knex('rapposts')
        .returning('*')
        .insert({name, song, content})
        .then(row => row[0])
        .catch(error => {console.error(error); });
}

const update = (rappost_id, updates) => {
    return knex('rapposts')
    .returning('*')
    .update({...updates, updated_at: new Date(Date.now()).toISOString()})
    .where('id', rappost_id)
    .then( row => row[0])
    .catch(error => {console.error( error ); })
}

const destroy = rappost_id => {
    return knex('rapposts')
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