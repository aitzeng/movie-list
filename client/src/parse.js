// import axios from 'axios';

server = 'http://127.0.0.1:3000/api/movies'

function readAll(setAllMovies) {
  axios.get(server)
  .then(response => setAllMovies(response))
}

// Post Request
function create(setAllMovies) {
  axios.post(server)
  .then(response => setAllMovies(response))
}

// Put request
function update(setAllMovies, data) {
  axios.put(server)
  .then(response => setAllMovies(response))
}


// This file is currently not being exported properly
// export default {
//   readAll,
//   create,
//   update
// };