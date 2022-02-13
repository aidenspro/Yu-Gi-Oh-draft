import React from 'react';
import React, { useState, useEffect } from 'react';
import SearchCard from '../Components/searchCard';


const cardDisplay = (searchTerm) => {

  console.log("here" + searchTerm)
  if(searchTerm.length > 1)
  return <SearchCard searchTerm ={searchTerm} />;
  else
  return <text> No Result </text>
};

function handleChange(e) {
  this.setState({value: e.target.value})
}  


function SearchBar(){

  var [searchTerm, setSearchTerm] = useState("");
  

  return(
  <form action="/" method="get">
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
    {cardDisplay(searchTerm)}
  </form>
  )
}

export default SearchBar;
