import React from 'react';

const Search = ( {search} ) => {


  return (

    <div>
      <input type="text" id="searchBar" value={search}></input>
    </div>

  )

}

export default Search;