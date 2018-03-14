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
            action_unit_activation : req.body.action_unit_activation,
            frame_timestamp : req.body.frame_timestamp
        })
        .then(pml=>res.status(201).send(pml))
        .catch(error=>res.status(400).send(error));
    },

    stompCreate(body){
        PML.create({
            pml_file_id : body.pml_file_id,
            source_name : body.source_name,
            age : body.age,
            gender : body.gender,
            smile_frequency : body.smile_frequency,
            attention_frequency : body.attention_frequency,
            head_position : body.head_position,
            head_rotation : body.head_rotation,
            gaze_direction : body.gaze_direction,
            action_unit_evidence : body.action_unit_evidence,
            action_unit_activation : body.action_unit_activation,
            frame_timestamp : body.frame_timestamp,
            session_id : body.session_id
        })
        .catch(err=>{
            console.log(err);
        })
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
        .then(pml => res.status(201).send(pml[0]))
        .catch(error => res.status(400).send(error));
    },

    getPMLAUInfo(req, res){
        PML.findAll({
            where : {
                session_id : req.params.sessionid
            },
            attributes : ["action_unit_evidence"]
        })
        .then(pml => res.status(201).send(pml))
        .catch(error=>res.status(400).send(error))
    }

}