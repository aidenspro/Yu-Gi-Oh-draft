import React from 'react';
import React, { useEffect, useState } from 'react';
import MakeOneRandomCard from './Components/makeOneRandomCard';
import DraftedCards from './Components/draftedCards';
import SearchBar from './Components/searchBar';
import Example from './Components/testButton';
import NumButtons, { buttValue } from './Components/numButtons';
import './style.css';

var numCards = 1;

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
        <MakeOneRandomCard />
        <DraftedCards />
        <Example />
      </div>
    </div>
  );
  //return(<div></div>)
}
