import React from 'react';
import MovieList from './MovieList.jsx';
import movies from '../ExampleData/ExampleData.js';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import ToggleWatch from './ToggleWatch.jsx';
import axios from 'axios';
// import SubmitButton from './SubmitButton.jsx';

const { useState, useEffect } = React;

const App = () => {

  const [allMovies, setAllMovies] = useState([]); //Change to [] when want to have no example data
  // const [input, setInput] = useState("")
  // Sets the current state of the Search Input. Current state will be set to "", but as the value changes, it will update the state to reflect it.
  const [searchInput, setSearchInput] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(allMovies);
  const [before, setBefore] = useState(filteredMovies);
  // Setting the Movies to also have a state. This is because as we filter based on searchInput, the allMovies table will update as well

  // const [currentList, setcurrentList] = useState(toWatch)

  // const [watched, togglewatched] = useState("To Watch")
  // const [currentFilter, setFilter] = useState("");
  // Filters the movies based on the searchInput state

  // This will change it so that everytime allMovies state changes, my filteredMovies is updated to it.

  const server = 'http://localhost:3000/api/movies'

  useEffect(() => {
    axios.get(server)
      .then((res) => setAllMovies(res.data))
  })

  // const addingMovies = function() {
  //   var addedMovie = [...allMovies, {title: input, status: "To Watch"} ]
  //   setAllMovies(addedMovie);
  // }

  function readAll() {
    axios.get(server)
    .then((res) => setAllMovies(res.data))
  }
  // Post Request
  function create(addition) {
    axios.post(server, addition)
    .then((res) => setAllMovies(res.data))
  }

  // Put request
  function update(data) {
    axios.put(server)
    .then(response => setAllMovies(response))
  }

  useEffect(() => {
    setFilteredMovies(allMovies);
  }, [allMovies]);

  useEffect(() => {
    setBefore(filteredMovies);
  }, [filteredMovies])

  // const watchedFilter = function(movie) {
  //   setwatchedState([...watchedState, movie])
  //   setToWatch(toWatch.filter(m => m.title !== movie.title));
  // }
  // const toWatchFilter = function(movie) {
  //   setToWatch([...toWatch, movie]);
  //   setwatchedState(watchedState.filter(m => m.title !== movie.title))
  // }

  //This function does not modify the allMovies but the filtered data
  const filteringMovies = function(e) {
    // Prevents the page from refreshing after each submit
    e.preventDefault();
    const filtered = allMovies.filter(movie => movie.title.toLowerCase().includes(searchInput.toLowerCase()))
    setFilteredMovies(filtered);
    setSearchInput("")
    // console.log('This is allMovies:', allMovies)
  }

  // useEffect takes an anonymous function and a state. If it notices the state has changed, it will invoke the anonymous function
  // useEffect(() => {
  //   console.log(input);
  // }, [input] )

  // Try setting states for the watched/to watch to an array. May need two different states and two different arrays.
  return (

    <div>
      <div>Movie List</div>
      <AddMovie create={create}/>
      <Search search={searchInput} setSearchInput={setSearchInput} filteringMovies={filteringMovies}/>
      {/* <SubmitButton /> */}
      {/* Before, I only had search={searchInput}. This only passes in the searchInput state and not the setSearchInput function */}
      {/* <button className="searchButton">Press Me</button> */}
      {/* On click for the toggleWatch, I want it to filter the rows that have "To Watch" or "Watched"*/}
      <ToggleWatch movies={filteredMovies} setBefore={setBefore}/>
      <table className="movieTable">
        {/* Sets up rows based on current state of allMovies */}
        <MovieList movies = {before}/>
      </table>
    </div>
  );

}

export default App;

// Documents to reference
  // Syntax with map JSX
    // Why do I need to cover it in curly braces
  // Table elements, how to add style
  // Creating a submit button on the form.