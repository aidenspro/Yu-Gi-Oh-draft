import React from 'react';
import React, { useEffect, useState } from 'react';
import NumButtons, { buttValue } from '../Components/numButtons';

import '../style.css';

var num = buttValue;

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

function checkNum() {
  num = buttValue;
}

export default function cards() {
  const card = getCard();
  console.log(num);
  useEffect(() => {
    checkNum();
  }, [num]);
  //console.log("in app" , card)
  return <div className="float-child">{stackCards(num)}</div>;
  //return(<div></div>)
}
