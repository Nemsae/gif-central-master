const axios = require('axios');


exports.gifSearch = (query, cb) => {
  const term = query.term;
  const limit = query.limit;
  console.log('query:', query);
  console.log('limit: in SEARCH model', limit);
  axios.get(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&limit=${limit}`)
  .then(res => {
    cb(null, res.data.data);
  })
  .catch(error => console.log(error));
};
