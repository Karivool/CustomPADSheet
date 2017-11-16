// CharService.js
import axios from 'axios';

class CharService {

  sendData(data) {
    axios.post('http://localhost:4200/chars/add/post', {
    char: data
  })
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
}

  updateData(data, id){
    axios.post('http://localhost:4200/chars/update/'+id, {
      item: data
    })
    .then(res => this.setState({ chars: res.data }))
    .catch(err => console.log(err))
  }

  deleteData(id){
    axios.get('http://localhost:4200/chars/delete/'+id)
    .then().catch(err => console.log(err))
  }
}

export default CharService;
