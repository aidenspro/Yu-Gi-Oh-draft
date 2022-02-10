import React from 'react';
import React, { useEffect, useState } from 'react';
import MakeOneRandomCard from './Components/makeOneRandomCard';
import DraftedCards from './Components/draftedCards';
import SearchBar from './Components/searchBar';
import Example from './Components/testButton';
import NumButtons, { buttValue } from './Components/numButtons';
import './style.css';

var numCards = 2;

function printCards(){
if(numCards == 1){
return (
  <div className="float-container">
    <MakeOneRandomCard />
  </div>
)
}else if(numCards == 2)
return (
  <div className="float-container">
    <MakeOneRandomCard />
    <MakeOneRandomCard />
  </div>
)
else{
  return (
    <div className="float-container">
      <MakeOneRandomCard />
      <MakeOneRandomCard />
      <MakeOneRandomCard />
    </div>
  )
}
}

export default function App() {
  if (buttValue === undefined) {
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
        {
        printCards()
        }
        <DraftedCards />
        <Example />
      </div>
    </div>
  );
  //return(<div></div>)
}
