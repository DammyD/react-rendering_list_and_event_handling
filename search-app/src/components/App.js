import React from 'react'
import SearchBar from './SearchBar'
import ProfileLists from './ProfileLists'
import '../styles/app.css';

const App = () => {
  return (
    <div className="app">
        <SearchBar />
        <ProfileLists />
    </div>
  )
}

export default App;