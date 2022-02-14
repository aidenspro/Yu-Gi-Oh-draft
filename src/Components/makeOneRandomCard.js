import React, { useState, useEffect } from 'react';
import DragElement from '../Components/dragElement'

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
        console.log(card); // Here it returns correct data from localhost:5000/users
        return card;
      });
  }, []);

  return card;
}

function makeCard(card) {
  const cID = card.id;
  const cName = card.name;
  key = cID;

  var finCard = <img
  src={'https://storage.googleapis.com/ygoprodeck.com/pics/' + cID + '.jpg'}
  alt={cName}
  id={cID}
  className="mydivheader"
  height={200}
  width={150}
/>
  return (
    <DragElement finCard={finCard} />
    //finCard
  );
}

function _render(card) {
  return JSON.stringify(card);
}

export default function makeOneRandomCard() {
  return  makeCard(getJson());
}
