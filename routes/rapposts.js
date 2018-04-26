const express = require('express');
const router = express.Router();
const rappostController = require('../controllers/rapposts');

router.get('/', rappostController.readAll);
router.get('/:rappost_id', rappostController.readOne);
router.post('/', rappostController.create);
router.put('/:rappost_id', rappostController.update);
router.delete('/:rappost_id', rappostController.destroy);

module.exports = router;