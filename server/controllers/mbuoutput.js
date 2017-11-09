const MBUOutput = require('../models').MBUOutput;

module.exports = {
    create(req, res){
        MBUOutput.create({
            mbu_output_id : req.body.mbu_output_id,
            pml_file_ids : req.body.pml_file_ids,
            session_id : req.body.session_id,
            smiling_score : req.body.smiling_score,
            frowning_score : req.body.frowning_score,
            attention_score : req.body.attention_score,
            overall_score : req.body.overall_score
        })
        .then(mbuoutput => res.status(201).send(mbuoutput))
        .catch(error => res.status(400).send(error));
    },

    list(req, res){
        MBUOutput.all()
        .then(mbuoutput => res.status(201).send(mbuoutput))
        .catch(error => res.status(400).send(error));
    },

    getMBUforSession(req, res){
        MBUOutput.findAll({
            where : {
                session_id : req.params.sessionid
            },
            attributes : ["mbu_output_id"]
        })
        .then(mbuoutput => res.status(201).send(mbuoutput[0]))
        .catch(error => res.status(400).send(error));
    }
    
}