import React from 'react';
import React, { useEffect, useState } from 'react';
import Cards from './Components/cards';
import DraftedCards from './Components/draftedCards';
import SearchBar from './Components/searchBar';
import NumButtons from './Components/numButtons';
import './style.css';

export default function App() {
  //console.log("in app" , card)
  return (
    <div id="topDiv">

   <div id="searchStuff">
    <SearchBar />
  </div>
  
    <div id="randomCards">

      <NumButtons />
      <Cards />
      <DraftedCards />

    </div>


  
    </div>
  );
  //return(<div></div>)
}
