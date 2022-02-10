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
  if (numCards == 1) {
    changeColor1
    return (
      <div1 className="onecard">
        <MakeOneRandomCard />
        1
      </div1>
    );
  } else if (numCards == 2){
  changeColor2
    return (
      <div2 className="twocard">
        <MakeOneRandomCard />
        <MakeOneRandomCard />
        2
      </div2>
    );
    }else {
      changeColor3
    return (
      <div3 className="threecard">
        <MakeOneRandomCard />
        <MakeOneRandomCard />
        <MakeOneRandomCard />
        3
      </div3 >
    );
  }
};

function numButtons() {
  var [num, setNum] = useState(1);

  useEffect(() => {    
    // Update the document title using the browser API    
    cardDisplay(num)});


  return(
  <div>
    <button id="button1" className="unselected-button" onClick={changeColor1} onClick={() => setNum(1)}>
      1{' '}
    </button>
    <button id="button2" className="unselected-button" onClick={changeColor2} onClick={() => setNum(2)}>
      2{' '}
    </button>
    <button id="button3" className="unselected-button" onClick={changeColor3} onClick={() => setNum(3)}>
      3{' '}
    </button>
    {cardDisplay(num)}
  </div>
  )
}

export default numButtons;
export { num };
