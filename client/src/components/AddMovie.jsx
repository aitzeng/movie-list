import React from 'react';

const AddMovie = ( {input, addInput, addingMovies} ) => {

  var handleChange = function(e) {
    addInput(e.target.value);
  }

  var submittingMovie = function(event, input) {
    event.preventDefault();
    addingMovies(input)
    addInput("")
  }

  return (
    <form className="addForm" onSubmit={submittingMovie}>
      <input type="text" id="addMovie" value={input} placeholder="Add movie..." onChange={handleChange}/>
      <input type="submit" id="submitMovie" value="Add Movie"/>
    </form>
  )
}

export default AddMovie;