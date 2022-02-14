import React from 'react';
import React, { useState, useEffect } from 'react';
import SearchCard from '../Components/searchCard';


const cardDisplay = (searchTerm) => {

  if(searchTerm.length > 1)
  return <SearchCard searchTerm ={searchTerm} />;
  else
  return <h1> &nbsp; No Search Result </h1>
};

function submit(e) {
  e.preventDefault();
  () => setSearchTerm(document.getElementById("card-search").value)
}  


function SearchBar(){

  var [searchTerm, setSearchTerm] = useState("");
  

  return(
  <div>
    <h3>
      Search Cards
      </h3>
    <label htmlFor="header-search">
      <span className="visually-hidden">Search Specific Cards</span>
    </label>
    <input
      type="text"
      id="card-search"
      placeholder="Search Cards...."
      
    />
    <button
    id="button1"
    className="unselected-button"
    type = "button"
    onClick={() => setSearchTerm(document.getElementById("card-search").value)} 
    >Submit
    </button>
    <div className="search-return">
    {cardDisplay(searchTerm)}
    </div>
  </div>
  )
}

export default SearchBar;
