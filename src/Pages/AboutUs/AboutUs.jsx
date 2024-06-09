// import './styles/App.css'
import './AboutUs.css'

import image_ourValues from "../../../public/image_ourValues.jpg";
import operativity from "../../../public/operativity.svg";
import quality from "../../../public/quality.svg";
import flexibility from "../../../public/flexibility.svg";

import authenticity from "../../../public/authenticity.jpg"
import sophistication from "../../../public/sophistication.jpg"
import fairPayment from "../../../public/fairPayment.jpg"
import bigAsortiment from "../../../public/bigAsortiment.jpg"
import deliviryAllOverTheWorld from "../../../public/deliviryAllOverTheWorld.jpg"
import qualityAssurance from "../../../public/qualityAssurance.jpg"
import comfortToUse from "../../../public/comfortToUse.jpg"
import carryAboutNature from "../../../public/carryAboutNature.jpg"

import 'bootstrap/dist/css/bootstrap.min.css';

import BlockMaker from './Components/BlockMaker/BlockMaker';

function App() {

  return (
    <>
      <div className="main">
        <div className="firstBlock_aboutUs">
          <div className="container">
            <p>Home / About us</p>
            <div className="textBlock_aboutUs">
              <h1>About us</h1>
              <h3>We like everysthing, that made by hands</h3>
              <p>Director of the firm</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="ourClients">
            <div className="textBlock">
              <h1>Our clients</h1>
              <p>We are demanding of ourselves so that every day we become better for our clients and find the best solutions for each of them</p>
            </div>
            <div className="counterOfClients">
              <h1>Clients counter</h1>
              <p>12 346</p>
            </div>
          </div>
        </div>
        <div className="ourGeography">
          <div className="container">
            <div className="textBlock">
              <h1>Our geography</h1>
              <p>Our production is located in Ukraine, but customers from more than 50 countries enjoy the goods purchased in our store.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="ourValues">
            <img className='mainImg' src={image_ourValues} />
            <div className="textBlock">
            <h1>Our values</h1>
              <ul>
                <li> <img src={operativity}/> Operativity</li>
                <li className='second' > <img src={quality}/> Quality product and service</li>
                <li className='third' > <img src={flexibility}/> Flexiblity</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="whyPeopleChooseUs">
          <div className="container">
            <h1>Why people choose us</h1>
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