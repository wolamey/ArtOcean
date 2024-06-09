import './Home.css'
import "bootstrap/dist/css/bootstrap.min.css";

import authenticity from "../../../public/authenticity.jpg"
import sophistication from "../../../public/sophistication.jpg"
import fairPayment from "../../../public/fairPayment.jpg"
import bigAsortiment from "../../../public/bigAsortiment.jpg"
import deliviryAllOverTheWorld from "../../../public/deliviryAllOverTheWorld.jpg"
import qualityAssurance from "../../../public/qualityAssurance.jpg"
import comfortToUse from "../../../public/comfortToUse.jpg"
import carryAboutNature from "../../../public/carryAboutNature.jpg"

import choice1 from "../../../public/choice1.png"
import choice2 from "../../../public/choice2.png"
import choice3 from "../../../public/choice3.png"
import choice4 from "../../../public/choice4.png"

import BlockMaker from './Components/BlockMaker/BlockMaker';
import DarkCarousel from './Components/Carousel/Carousel';
import { Carousel } from 'react-bootstrap';

function App() {

  return (
    <>
      <div className="main">
        <div className="firstBlock">
          <Carousel >
            <Carousel.Item>
              <div className="containerCarousel">
                <div className="homeTextBlock">
                  <h1>Хит продаж</h1>
                  <h3 className='h3'>Дистиллятор для эфирных масел</h3>
                  <div className="price">
                    <h3>Цена : </h3>
                    <p>4 906 грн</p>
                  </div>
                  <button>Купить</button>
                  <button className='toTheBascket'>В корзину</button>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="containerCarousel">
                <div className="homeTextBlock">
                  <h1>Хит продаж</h1>
                  <h3 className='h3'>Дистиллятор для эфирных масел</h3>
                  <div className="price">
                    <h3>Цена : </h3>
                    <p>4 906 грн</p>
                  </div>
                  <button>Купить</button>
                  <button className='toTheBascket'>В корзину</button>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="containerCarousel">
                <div className="homeTextBlock">
                  <h1>Хит продаж</h1>
                  <h3 className='h3'>Дистиллятор для эфирных масел</h3>
                  <div className="price">
                    <h3>Цена : </h3>
                    <p>4 906 грн</p>
                  </div>
                  <button>Купить</button>
                  <button className='toTheBascket'>В корзину</button>
                </div>
              </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="ourProducts">
            <div className="container">
              <h1>Наша продукция</h1>
              <div className="shoping_choice">
                <div className="firstPart">
                  <div className="ourProducts_firstCard ourProducts_card">
                    <img src={choice1} />
                    <div className="ourProducts_textBlock">
                      <p>Рукоделие</p>
                    </div>
                  </div>
                  <div className="ourProducts_secondCard ourProducts_card">
                    <img src={choice2} />
                    <div className="ourProducts_textBlock">
                      <p>Ювилирные изделия</p>
                    </div>
                  </div>
                </div>
                <div className="secondPart">
                  <div className="ourProducts_thirdCard ourProducts_card">
                    <img src={choice3} />
                    <div className="ourProducts_textBlock">
                      <p>Одежда и аксессуары</p>
                    </div>
                  </div>
                  <div className="ourProducts_foursCard ourProducts_card">
                    <img src={choice4} />
                    <div className="ourProducts_textBlock">
                      <p>Искусство</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="bestSells">
          <div className="container"><h1>Лучшие продажи</h1></div>
          <DarkCarousel/>
          <div className="container"><button className='katalogButton'>Перейти в каталог</button></div>
        </div>
        <div className="newItems">
            <div className="container"><h1>Новинки</h1></div>
            <DarkCarousel />
            <div className="container"><button className='katalogButton'>Перейти в каталог</button></div>
        </div>
        <div className="littleBaner">
          <div className="container">
            <div className="littleBanerTextContent">
              <div className="number">1 + 1 = 3</div>
              <p>Закажите два товара и получите третий в подарок</p>
              <button className='katalogButton'>Перейти в каталог</button>
            </div>
          </div>
        </div>
        <div className="whyPeopleChooseUs">
          <div className="container">
            <h1>Почему выбирают нас</h1>
            <div className="blocks">
              <BlockMaker i={authenticity}/>
              <BlockMaker i={sophistication}/>
              <BlockMaker i={fairPayment}/>
              <BlockMaker i={bigAsortiment}/>
              <BlockMaker i={deliviryAllOverTheWorld}/>
              <BlockMaker i={qualityAssurance}/>
              <BlockMaker i={comfortToUse}/>
              <BlockMaker i={carryAboutNature}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App