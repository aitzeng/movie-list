import React from 'react';
import MovieList from './MovieList.jsx';
import movies from '../ExampleData/ExampleData.js';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
// import SubmitButton from './SubmitButton.jsx';

const { useState } = React;




const App = () => {

  // Sets the current state of the Search Input. Current state will be set to "", but as the value changes, it will update the state to reflect it.
  const [searchInput, setSearchInput] = useState("");
  // Setting the Movies to also have a state. This is because as we filter based on searchInput, the allMovies table will update as well
  const [allMovies, setAllMovies] = useState(movies);

  const [initialInput, addInput] = useState("")
  // const [currentFilter, setFilter] = useState("");
  // Filters the movies based on the searchInput state
  const filteringMovies = function(e) {
    // Prevents the page from refreshing after each submit
    e.preventDefault();
    if (searchInput === "") {
      setAllMovies(movies)
    } else {
      var filteredMovies = allMovies.filter(movie => movie.title.toLowerCase().includes(searchInput.toLowerCase()))
      setAllMovies(filteredMovies);
      setSearchInput("")
    }
  }

  const addingMovies = function(movieString) {
    var addedMovie = [...movies, {title: movieString} ]
    setAllMovies(addedMovie);
  }

  return (

    <div>
      <AddMovie input={initialInput} addInput={addInput} addingMovies={addingMovies}/>
      <Search search={searchInput} setSearchInput={setSearchInput} filteringMovies={filteringMovies}/>
      {/* <SubmitButton /> */}
      {/* Before, I only had search={searchInput}. This only passes in the searchInput state and not the setSearchInput function */}
      {/* <button className="searchButton">Press Me</button> */}
      <div>Movie List</div>
      <table className="movieTable">
        {/* Sets up rows based on current state of allMovies */}
        <MovieList movies = {allMovies}/>
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