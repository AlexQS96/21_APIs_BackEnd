const express = require('express')
const router = express.Router();
const controller = require('../../controllers/api/moviesController');

router.post("/", controller.create);
router.delete("/delete/:id", controller.delete);

module.exports = router;