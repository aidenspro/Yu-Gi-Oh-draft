import React from 'react';
import React, { useState, useEffect } from 'react';
import MakeOneRandomCard from '../Components/makeOneRandomCard';

//var num = 1;


const changeColor1 = () => {
  document.getElementById('button1').className = 'selected-button';
  document.getElementById('button2').className = 'unselected-button';
  document.getElementById('button3').className = 'unselected-button';
  
};
const changeColor2 = () => {
  document.getElementById('button2').className = 'selected-button';
  document.getElementById('button1').className = 'unselected-button';
  document.getElementById('button3').className = 'unselected-button';
 
};
const changeColor3 = () => {
  document.getElementById('button3').className = 'selected-button';
  document.getElementById('button2').className = 'unselected-button';
  document.getElementById('button1').className = 'unselected-button';
 
};

const cardDisplay = (numCards) => {
  var cardArray = [];


    for(var i=0;i<numCards;i++){
      cardArray[i] = (
          <MakeOneRandomCard />
      );
    }
    return (
      cardArray
    );
  
};

function numButtons() {
  var [num, setNum] = useState(5);

  useEffect(() => {    
    //Update the document title using the browser API    
    cardDisplay(num)});

  return(
  <div>
    <button id="button1" className="unselected-button" onClick={changeColor1} onClick={() => setNum(5)}>
      5{' '}
    </button>
    <button id="button2" className="unselected-button" onClick={changeColor2} onClick={() => setNum(10)}>
      10{' '}
    </button>
    <button id="button3" className="unselected-button" onClick={changeColor3} onClick={() => setNum(25)}>
      25{' '}
    </button>
   <div className='float-child'>
    {cardDisplay(num)}
    </div>
  </div>
  )
}

export default numButtons;
export { num };
