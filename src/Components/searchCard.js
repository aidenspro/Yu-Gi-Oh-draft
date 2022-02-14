import React, { useState, useEffect } from 'react';

var searchTerm;

function getJson() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?fname='+searchTerm)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCard(data.data[0]); // setting obj using setObj
      })
      .then(() => {
        return card;
      });
  }, []);
  return card;
}

function makeCard(card) {
  const cID = card.id;
  const cName = card.name;
  var error;
  return (
    <img
      src={'https://storage.googleapis.com/ygoprodeck.com/pics/' + cID + '.jpg'}
      alt={cName}
      //alt={'' +1+ '.jpg'}
      className="placeholder hover-zoom"
      height={200}
      width={150}
    />
  );
}

function _render(card) {
  return JSON.stringify(card);
}

export default function makeSearchCard(props) {
  
  searchTerm = props.searchTerm;
  
  return  makeCard(getJson());
}
