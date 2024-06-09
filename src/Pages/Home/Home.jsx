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
                  <h1>Bestseller</h1>
                  <h3 className="h3">Dress “Moon Inspiration”</h3>
                  <div className="price">
                    <h3>Price : </h3>
                    <p>150$</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="containerCarousel containerCarousel2">
                <div className="homeTextBlock">
                  <h1>The best of new</h1>
                  <h3 className="h3">Macramé weave “Evening Tranquility”</h3>
                  <div className="price">
                    <h3>Price : </h3>
                    <p>150$</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="containerCarousel containerCarousel3">
                <div className="homeTextBlock">
                  <h1>Bestseller</h1>
                  <h3 className="h3">Embroidered shawl “Oriental motifs”</h3>
                  <div className="price">
                    <h3>Price : </h3>
                    <p>70$</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="bestSells">
          <div className="container">
            <h1>Best selling</h1>
          </div>
          <DarkCarousel />
          <div className="container">
            <NavLink to="catalog" className="katalogButton">
              Go to catalog
            </NavLink>
          </div>
        </div>
        <div className="newItems">
          <div className="container">
            <h1>New</h1>
          </div>
          <DarkCarousel />
          <div className="container">
            <NavLink to="catalog" className="katalogButton">
              Go to catalog
            </NavLink>
          </div>
        </div>
        <div className="littleBaner">
          <div className="container">
            <div className="littleBanerTextContent">
              <div className="number">1 + 1 = 3</div>
              <p>Order two products and get the third one for free</p>
              <NavLink to="catalog" className="katalogButton">
                Go to catalog
              </NavLink>
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
  );
}

export default App;
