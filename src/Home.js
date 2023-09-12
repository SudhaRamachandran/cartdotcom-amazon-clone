import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12346432"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            image="https://m.media-amazon.com/images/I/41Ag4WE7uyL._SX324_BO1,204,203,200_.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            id="43223543"
            title="Puransen Book Vase for Flowers, Acrylic Clear Book Flower Vase, A Book About Flowers Vase, Unique Home/Bedroom/Office Accent Flowers Vase Decor"
            image="https://m.media-amazon.com/images/I/71hIc6elFML._AC_SY550_.jpg"
            price={19.99}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="34795543"
            title="Upgraded Household Stand Mixer for Peicual 380W 10+P Speed High-Performance Tilt-Head Electric Kitchen Mixer 5.5Qt Stainless Steel Bowl with Dough Hook Flat Beater Wire Whisk & Splash Guard"
            image="https://m.media-amazon.com/images/I/618YfTjtJCL._AC_UY327_FMwebp_QL65_.jpg"
            price={19.99}
            rating={4}
          />
          <Product
            id="65435896"
            title="Apple iPad Pro 12.9-inch (6th Generation): with M2 chip, Liquid Retina XDR Display, 128GB, Wi-Fi 6E + 5G Cellular, 12MP front/12MP and 10MP Back Cameras, Face ID, All-Day Battery Life – Space Gray"
            image="	https://m.media-amazon.com/images/I/81hAx31maUL._AC_SX342_.jpg"
            price={1289}
            rating={5}
          />
          <Product
            id="72436273"
            title="Echo Show 8 (2nd Gen) with Adjustable Stand | Charcoal"
            image="https://m.media-amazon.com/images/I/414wBlsPSeS._AC_SX522_.jpg"
            price={156}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="34569896"
            title="SAMSUNG 65-Inch Class QLED 4K Q60C Series Quantum HDR, Dual LED, Object Tracking Sound Lite, Q-Symphony, Motion Xcelerator, Gaming Hub, Smart TV with Alexa Built-in (QN65Q60C, 2023 Model),Titan Gray"
            image="https://m.media-amazon.com/images/I/71bmtncxa+L._AC_SX466_.jpg"
            price={739}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
