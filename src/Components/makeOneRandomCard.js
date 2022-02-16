import React, { useState, useEffect } from 'react';
import DragMove from '../Components/dragMove';

var key;


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
  key = cID;

  var finCard = (
    <img
      src={'https://storage.googleapis.com/ygoprodeck.com/pics/' + cID + '.jpg'}
      draggable="false"
      zIndex={0}
      style={{}}
      alt={cName}
      id={cID}
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
