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
                  <h1>Best seller</h1>
                  <h3 className="h3">Dress “Moon Inspiration”</h3>
                  <div className="price">
                    <h3>Price : </h3>
                    <p>150$</p>
                  </div>
                </div>
                <img className="carousel__img" src="./../../../public/home1.png" alt="" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="containerCarousel containerCarousel1">
                <div className="homeTextBlock">
                  <h1>Best seller</h1>
                  <h3 className="h3">Theater mask “The Face of the Soul”</h3>
                  <div className="price">
                    <h3>Price : </h3>
                    <p>150$</p>
                  </div>
                </div>
                <img className="carousel__img" src="./../../../public/home2.png" alt="" />

              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="containerCarousel containerCarousel1">
                <div className="homeTextBlock">
                  <h1>Best seller</h1>
                  <h3 className="h3">Sculpture “Harmony of Movement”</h3>
                  <div className="price">
                    <h3>Price : </h3>
                    <p>70$</p>
                  </div>
                </div>
                <img className="carousel__img" src="./../../../public/home3.png" alt="" />

              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="bestSells">
          <div className="container">
            <h1>Best Sales</h1>
          </div>
          <DarkCarousel />
          <div className="container">
            <NavLink to="catalog" className="katalogButton">Go to the catalog</NavLink>
          </div>
        </div>
        <div className="newItems">
          <div className="container">
            <h1>New products</h1>
          </div>
          <DarkCarousel />
          <div className="container">
            <NavLink to="catalog" className="katalogButton">Go to the catalog</NavLink>
          </div>
        </div>
        <div className="littleBaner">
          <div className="container">
            <div className="littleBanerTextContent">
              <div className="number">1 + 1 = 3</div>
              <p>Order two items and get the third one as a gift</p>
              <NavLink to="catalog" className="katalogButton">Go to the catalog</NavLink>
            </div>
          </div>
        </div>
        <div className="whyPeopleChooseUs">
          <div className="container">
            <h1>Why choose us</h1>
            <div className="blocks">
              <div className="block">
                <img src="/authenticity.jpg" />
                <h1>The best</h1>
                <p>Our sai is the best in this field</p>
              </div>
              <div className="block">
                <img src="/sophistication.jpg" />
                <h1>Sophistication</h1>
                <p>Sophistication is our priority</p>
              </div>
              <div className="block">
                <img src="/fairPayment.jpg" />
                <h1>fair payment</h1>
                <p>All products are worth a fair price</p>
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
                <h1>Worldwide shipping</h1>
                <p>We provide low-cost worldwide shipping</p>
              </div>
              <div className="block">
                <img src="/qualityAssurance.jpg" />
                <h1>Quality assurance</h1>
                <p>
                We guarantee the quality of our products and their safety
                transportation
                </p>
              </div>
              <div className="block">
                <img src="/comfortToUse.jpg" />
                <h1>Easy to use</h1>
                <p>
                Everything is easy and understandable                </p>
              </div>
              <div className="block">
                <img src="/carryAboutNature.jpg" />
                <h1>Taking care of nature</h1>
                <p>
                All products in the store are environmentally friendly  
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
