import React from 'react'
import '../styles/searchbar.css'

const SearchBar = () => {
  return (
    <div className="search-container">
        <form>
            <input type="text" value="" placeholder="Search by name..." />
        </form>
    </div>
  )
}

export default SearchBar;