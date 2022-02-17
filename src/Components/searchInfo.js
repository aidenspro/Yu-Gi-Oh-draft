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
        setCard(data.data[o]); // setting obj using setObj
      })
      .then(() => {
        return card;
      });
  }, []);
  return card;
}

function _render(card) {
  return JSON.stringify(card);
}

export default function makeSearchCard(props) {
  
  searchTerm = props.searchTerm;
  const searchJson = getJson();
  console.log(searchJson);
  return  searchJson;
}
