import React, { useState, useEffect } from 'react';

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

function _render(card) {
  return JSON.stringify(card);
}

export default function makeOneRandomCard() {
  return <div> {makeCard(getJson())} </div>;
}
