const axios = require('axios');

exports.gifSearch = (query, cb) => {
  console.log('MYQUERY!:', query.searchTerm);
  const searchTerm = query.searchTerm;
  axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC`)
    .then(res => {
      cb(null, res.data.data);
    });
};
