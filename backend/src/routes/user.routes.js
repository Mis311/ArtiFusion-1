/*
  @url: api/
*/
const { Router } = require('express');
const router = Router();
const { requireAuth } = require('../middlewares/authentication');
const { getName } = require('../controllers/userController');

// For requesting artworks
const { getArtworks } = require('../controllers/artworksController')
const { uploadArtwork } = require('../controllers/fileController')

router.route('/user').get(requireAuth, getName);

// Handling uploads
router.route('/upload_artwork').post(requireAuth, uploadArtwork);

// Handling artworks
router.route('/artworks').get(getArtworks);


module.exports = router;
