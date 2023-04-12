import React from 'react';

const Search = ( {search, setSearchInput} ) => {

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  }


  return (

    <div className="searchForm">
      <input type="text" id="searchBar" value={search} onChange={handleChange}/>
      <input type="submit" id="submitButton" value="Press Me"/>
    </div>

  )

}

export default Search;