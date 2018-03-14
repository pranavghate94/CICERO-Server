const Users = require('../models').Users;

module.exports = {

    stompCreate(user){
        Users.create({
            user_id : user,
            number_of_sessions : 0
        }).then(()=>{
            console.log("User Added through STOMP");
        }).catch(err=>{
            console.log(err);
        });
    },

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
    },

    check(req, res){
        Users.findOne({
            where : {
                user_id : req.params.userid
            }
        })
        .then(user => res.status(201).send(true))
        .catch(error => res.status(401).send(false));
    }
}