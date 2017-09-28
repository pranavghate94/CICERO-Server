const audioController = require('../controllers').Audio;
const videoController = require('../controllers').Video;

module.exports = (app) => {

    //Audio
    app.get('/api/audio',audioController.list);
    app.post('/api/audio',audioController.create);

    //Video
    app.get('/api/video', videoController.list);
    app.post('/api/video', videoController.create);

    //MBU Outputs

    //PML

    //SessionPML

    //Session

    //Users

    
}