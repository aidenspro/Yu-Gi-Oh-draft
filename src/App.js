import React from 'react';
import React, { useEffect, useState } from 'react';
import Cards from './Components/cards';
import Dropzone from 'react-dropzone';
import DraftedCards from './Components/draftedCards';

import './style.css';

export default function App() {
  //console.log("in app" , card)
  return (
    <div>
      <Cards />
      <DraftedCards />
    </div>
  );
  //return(<div></div>)
}
