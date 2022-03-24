const express = require('express');
const router = express.Router();

const ginsengController = require('../app/Controllers/GinsengController');

router.get('/create', ginsengController.create);
router.post('/store', ginsengController.store);
router.get('/:id/edit', ginsengController.edit);
router.put('/:id', ginsengController.update);
router.delete('/:id', ginsengController.destroy);
router.patch('/:id/restore', ginsengController.restore);
router.delete('/:id/force', ginsengController.forceRestore);
router.get('/:slug', ginsengController.show);

module.exports = router;