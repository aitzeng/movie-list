import React from 'react';
import MovieList from './MovieList.jsx'
import movies from '../ExampleData/ExampleData.js'


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

// const MovieList = ({movies}) => {


//   return (

//     <tbody>
//       {movies.map(movie => <MovieListEntry movie = {movie} />)}
//     </tbody>


//   )
// }

// const MovieListEntry = ( {movie} ) => {


//   return (
//     <tr>
//       <td>{movie.title}</td>
//     </tr>
//   )

// }

export default App;

// Documents to reference
  // Syntax with map JSX
    // Why do I need to cover it in curly braces
  // Table elements, how to add style