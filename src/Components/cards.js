import React from 'react';
import React, { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone'

import '../style.css';




//fetches the json informatrion from the yo-gi-oh API and returns that Json object
async function fetchJson() {
  const response = await fetch(
    'https://db.ygoprodeck.com/api/v7/randomcard.php'
  );
  const json = await response.json();
  return json;
}

//takes in a json object and makes an image object to input onto the webpage
function makeCard(card) {
  const cID = card.id;
  const cName = card.name;
  return (
    <img
      src={'https://storage.googleapis.com/ygoprodeck.com/pics/' + cID + '.jpg'}
      alt={cName}
      className="hover-zoom"
      height={200}
      width={150}
      
    />
  );
}

//asynchronously gets the card and returns the img object
function getCard() {
  const [card, setCard] = React.useState({});

  useEffect(() => {
    const getJson = async () => {
      const card = await fetchJson();
      setCard(card);
    };
    getJson();
  }, []);

  return makeCard(card);
}

function stackCards(amountOfCards) {
  const cards = [];
  for (var i = 0; i < amountOfCards; i++) {
    cards[i] = getCard();
  }

  return cards;
}

export default function cards() {
  const card = getCard();

  //console.log("in app" , card)
  return (
    <div class="float-child">
      {stackCards(1)}{stackCards(1)}{stackCards(1)}
    </div>
  );
  //return(<div></div>)
}