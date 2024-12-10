export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "cbe6c4899emsh8ec1aa48f971f30p1ae046jsn198e0b87c2bb",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "cbe6c4899emsh8ec1aa48f971f30p1ae046jsn198e0b87c2bb",
    "x-rapidapi-host": "yt-api.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
