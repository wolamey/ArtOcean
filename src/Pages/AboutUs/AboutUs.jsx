// import './styles/App.css'
import './AboutUs.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import BlockMaker from '../../Components/BlockMaker/BlockMaker';

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
            <h1>Наши ценности</h1>
            <ul>
              <li> <img src="#"/> Оперативность</li>
              <li> <img src="#"/> Качественный товар и сервис</li>
              <li> <img src="#"/> Гибкость</li>
            </ul>
          </div>
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