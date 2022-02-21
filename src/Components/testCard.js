import React, { useState, useEffect } from 'react';
import DragMove from '../Components/dragMove';
import '../style.css';

function handleOnClick(img) {
  console.log('clickDown', img.id);
  img.className = 'active';
  const rect = img.getBoundingClientRect();
  const xCenter = (rect.left + rect.right) / 2;
  const yCenter = (rect.top + rect.bottom) / 2;
  console.log(xCenter + ' ' + yCenter);
}
function handleOnRelease(img) {
  console.log('clickUp', img.id);
  img.className = 'myDiv';
  const rect = img.getBoundingClientRect();
  const xCenter = (rect.left + rect.right) / 2;
  const yCenter = (rect.top + rect.bottom) / 2;
  console.log(xCenter + ' ' + yCenter);
}

var finCard = (
  <img
    src={
      'https://storage.googleapis.com/ygoprodeck.com/pics/' + 10000000 + '.jpg'
    }
    draggable="false"
    position="relative"
    alt={'test'}
    id={'0001'}
    onMouseDown={() =>
      handleOnClick(document.getElementById('0001').parentElement)
    }
    onMouseUp={() =>
      handleOnRelease(document.getElementById('0001').parentElement)
    }
    //className="cardimage"
    height={225}
    width={172}
  />
);

export default function testCard() {
  return finCard;
}
