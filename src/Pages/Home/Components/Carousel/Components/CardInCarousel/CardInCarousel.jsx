import './CardInCarousel.css'

import {Card} from 'react-bootstrap';
import { useState } from "react";

import image from '/image 12.jpg';
import data from '../../../../../../data/data.json'

export default function CardInCarousel(someClass, numClass) {

  const [img, setImg] = useState("");
  const [text, setText] = useState("");

  data.copperDishesForCatalog.forEach(function (item) {
    if (item.id == someClass.numClass) {
      console.log(item.pic);
      setTimeout(() => {
      setText(item.text);
      setImg(item.pic);
      console.log(text);
      }, 1000);
    }
  })

  return (
    <>
        <Card className="allCard">
            <Card.Img className='cardImg' variant="top" src={img} />
            <Card.Body className='cardBody'>
                <Card.Title className='cardTitle'>{text}</Card.Title>
            </Card.Body>
        </Card>
    </>
  )
}
