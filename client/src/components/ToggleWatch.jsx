import React from 'react';

const ToggleWatch = ({movies, setBefore}) => {

  var toWatchSubmit = function(e) {
    e.preventDefault();
    const toWatcher = movies.filter(m => m.watched === "To Watch");
    setBefore(toWatcher)
  }
  var watchedSubmit = function(e) {
    e.preventDefault();
    const toWatcher = movies.filter(m => m.watched === "Watched")
    setBefore(toWatcher)
  }

  return (
    <div>
      <button onClick={toWatchSubmit} className="WatchedList">To Watch</button>
      <button onClick={watchedSubmit} className="WatchedList">Watched</button>
    </div>
  )
}

export default ToggleWatch;