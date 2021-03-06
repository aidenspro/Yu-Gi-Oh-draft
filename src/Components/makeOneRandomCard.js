import React, { useState, useEffect } from 'react';
import DragMove from '../Components/dragMove';
import '../style.css';

var key = 0;


function getJson() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch('https://db.ygoprodeck.com/api/v7/randomcard.php')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //return obj = data;
        setCard(data); // setting obj using setObj
      })
      .then(() => {
        return card;
      });
  }, []);

  return card;
}

function makeCard(card) {
  var z;
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  });

  const handleDragMove = (e) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY,
    });
  };

  const cID = card.id;
  const cName = card.name;
  key++;

  function handleOnClick(img){
    console.log("clickDown",img.id)
    img.className="active";
    const rect = img.getBoundingClientRect()
    const xCenter = (rect.left + rect.right) / 2
    const yCenter = (rect.top + rect.bottom) / 2
    console.log(xCenter + " " + yCenter)
  }
  function handleOnRelease(img){
    console.log("clickUp",img.id)
    img.className="myDiv";
    const rect = img.getBoundingClientRect()
    const xCenter = (rect.left + rect.right) / 2
    const yCenter = (rect.top + rect.bottom) / 2
    console.log(xCenter + " " + yCenter)
  }

  var finCard = (
    <img
      src={'https://storage.googleapis.com/ygoprodeck.com/pics/' + cID + '.jpg'}
      draggable="false"
      position="relative"
      alt={cName}
      id={cID}
      onMouseDown={() => handleOnClick(document.getElementById(cID).parentElement)}
      onMouseUp={() => handleOnRelease(document.getElementById(cID).parentElement)}
      //className="cardimage"
      height={225}
      width={172}
    />
  );
    
  return (
    <DragMove onDragMove={handleDragMove}>
      <div
        className="mydiv"
        style={{
          transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
        }}
        
      >
        {finCard}
      </div>
    </DragMove>
    //finCard
  );
}


export default function makeOneRandomCard(prop) {
  
  return makeCard(getJson());
}
