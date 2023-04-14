import React from 'react';

const ToggleWatch = ({movies, watchFilter}) => {

  var watchedSubmit = function(e) {
    e.preventDefault();
    watchFilter();
  }

  return (
    <div>
      <form>
        <input type="submit" className="WatchedList" value="To Watch"/>
      </form>
      <form onSubmit={watchedSubmit}>
        <input type="submit" className="WatchedList" value="Watched"/>
      </form>
    </div>
  )
}

export default ToggleWatch;