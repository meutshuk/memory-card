import React, { useState, useEffect } from "react";
import IndividualCard from "./IndividualCard";
import array from "./Characters";
// eslint-disable-next-line
import uniqid from "uniqid";
import './style.css'

export default function Card(props) {
  const { cards } = props;

  // const [newArray, setNewArray] = useState([]);

  const newArray = [];

  // const goodArray = array.filter((item) => !cards.includes(item.id));
  // newArray.push(goodArray[Math.floor(Math.random() * goodArray.length)]);

  for (let index = 0; index < 8; index++) {
    var item = array[Math.floor(Math.random() * array.length)];
    if (!newArray.includes(item)) {
      newArray.push(item);
    } else {
      index--;
    }
  }

  const individualArray = newArray.map((ind) => (
    <IndividualCard
      name={ind.name}
      onClick={props.handleScore}
      key={ind.name}
      id={ind.name}
      img={ind.src}
    />
  ));

  return (
    <div className='card'>
      
      {individualArray}
    </div>
  );
}

export { array };
