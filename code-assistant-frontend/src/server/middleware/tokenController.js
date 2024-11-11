const axios = require('axios');
const Promise = require('bluebird');
module.exports = {
     async getRecipes(req, res) {
        const url = "http://localhost:3030/api/token"
        const token = "IUzI1NiIsInR5c"
        
        return axios
        .post(url, {code: req.body.code, key: req.body.key}, {
          "headers": {"Authorization": "Bearer " + token}
        })
        .then(response => {
          //res.send(response) // <= send data to the client
          return response;
        })
        .catch(err => {
          //res.send({ err }) // <= send error
          return err;
        })
    }
  }