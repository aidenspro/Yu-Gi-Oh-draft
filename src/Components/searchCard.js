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
        setCard(data.data); // setting obj using setObj
      })
      .then(() => {
        return card;
      });
  }, []);
  return card;
}

function makeCard(cards) {
  console.log(cards)
  console.log(cards.length)
  var cID = cards.id;
  var cName = cards.name;
  var error;
  if(cards.length == 0){
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
