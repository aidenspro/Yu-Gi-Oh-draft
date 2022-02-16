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
  }
  function handleOnRelease(img){
    console.log("clickUp",img.id)
  }

  var finCard = (
    <img
      src={'https://storage.googleapis.com/ygoprodeck.com/pics/' + cID + '.jpg'}
      draggable="false"
      position="relative"
      alt={cName}
      id={cID}
      onMouseDown={() => handleOnClick(document.getElementById(cID))}
      onMouseUp={() => handleOnRelease(document.getElementById(cID))}
      //className="cardimage"
      height={200}
      width={150}
    />
  );
    
  return (
    <DragMove onDragMove={handleDragMove}>
      <div
        className="mydiv"
        style={{
          transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,zIndex: 10
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
