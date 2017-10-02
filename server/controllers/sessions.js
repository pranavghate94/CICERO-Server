const Sessions = require('../models').Sessions;

module.exports = {
    create(req, res){
        Sessions
        .create({
            session_id : req.body.session_id,
            user_id : req.body.user_id,
            start_time : Date.now(),
            end_time : Date.now(),
            duration : req.body.duration,
            video_file_id : req.body.video_file_id,
            audio_file_id : req.body.audio_file_id
        })
        .then(session=> res.status(201).send(session))
        .catch(error => res.status(400).send(error));
    },

    list(req, res){
        Sessions.all()
        .then(session => res.status(201).send(session))
        .catch(error => res.status(400).send(error));
    },

    getUserSessions(req, res){
        Sessions.findAll({
            where : {
                user_id : req.params.userid
            }
        })
        .then(session => res.status(201).send(session))
        .catch(error => res.status(400).send(error));
    }
}