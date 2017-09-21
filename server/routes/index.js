const userController = require('../controllers/user');
const pmlController = require('../controllers/pml_file_info');

module.exports = (app) => {
    app.get('/api', (req, res)=>{
        res.status(200).send({
            message : "Welcome to the Cicero API"
        });
    });

    //app.post('/api/user', userController.create);
    //app.get('/api/user',userController.list);

    app.post('/api/pml', pmlController.create);
}