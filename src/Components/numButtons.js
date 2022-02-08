import React from 'react';

var num = 1;

const changeColor1 = () => {
  document.getElementById('button1').className = 'selected-button';
  document.getElementById('button2').className = 'unselected-button';
  document.getElementById('button3').className = 'unselected-button';
  num = 1;
  console.log(num);
};
const changeColor2 = () => {
  document.getElementById('button2').className = 'selected-button';
  document.getElementById('button1').className = 'unselected-button';
  document.getElementById('button3').className = 'unselected-button';
  num = 2;
  console.log(num);
};
const changeColor3 = () => {
  document.getElementById('button3').className = 'selected-button';
  document.getElementById('button2').className = 'unselected-button';
  document.getElementById('button1').className = 'unselected-button';
  num = 3;
  console.log(num);
};

const numButtons = () => (
  <div>
    <button id="button1" className="unselected-button" onClick={changeColor1}>
      1{' '}
    </button>
    <button id="button2" className="unselected-button" onClick={changeColor2}>
      2{' '}
    </button>
    <button id="button3" className="unselected-button" onClick={changeColor3}>
      3{' '}
    </button>
  </div>
);

export default numButtons;
export { num };
