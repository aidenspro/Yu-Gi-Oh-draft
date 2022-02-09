import React from 'react';
//import React, { useEffect, useState } from 'react';

import '../style.css';

class Cards extends React.Component {

  constructor (){
    super()
    this.state = {
      numCards: 0
    }

  }


//fetches the json informatrion from the yo-gi-oh API and returns that Json object
async fetchJson() {
  const response = await fetch(
    'https://db.ygoprodeck.com/api/v7/randomcard.php'
  );
  const json = await response.json();
  return json;
}


//takes in a json object and makes an image object to input onto the webpage
makeCard(card) {
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
getCard() {
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



stackCards(amountOfCards) {
  const cardsList = [];
  for (var i = 0; i < amountOfCards; i++) {
    cardsList[i] = this.getCard();
  }

  return cardsList;
}


render(){
  return <div className="float-child">Test</div>
}

}
var num = 1;



export default Cards






