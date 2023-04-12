import React from 'react';
import MovieList from './MovieList.jsx';
import movies from '../ExampleData/ExampleData.js';
import Search from './Search.jsx';
// import SubmitButton from './SubmitButton.jsx';

const { useState } = React;


const App = () => {

  const [searchInput, setSearchInput] = useState("");

  return (

    <div>
      <form className="formbar">
        <Search search={searchInput} setSearchInput={setSearchInput}/>
        {/* <SubmitButton /> */}
        {/* Before, I only had search={searchInput}. This only passes in the searchInput state and not the setSearchInput function */}
        {/* <button className="searchButton">Press Me</button> */}
      </form>
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
  // Creating a submit button on the form.