import React from "react";
import './style.css'

export default function IndividualCard(props) {
  const { id, img, name } = props;
  return (
    <div className='images-card' onClick={props.onClick.bind(this,id)} id={props.id}>
      <img alt={name} src={img}></img>
      <span>{name}</span>
      
    </div>
  );
}
// https://openmoji.org/data/color/svg/1F1E9-1F1EA.svg