import './Carousel.css'

import {Carousel} from 'react-bootstrap';

import CardInCarousel from '../CardInCarousel/CardInCarousel';

export default function DarkCarousel() {
  return (
    <>
        <Carousel data-bs-theme="dark">
        <Carousel.Item>
            <div className="containerCarousel">
                <CardInCarousel firstCard="firstCard"/>
                <CardInCarousel secondCard="secondCard"/>
                <CardInCarousel thirdCard="thirdCard"/>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="containerCarousel">
                <CardInCarousel firstCrad="firstCard"/>
                <CardInCarousel secondCard="secondCard"/>
                <CardInCarousel thirdCard="thirdCard"/>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="containerCarousel">
                <CardInCarousel firstCrad="firstCard"/>
                <CardInCarousel secondCard="secondCard"/>
                <CardInCarousel thirdCard="thirdCard"/>
            </div>
        </Carousel.Item>
        </Carousel>
    </>
  )
}