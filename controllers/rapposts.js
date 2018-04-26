const rappostModel = require('../models/rappost');

const readAll = (request, response) => {
    rappostModel.readAll()
        .then(result => {
            response.json(result);
        })
        .catch(error => {
            console.error(error);
        });
}

const readOne = (request, response) => {
    rappostModel.readOne(request.params.rappost_id)
        .then(result => {
            response.json( result );
        })
        .catch(error => {console.error(error);});
}

const create = (request, response) => {
    rappostModel.create(request.body)
        .then( result => { response.json( result ); })
        .catch( error => { console.error( error ); })
}

const update = (request, response) => {
    rappostModel.update(request.params.rappost_id, request.body)
        .then( result => { response.json( result ); })
        .catch(error => { console.error( error ); })
}

const destroy = (request, response) => {
  rappostModel.destroy(request.params.rappost_id)
    .then( result => { response.json(result); })
    .catch( error => { console.error( error ); })
}
module.exports = {
    readAll,
    readOne,
    create,
    update,
    destroy
}