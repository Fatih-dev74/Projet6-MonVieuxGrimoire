const express = require('express');
const router = express.Router();
const auth = require('../Middleware/Auth');
const bookCtrl = require('../Controllers/Book');
const { upload, optimizeImage } = require('../Middleware/Multer-config');

router.get('/', bookCtrl.getAllBook);
router.get('/bestrating', bookCtrl.getBestRating);

router.post('/', auth, upload, optimizeImage, bookCtrl.createBook);

router.get('/:id', bookCtrl.getOneBook);

router.put('/:id', auth, upload, optimizeImage, bookCtrl.modifyBook);

router.delete('/:id', auth, bookCtrl.deleteBook);

router.delete('/:id/rating', auth, bookCtrl.createRating);

module.exports = router;