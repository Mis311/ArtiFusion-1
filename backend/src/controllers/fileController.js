const fileController = {};

const Artwork = require('../models/Artwork');

fileController.uploadArtwork = async (req, res, next) => {
  try {
    const { title, description, tags, image } = req.body;
    const creator = req.user.email;
    const nArtwork = new Artwork({
      title,
      description,
      creator,
      image,
      tags,
    });
    await nArtwork.save();
    res.status(200).json({ message: "Successfully uploaded." })
  } catch(err) {
    return next(err);
  }
}

module.exports = fileController;