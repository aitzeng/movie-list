import React from 'react';

const Search = ( {search, setSearchInput, filteringMovies} ) => {

  const handleChange = (e) => {
    setSearchInput(e.target.value);

  }

  return (

    <form className="searchForm" onSubmit={filteringMovies}>
      <input type="text" id="searchBar" value={search} placeholder="Search..." onChange={handleChange}/>
      <input type="submit" id="submitButton" value="Filter"/>
    </form>

  )

}

export default Search;