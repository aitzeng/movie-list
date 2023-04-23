const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
// const movies = require('./db/exampleData.js');

app.use(express.static('client/dist')); // root argument specifies the root directory from which to serve static assets. If directory not found, uses next middleware

app.use(express.json())

const movies = [
  {title: 'Mean Girls', status: 'Watched'},
  {title: 'Hackers', status: 'To Watch'},
  {title: 'The Grey', status: 'Watched'},
  {title: 'Sunshine', status: 'Watched'},
  {title: 'Ex Machina', status: 'To Watch'},
];

// Set up our Router
// app.use('/movies', router);
app.route('/api/movies')
  .get((req, res) => {
    res.send(movies);
  })
  .post((req, res) => {
    movies.push(req.body)
    res.send(movies);
  })
  .put((req, res) => {
    for (var i = 0; i < movies.length; i++) {
      if (req.body.title === movies[i].title) {
        movies[i].status = req.body.status;
      }
    }
    res.send('Hello World');
  })

  // Either method should work

  // app.get('/movies' (req, res) => {

  // })

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

// app.get('/api/movies', (req, res) => {

// })