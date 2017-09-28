const Audio = require('../models').Audio;

module.exports = {
    create(req, res){
        return Audio
        .create({
            audio_file_id : req.body.audio_file_id
        })
        .then(audio => res.status(201).send(audio))
        .catch(error => res.status(400).send(error));
    },

    list(req,res){
        return Audio.all()
        .then(audio => res.status(201).send(audio))
        .catch(error => res.status(400).send(error));
    }
}