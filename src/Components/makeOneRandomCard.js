import React, { useState, useEffect } from 'react';
import DragMove from '../Components/dragMove';

var key;
var z;

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
      alt={cName}
      id={cID}
      //className="hover-zoom"
      height={200}
      width={150}
    />
  );
    console.log(z)
  return (
    <DragMove onDragMove={handleDragMove}>
      <div
        className="mydiv"
        style={{
          transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,zIndex: z
        }}
        
      >
        {finCard}
      </div>
    </DragMove>
    //finCard
  );
}

export default function makeOneRandomCard(prop) {
  z = prop.count;
  return makeCard(getJson());
}
