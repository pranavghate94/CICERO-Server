const audioController = require('../controllers').Audio;
const videoController = require('../controllers').Video;
const mbuController = require('../controllers').MBUOutput;
const pmlController = require('../controllers').PML;
const sessionpmlController = require('../controllers').SessionPML;
const sessionController = require('../controllers').Session;
const userController = require('../controllers').Users;

module.exports = (app) => {

    //Audio
    app.get('/api/audio',audioController.list);
    app.post('/api/audio',audioController.create);

    //Video
    app.get('/api/video', videoController.list);
    app.post('/api/video', videoController.create);

    //MBU Outputs
    app.get('/api/mbu',mbuController.list);
    app.post('/api/mbu',mbuController.create);

    //PML
    app.get('/api/pml',pmlController.list);
    app.post('/api/pml',pmlController.create);

    //SessionPML
    app.get('/api/sessionpml',sessionpmlController.list);
    app.post('/api/sessionpml',sessionpmlController.create);

    //Session
    app.get('/api/sessions',sessionController.list);
    app.post('/api/sessions',sessionController.create);

    //Users
    app.get('/api/users',userController.list);
    app.post('/api/users',userController.create);

    
}