const axios = require("axios");

const URL = 'http://localhost:8080/api/sellcar';

axios.get(URL)
    .then(response => console.log(response))
    .catch(error => console.log('Error : ', error))