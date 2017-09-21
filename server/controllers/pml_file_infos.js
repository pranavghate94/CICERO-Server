const PML_File_Infos = require('../models/').PML_File_Infos;

module.exports = {

    create(req, res){

        console.log(req.body)

        return PML_File_Infos
        .create({
            pml_file_id : req.body.pml_file_id,
            source_name : req.body.source_name,
            gender : req.body.gender,
            smile_frequency : req.body.smile_frequency,
            attention_frequency : req.body.attention_frequency,
            head_positon : req.body.head_positon,
            head_rotation : req.body.head_rotation,
            gaze_direction : req.body.gaze_direction,
            action_unit_evidence : req.body.action_unit_evidence,
            action_unit_activation : req.body.action_unit_activation 
        })
        .then(pml_file_infos => {
            res.status(201).send(pml_file_infos)
        })
        .catch(error =>{
            res.status(400).send(error)
        })

    }
};