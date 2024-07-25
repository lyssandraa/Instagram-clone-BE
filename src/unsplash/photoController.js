const fetchUnsplash = require("../unsplash/fetchUnsplash");

const getPhotos = async (req, res) => {
  try {
    const photos = await fetchUnsplash();
    res.json(photos);
  } catch (err) {
    console.log("Error fetching photos:", err);
    res.status(500).json({ err: "Failed to fetch photos" });
  }
};

module.exports = { getPhotos };
