require('dotenv').config();
const axios = require("axios");
const fs = require("fs");

const surahNumber = process.argv[2]; // get the surah number from the command line arguments

const options = {
  method: 'GET',
  url: `https://al-quran1.p.rapidapi.com/${surahNumber}`, // use the surah number in the API endpoint URL
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'al-quran1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
  fs.writeFile(`surah${surahNumber}.txt`, JSON.stringify(response.data), function(err) {
    if (err) {
      console.error(err);
    } else {
      console.log(`The response data has been saved to surah${surahNumber}.txt file.`);
    }
  });
}).catch(function (error) {
  console.error(error);
});
