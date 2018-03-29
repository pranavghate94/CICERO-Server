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

    stompCreate(data){
        Sessions.create({
            session_id : data.session_id,
            user_id : data.user_id,
            start_time : Date.now(),
            end_time : Date.now(),
            duration : data.duration,
            video_file_id : data.video_file_id,
            audio_file_id : data.audio_file_id
        }).then()
        .catch(error => console.log(error))
    },

    addAudioMetaData(data){
        Sessions.update({
            hesitations : data.hesitations,
            transcript : data.transcript
        },{
            where : {
                session_id : data.session_id
            }
        })
    },

    list(req, res){
        Sessions.all({
            
        })
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
    },

    getSession(req, res){
        Sessions.find({
            where: {
                session_id : req.params.session_id
            }
        })
        .then(session => res.status(201).send(session))
        .catch(err => res.status(400).send(err));
    }
}