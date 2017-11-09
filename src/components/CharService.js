// CharService.js

import axios from 'axios';

class CharService {

  sendData(data) {
    axios.post('http://localhost:3000/chars/add/char', {
    char: data
  })
  .then(function (response) {
      console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
}

export default CharService;
