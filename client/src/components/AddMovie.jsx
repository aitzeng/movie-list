import React from 'react';

const AddMovie = ( {input, setInput, addingMovies} ) => {

  var handleChange = function(e) {
    setInput(e.target.value);
  }

  var submittingMovie = function() {
    event.preventDefault();
    addingMovies()
    setInput("")
  }

  return (
    <form className="addForm" onSubmit={submittingMovie}>
      <input type="text" id="addMovie" value={input} placeholder="Add movie..." onChange={handleChange}/>
      <input type="submit" id="submitMovie" value="Add Movie"/>
    </form>
  )
}

export default AddMovie;