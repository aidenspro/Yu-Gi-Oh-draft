import React from 'react';
import React, { useEffect, useState } from 'react';
import MakeOneRandomCard from './Components/makeOneRandomCard';
import DraftedCards from './Components/draftedCards';
import SearchBar from './Components/searchBar';
import Example from './Components/testButton';
import NumButtons, { buttValue } from './Components/numButtons';
import './style.css';


function printCards(numCards){
if(numCards == 1){
return (
  <div className="float-child">
    <MakeOneRandomCard />
    1
  </div>
)
}else if(numCards == 2)
return (
  <div className="float-child">
      <MakeOneRandomCard />
      <MakeOneRandomCard />
      2
  </div>
)
else{
  return (
    <div className="float-child">
      <MakeOneRandomCard />
      <MakeOneRandomCard />
      <MakeOneRandomCard />
      3
    </div>
  )
}
}

export default function App() {
  var [] = useState(0);

  if (buttValue === undefined) {
    buttValue = 1;
  }

  //numCards = buttValue;
  console.log(buttValue);
  

  

  return (
    <div id="topDiv">
      <div id="searchStuff">
        <SearchBar />
      </div>

      <div id="float-container">
        <NumButtons />
        {printCards()}
        <Example />
      </div>
    </div>
  );
  //return(<div></div>)
}
