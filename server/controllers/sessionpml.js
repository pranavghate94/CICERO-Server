const SessionPML = require('../models').SessionPML;

module.exports = {
    create(req, res){
        SessionPML.create({
            session_id : req.body.session_id,
            pml_file_ids : req.body.pml_file_ids,
            pml_file_interval : req.body.pml_file_interval
        })
        .then(sessionpml => res.status(201).send(sessionpml))
        .catch(error => res.status(400).send(error));
    },

    list(req, res){
        SessionPML.all()
        .then(sessionpml => res.status(201).send(sessionpml))
        .catch(error=>res.status(400).send(error));
    }
}