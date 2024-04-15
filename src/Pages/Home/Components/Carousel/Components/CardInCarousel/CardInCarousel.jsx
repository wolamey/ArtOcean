import './CardInCarousel.css'

import {Card} from 'react-bootstrap';

import image from '../../../../../../../public/image 12.jpg';

export default function CardInCarousel(someClass) {
  return (
    <>
        <Card className={someClass}>
            <Card.Img className='cardImg' variant="top" src={image} />
            <Card.Body className='cardBody'>
                <Card.Title className='cardTitle'>Sometitle</Card.Title>
            </Card.Body>
        </Card>
    </>
  )
}
