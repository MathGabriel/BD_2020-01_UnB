const express = require('express');
const router = express.Router();

const customerControllerDisc = require('../controllers/customerControllerDisc');
const customerControllerProf = require('../controllers/customerControllerProf');
const customerController = require('../controllers/customerController');

router.get('/disc', customerControllerDisc.list);
router.post('/disc/add', customerControllerDisc.save);
router.get('/disc/delete/:id', customerControllerDisc.delete);
router.get('/disc/update/:id', customerControllerDisc.edit);
router.post('/disc/update/:id', customerControllerDisc.update);

router.get('/prof', customerControllerProf.list);
router.post('/prof/add', customerControllerProf.save);
router.get('/prof/delete/:id', customerControllerProf.delete);
router.get('/prof/update/:id', customerControllerProf.edit);
router.post('/prof/update/:id', customerControllerProf.update);


router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/delete/:id', customerController.delete);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);

module.exports = router;