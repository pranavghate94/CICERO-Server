const audioController = require('../controllers').Audio;
const videoController = require('../controllers').Video;
const mbuController = require('../controllers').MBUOutput;
const pmlController = require('../controllers').PML;
const sessionpmlController = require('../controllers').SessionPML;
const sessionController = require('../controllers').Session;
const userController = require('../controllers').Users;
const fs = require("fs");

module.exports = (app) => {

    app.use((req, res, next)=>{
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get('/',(req, res)=>{
        res.status(200).send({
            message : 'Welcome to CICERO API'
        })
    });

    //Audio
    app.get('/api/audio',audioController.list);
    app.post('/api/audio',audioController.create);

    //Video
    app.get('/api/video', videoController.list);
    app.post('/api/video', videoController.create);

    //MBU Outputs
    app.get('/api/mbu',mbuController.list);
    app.post('/api/mbu',mbuController.create);
    app.get('/api/mbu/:sessionid',mbuController.getMBUforSession);

    //PML
    app.get('/api/pml',pmlController.list);
    app.post('/api/pml',pmlController.create);
    app.get('/api/pml/:pmlfileid',pmlController.getPMLInfo);

    //SessionPML
    app.get('/api/sessionpml',sessionpmlController.list);
    app.post('/api/sessionpml',sessionpmlController.create);
    app.get('/api/sessionpml/:sessionid',sessionpmlController.getPMLFiles);

    //Session
    app.get('/api/sessions',sessionController.list);
    app.post('/api/sessions',sessionController.create);
    app.get('/api/sessions/list/:userid',sessionController.getUserSessions);
    app.get('/api/sessions/:session_id', sessionController.getSession);

    //Users
    app.get('/api/users',userController.list);
    app.post('/api/users',userController.create);
    app.get('/api/users/:userid/check',userController.check);

    //Route for Video Streaming
    app.get('/video/:videoid',(req, res)=>{
        const path = 'server/files/videos/' + req.params.videoid;
        const stat = fs.statSync(path);
        const fileSize = stat.size;
        const range = req.headers.range;
        
        if(range){
            const parts = range.replace(/bytes=/,"").split("-");
            const start = parseInt(parts[0],10);
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
            const chunkSize = (end-start) + 1;
            const file = fs.createReadStream(path, {start, end});
            const head = {
                'Content-Range' : `bytes ${start}-${end}/${fileSize}`,
                'Accept-Range' : 'bytes',
                'Content-Length' : chunkSize,
                'Content-Type' : 'video/mp4'
            }

            res.writeHead(206, head);
            file.pipe(res);
        } else {
            const head = {
                'Content-Length' : fileSize,
                'Content-Type' : 'video/avi'
            }
            res.writeHead(200, head);
            fs.createReadStream(path).pipe(res);
        }
    });
    
}