import React from 'react';
import MovieList from './MovieList.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

const App = () => {


  return (



    <div>
      <div>Movie List</div>
      <table className="movieTable">
        <MovieList movies = {movies} />
      </table>
    </div>
  );

}

export default App;

// Documents to reference
  // Syntax with map JSX
    // Why do I need to cover it in curly braces
  // Table elements, how to add style