const express = require('express')
const router = express.Router();
const controller = require('../../controllers/api/genresController');

router.get("/genres", controller.list);
router.get("/genres/:id", controller.detail);

module.exports = router;