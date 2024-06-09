// import './styles/App.css'
import './AboutUs.css'

import image_ourValues from "../../../public/image_ourValues.jpg";
import operativity from "../../../public/operativity.svg";
import quality from "../../../public/quality.svg";
import flexibility from "../../../public/flexibility.svg";

import 'bootstrap/dist/css/bootstrap.min.css';

import BlockMaker from './Components/BlockMaker/BlockMaker';

function App() {

  return (
    <>
      <div className="main">
        <div className="firstBlock_aboutUs">
          <div className="container">
            <p>Главная / О нас</p>
            <div className="textBlock_aboutUs">
              <h1>О нас</h1>
              <h3>Мы любим все, что сделно своими руками</h3>
              <p>Директор фирмы</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="ourClients">
            <div className="textBlock">
              <h1>Наши клиенты</h1>
              <p>Мы требовательны к себе, чтобы каждый день становится лучше для наших клиентов и находить лучшие решения для каждого из них</p>
            </div>
            <div className="counterOfClients">
              <h1>Счетчик клиентов</h1>
              <p>12 346</p>
            </div>
          </div>
        </div>
        <div className="ourGeography">
          <div className="container">
            <div className="textBlock">
              <h1>Наша география</h1>
              <p>Наше производство находится в Украине, но клиенты из более чем 50 стран радуются товарам, приобретенным в нащем магазине.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="ourValues">
            <img className='mainImg' src={image_ourValues} />
            <div className="textBlock">
            <h1>Наши ценности</h1>
              <ul>
                <li> <img src={operativity}/> Оперативность</li>
                <li className='second' > <img src={quality}/> Качественный товар и сервис</li>
                <li className='third' > <img src={flexibility}/> Гибкость</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="whyPeopleChooseUs">
          <div className="container">
            <h1>Why choose us</h1>
            <div className="blocks">
              <div className="block">
                <img src="/authenticity.jpg" />
                <h1>best</h1>
                <p>Our store is the best in this area</p>
              </div>
              <div className="block">
                <img src="/sophistication.jpg" />
                <h1>sophistication</h1>
                <p>sophistication is our priority</p>
              </div>
              <div className="block">
                <img src="/fairPayment.jpg" />
                <h1>fair pay</h1>
                <p>All items are fairly priced</p>
              </div>
              <div className="block">
                <img src="/bigAsortiment.jpg" />
                <h1>large assortment</h1>
                <p>
                  We have the largest selection of products among similar stores
                </p>
              </div>
              <div className="block">
                <img src="/deliviryAllOverTheWorld.jpg" />
                <h1>Worldwide delivery</h1>
                <p>We provide low cost shipping worldwide</p>
              </div>
              <div className="block">
                <img src="/qualityAssurance.jpg" />
                <h1>quality assurance</h1>
                <p>
                  We guarantee the quality of our products and their safety
                  transportation
                </p>
              </div>
              <div className="block">
                <img src="/comfortToUse.jpg" />
                <h1>easy in use</h1>
                <p>Everything is simple</p>
              </div>
              <div className="block">
                <img src="/carryAboutNature.jpg" />
                <h1>Caring for nature</h1>
                <p>All products in the store are environmentally friendly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App