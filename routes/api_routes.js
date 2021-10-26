const express = require('express')

const route_controller = require('../controller/route_controller')
const router = express.Router();

router.post('/api/status', route_controller.api_post)

module.exports = router;