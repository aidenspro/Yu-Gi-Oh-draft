import React from 'react';
import React, { useEffect, useState } from 'react';
import Cards from './Components/cards';
import DraftedCards from './Components/draftedCards';
import SearchBar from './Components/searchBar';
import NumButtons, { buttValue } from './Components/numButtons';
import './style.css';

var numCards = 1;


export default function App() {
  if(buttValue === undefined ){
    buttValue = 1;
  }

  numCards = buttValue;

  console.log(numCards);

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
