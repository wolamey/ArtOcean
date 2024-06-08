import './Carousel.css'

import {Carousel} from 'react-bootstrap';

import CardInCarousel from './Components/CardInCarousel/CardInCarousel';

export default function DarkCarousel() {
  return (
    <>
        <Carousel data-bs-theme="dark">
        <Carousel.Item>
            <div className=" containerCarousel containerCarousel__mini ">
                <CardInCarousel firstCard="firstCard" numClass="1"/>
                <CardInCarousel secondCard="secondCard" numClass="2"/>
                <CardInCarousel thirdCard="thirdCard" numClass="3"/>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className=" containerCarousel containerCarousel__mini">
                <CardInCarousel firstCrad="firstCard" numClass="4"/>
                <CardInCarousel secondCard="secondCard" numClass="5"/>
                <CardInCarousel thirdCard="thirdCard" numClass="6"/>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className=" containerCarousel containerCarousel__mini">
                <CardInCarousel firstCrad="firstCard" numClass="7"/>
                <CardInCarousel secondCard="secondCard" numClass="8"/>
                <CardInCarousel thirdCard="thirdCard" numClass="9"/>
            </div>
        </Carousel.Item>
        </Carousel>
    </>
  )
}