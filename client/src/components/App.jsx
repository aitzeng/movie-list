import React from 'react';
import MovieList from './MovieList.jsx';
import movies from '../ExampleData/ExampleData.js';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import ToggleWatch from './ToggleWatch.jsx'
// import SubmitButton from './SubmitButton.jsx';

const { useState, useEffect } = React;

const App = () => {

  // Sets the current state of the Search Input. Current state will be set to "", but as the value changes, it will update the state to reflect it.
  const [searchInput, setSearchInput] = useState("");
  // Setting the Movies to also have a state. This is because as we filter based on searchInput, the allMovies table will update as well
  const [allMovies, setAllMovies] = useState([]); //Change to [] when want to have no example data
  const [input, setInput] = useState("")
  const [filteredMovies, setFilteredMovies] = useState(allMovies)
  // const [watched, togglewatched] = useState("To Watch")
  // const [currentFilter, setFilter] = useState("");
  // Filters the movies based on the searchInput state

  // This will change it so that everytime allMovies state changes, my filteredMovies is updated to it.
  useEffect(() => {
    setFilteredMovies(allMovies);
  }, [allMovies]);

  const watchFilter = function() {
    const watchedAlready = filteredMovies.filter(movie => movie.watched.includes("Watched"));
    setFilteredMovies(watchedAlready);
  }

  //This function does not modify the allMovies but the filtered data
  const filteringMovies = function(e) {
    // Prevents the page from refreshing after each submit
    e.preventDefault();
    // if (searchInput === "") {
    //   setFilteredMovies()
    // } else {
    const filtered = allMovies.filter(movie => movie.title.toLowerCase().includes(searchInput.toLowerCase()))
    setFilteredMovies(filtered);
    setSearchInput("")
  }
  const addingMovies = function() {
    var addedMovie = [...allMovies, {title: input} ]
    setAllMovies(addedMovie);
  }


  // useEffect takes an anonymous function and a state. If it notices the state has changed, it will invoke the anonymous function
  // useEffect(() => {
  //   console.log(input);
  // }, [input] )

  return (

    <div>
      <div>Movie List</div>
      <AddMovie input={input} setInput={setInput} addingMovies={addingMovies}/>
      <Search search={searchInput} setSearchInput={setSearchInput} filteringMovies={filteringMovies}/>
      {/* <SubmitButton /> */}
      {/* Before, I only had search={searchInput}. This only passes in the searchInput state and not the setSearchInput function */}
      {/* <button className="searchButton">Press Me</button> */}
      <ToggleWatch movies={filteredMovies} watchFilter={watchFilter}/>
      <table className="movieTable">
        {/* Sets up rows based on current state of allMovies */}
        <MovieList movies = {filteredMovies}/>
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