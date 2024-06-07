import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavLink } from "react-router-dom";

import BlockMaker from "./Components/BlockMaker/BlockMaker";
import DarkCarousel from "./Components/Carousel/Carousel";
import { Carousel } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="main">
        <div className="firstBlock">
          <Carousel>
            <Carousel.Item>
              <div className="containerCarousel containerCarousel1">
                <div className="homeTextBlock">
                  <h1>Хит продаж</h1>
                  <h3 className="h3">Dress “Moon Inspiration”</h3>
                  <div className="price">
                    <h3>Цена : </h3>
                    <p>150$</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="containerCarousel containerCarousel2">
                <div className="homeTextBlock">
                  <h1>Лучшее из новинок</h1>
                  <h3 className="h3">Macramé weave “Evening Tranquility”</h3>
                  <div className="price">
                    <h3>Цена : </h3>
                    <p>150$</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="containerCarousel containerCarousel3">
                <div className="homeTextBlock">
                  <h1>Хит продаж</h1>
                  <h3 className="h3">Embroidered shawl “Oriental motifs”</h3>
                  <div className="price">
                    <h3>Цена : </h3>
                    <p>70$</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="bestSells">
          <div className="container">
            <h1>Лучшие продажи</h1>
          </div>
          <DarkCarousel />
          <div className="container">
            <NavLink to="catalog" className="katalogButton">Перейти в каталог</NavLink>
          </div>
        </div>
        <div className="newItems">
          <div className="container">
            <h1>Новинки</h1>
          </div>
          <DarkCarousel />
          <div className="container">
            <NavLink to="catalog" className="katalogButton">Перейти в каталог</NavLink>
          </div>
        </div>
        <div className="littleBaner">
          <div className="container">
            <div className="littleBanerTextContent">
              <div className="number">1 + 1 = 3</div>
              <p>Закажите два товара и получите третий в подарок</p>
              <NavLink to="catalog" className="katalogButton">Перейти в каталог</NavLink>
            </div>
          </div>
        </div>
        <div className="whyPeopleChooseUs">
          <div className="container">
            <h1>Почему выбирают нас</h1>
            <div className="blocks">
              <div className="block">
                <img src="/authenticity.jpg" />
                <h1>Лучшие</h1>
                <p>Наш сай является лучшим в этой сфере</p>
              </div>
              <div className="block">
                <img src="/sophistication.jpg" />
                <h1>изысканность</h1>
                <p>изысканность - наш приоретет</p>
              </div>
              <div className="block">
                <img src="/fairPayment.jpg" />
                <h1>справедливая оплата</h1>
                <p>Все товары стоят справедливую цену</p>
              </div>
              <div className="block">
                <img src="/bigAsortiment.jpg" />
                <h1>большой асортимент</h1>
                <p>
                  У нас самый большой выбор товаров среди подобных магазинов
                </p>
              </div>
              <div className="block">
                <img src="/deliviryAllOverTheWorld.jpg" />
                <h1>Доставка по всему миру</h1>
                <p>Мы предостовляем недорогую доставку по всему миру</p>
              </div>
              <div className="block">
                <img src="/qualityAssurance.jpg" />
                <h1>гарантия качества</h1>
                <p>
                  Мы гарантируем качество наших товаров и безопасную их
                  транспортировку
                </p>
              </div>
              <div className="block">
                <img src="/comfortToUse.jpg" />
                <h1>лёгкое использование</h1>
                <p>
                  Всё легко и понятно
                </p>
              </div>
              <div className="block">
                <img src="/carryAboutNature.jpg" />
                <h1>Забота о природе</h1>
                <p>
                  Все товары в магазине экологически чистые
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
