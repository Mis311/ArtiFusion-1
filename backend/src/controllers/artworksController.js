const artWorksController = {};
const Artwork = require('../models/Artwork');

artWorksController.getArtworks = async (req, res) => {
    const artworks = await Artwork.find();
    res.status(200).json({ artworks : artworks })
};

module.exports = artWorksController;