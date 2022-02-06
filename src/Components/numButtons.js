import React from 'react';


function sayHello() {
  alert('Hello!');
}

const changeColor1 = () => {
  
  document.getElementById('button1').className = "selected-button";
  document.getElementById('button2').className = "unselected-button";
  document.getElementById('button3').className = "unselected-button";
}
const changeColor2 = () => {
  
  document.getElementById('button2').className = "selected-button";
  document.getElementById('button1').className = "unselected-button";
  document.getElementById('button3').className = "unselected-button";
}
const changeColor3 = () => {
  
  document.getElementById('button3').className = "selected-button";
  document.getElementById('button2').className = "unselected-button";
  document.getElementById('button1').className = "unselected-button";
}

const numButtons = () => (
  <div>
    <button id='button1' className='unselected-button' onClick={changeColor1}>1 </button>
    <button id='button2' className='unselected-button' onClick={changeColor2}>2 </button>
    <button id='button3' className='unselected-button' onClick={changeColor3}>3 </button>
  </div>
);

export default numButtons;
