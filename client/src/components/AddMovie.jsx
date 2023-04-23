import React from 'react';

const {useState, useEffect } = React;

const AddMovie = ( {create} ) => {

  const [input, setInput] = useState('')

  var handleChange = function(e) {
    setInput(e.target.value);
  }


  var submittingMovie = function() {
    event.preventDefault();
    let addedMovie = {title: input, status: "To Watch"};
    create(addedMovie)
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