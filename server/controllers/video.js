const Video = require('../models').Video;

module.exports = {
    create(req, res){
        return Video
        .create({
            video_file_id : req.body.video_file_id,
            video_file_name : req.body.video_file_name
        })
        .then(video => res.status(201).send(video))
        .catch(error => res.status(401).send(error));
    },

    list(req, res){
        return Video
        .all()
        .then(video => res.status(201).send(video))
        .catch(error => res.status(400).send(error));
    }

    
}