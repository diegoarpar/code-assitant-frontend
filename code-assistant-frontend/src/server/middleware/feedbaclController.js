const axios = require('axios');
const Promise = require('bluebird');
module.exports = {
     async getRecipes(req, res) {
        const url = "http://localhost:3030/api/feedback"
        const token = "IUzI1NiIsInR5c"
  
        return axios
        .post(url, {feedback: req.body.feedback, rate: req.body.rate}, {
          "headers": {"Authorization": "Bearer " + token}
        })
        .then(response => {
          //console.log(response)
          //res.send(response) // <= send data to the client
          return response;
        })
        .catch(err => {
          //console.log(err)
          //res.send({ err }) // <= send error
          return err;
        })
    }
  }