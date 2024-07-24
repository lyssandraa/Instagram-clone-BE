require("dotenv").config();

const fetchUnsplash = async () => {
  const response = await fetch(
    `https://api.unsplash.com/photos/?page=1&limit9&client_id=${process.env.UNSPLASH_CLIENT_ID}`
  );

  const data = await response.json();

  const sortedPhotos = await data.map((photo) => {
    return {
      id: photo.id,
      imageUrls: {
        small: photo.urls.small,
      },
      likes: photo.likes,
      photographer_name: photo.user.username,
    };
  });

  return sortedPhotos;
};

module.exports = fetchUnsplash;
