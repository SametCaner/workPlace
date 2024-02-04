const express = require('express');
const personelController = require('../controllers/personnelController');
const router = express.Router();

router.route('/').get(personelController.getPersonnels);
router.route('/create').post(personelController.createPersonnel); // localhost/personnel/create
router.route('/delete/:id').delete(personelController.deletePersonnels);
router.route('/update/:id').put(personelController.updatePersonnels);


module.exports = router;