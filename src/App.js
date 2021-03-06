import React from 'react';
import React, { useEffect, useState } from 'react';
import MakeOneRandomCard from './Components/makeOneRandomCard';
import DraftedCards from './Components/draftedCards';
import TestCard from './Components/testCard'
import SearchBar from './Components/searchBar';
import Example from './Components/testButton';
import NumButtons, { buttValue } from './Components/numButtons';

import './style.css';


export default function App() {
  var [] = useState(0);

  document.getElementById("root").className = "bg"
  return (
    
      
    <div id="topDiv">
      <div id="searchStuff">
        <SearchBar />
      </div>

      <div id="float-container">
        <NumButtons />
        <DraftedCards />
      </div>

    </div>
    
  );
  
}
