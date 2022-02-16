import React from 'react';
import React, { useState, useEffect } from 'react';
import MakeOneRandomCard from '../Components/makeOneRandomCard';
import DragMove from '../Components/dragMove'
//var num = 1;





function numButtons() {
  var [num, setNum] = useState(5);

  

  const cardDisplay = (numCards) => {
    var cardArray = [];
  
  
      for(var i=0;i<numCards;i++){
        cardArray[i]=
        <MakeOneRandomCard />
      }
      return (
        cardArray
      );
    
  };
  


  useEffect(() => {    
    //Update the document title using the browser API    
    cardDisplay(num)});

  return(
  <div position="fixed">
    <button id="button1" className="unselected-button"  onClick={() => setNum(5)}>
      5{' '}
    </button>
    <button id="button2" className="unselected-button"  onClick={() => setNum(10)}>
      10{' '}
    </button>
    <button id="button3" className="unselected-button"  onClick={() => setNum(25)}>
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
