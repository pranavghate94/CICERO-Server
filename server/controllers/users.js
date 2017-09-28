const Users = require('../models').Users;

module.exports = {
    create(req, res){
        Users.create({
            user_id : req.body.user_id,
            number_of_sessions : 0
        })
        .then(user=> res.status(201).send(user))
        .catch(error=>res.status(400).send(error));
    },
    list(req, res){
        Users.all()
        .then(user => res.status(201).send(user))
        .catch(error=>res.status(400).send(error));
    }
}