const express = require('express'),
    userRoutes = require('./users');

var router = express.Router();

router.get('/', (req, res) => {
    res.send('welcome to the development api-server');
});

//CRUD - create read update delete
router.get('/tours', userRoutes.getTours); //get
router.post('/createTour', userRoutes.createTour); //create
router.put('/updateTour/:id', userRoutes.updateTour); //update
router.delete('/deleteTour/:id', userRoutes.deleteTour); //delete
router.post('/createSiteInPath/:id', userRoutes.createSiteInPath);//create path
router.delete('/deletePath/:id',userRoutes.deleteSite);//delete path

module.exports = router;