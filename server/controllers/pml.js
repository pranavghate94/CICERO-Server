const PML = require('../models').PML;

module.exports = {
    create(req, res){
        PML.create({
            pml_file_id : req.body.pml_file_id,
            source_name : req.body.source_name,
            age : req.body.age,
            gender : req.body.gender,
            smile_frequency : req.body.smile_frequency,
            attention_frequency : req.body.attention_frequency,
            head_position : req.body.head_position,
            head_rotation : req.body.head_rotation,
            gaze_direction : req.body.gaze_direction,
            action_unit_evidence : req.body.action_unit_evidence,
            action_unit_activation : req.body.action_unit_activation
        })
        .then(pml=>res.status(201).send(pml))
        .catch(error=>res.status(400).send(error));
    },
    list(req,res){
        PML.all()
        .then(pml=>res.status(201).send(pml))
        .catch(error => res.status(400).send(error));
    },

    getPMLInfo(req, res){
        PML.findAll({
            where : {
                pml_file_id : req.params.pmlfileid
            },
        })
        .then(pml => res.status(201).send(pml))
        .catch(error => res.status(400).send(error));
    }
}