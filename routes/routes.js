const express = require('express'),
    userRoutes = require('./users');

var router = express.Router();

router.get('/', (req, res) => {
    res.send('welcome to the development api-server');
});

//CRUD - create read update delete
router.post('/createTour', userRoutes.createTour); //create
router.put('/updateTour/:id', userRoutes.updateTour); //update
router.post('/createSiteInPath/:id', userRoutes.createSiteInPath); //createSiteInPath
router.get('/getTour/:id', userRoutes.getTour); //get Tour using id
router.get('/getTours', userRoutes.getTours); //get all tours
router.delete('/deleteSite/:id', userRoutes.deleteSite) //deleteSite
router.delete('/deleteTour/:id', userRoutes.deleteTour); //deleteTour


module.exports = router;