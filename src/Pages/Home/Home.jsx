import './Home.css'
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import BlockMaker from '../../Components/BlockMaker/BlockMaker'
import DarkCarousel from '../../Components/Carousel/Carousel';


function App() {

  return (
    <>
      <div className="main">
        <div className="firstBlock">
          <Carousel >
            <Carousel.Item>
              <div className="containerCarousel">
                <div className="textBlock">
                  <h1>Хит продаж</h1>
                  <h3 className='h3'>Дистиллятор для эфирных масел</h3>
                  <div className="price">
                    <h3>Цена : </h3>
                    <p>4 906 грн</p>
                  </div>
                  <button>Купить</button>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="containerCarousel">
                <div className="textBlock">
                  <h1>Хит продаж</h1>
                  <h3 className='h3'>Дистиллятор для эфирных масел</h3>
                  <div className="price">
                    <h3>Цена : </h3>
                    <p>4 906 грн</p>
                  </div>
                  <button>Купить</button>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="containerCarousel">
                <div className="textBlock">
                  <h1>Хит продаж</h1>
                  <h3 className='h3'>Дистиллятор для эфирных масел</h3>
                  <div className="price">
                    <h3>Цена : </h3>
                    <p>4 906 грн</p>
                  </div>
                  <button>Купить</button>
                </div>
              </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="ourProducts">
            <div className="container"><h1>Наша продукция</h1></div>
              <DarkCarousel />
              <div className="container"><button className='katalogButton'>Перейти в каталог</button></div>
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
        <div className="weRecomend">
          <div className="container"><h1>Мы рекомендуем</h1></div>
          <DarkCarousel/>
          <div className="container"><button className='katalogButton'>Перейти в каталог</button></div>
        </div>
        <div className="whyPeopleChooseUs">
          <div className="container">
            <h1>Почему выбирают нас</h1>
            <div className="blocks">
              <BlockMaker/>
              <BlockMaker/>
              <BlockMaker/>
              <BlockMaker/>
              <BlockMaker/>
              <BlockMaker/>
              <BlockMaker/>
              <BlockMaker/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App