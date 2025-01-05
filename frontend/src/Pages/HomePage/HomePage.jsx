import React from "react";
import NavBar from "../../Components/NavBar/NavBar.jsx";

import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      <NavBar />

      <div className="content">
        <div className="welcome">
          <div className="text1">
            <h1>Welcome To</h1>
          </div>
          <div className="text2">
            <h1>FabNest</h1>
          </div>
          <div className="text3">
            <h1>Online Store</h1>
          </div>
          <div className="black-box-text">
            <p>
              Discover a world of charm and elegance at FabNest. From cuddly
              teddy bears to stunning flower vases and trendy fashion makeup, we
              bring you handpicked treasures to brighten your life.Shop now and
              add a touch of style and warmth to your everyday moments!{" "}
            </p>
          </div>
        </div>
        <div className="secondline">
          <div className="shipping">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M192 32c0-17.7 14.3-32 32-32L352 0c17.7 0 32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 128 44.4 14.8c23.1 7.7 29.5 37.5 11.5 53.9l-101 92.6c-16.2 9.4-34.7 15.1-50.9 15.1c-19.6 0-40.8-7.7-59.2-20.3c-22.1-15.5-51.6-15.5-73.7 0c-17.1 11.8-38 20.3-59.2 20.3c-16.2 0-34.7-5.7-50.9-15.1l-101-92.6c-18-16.5-11.6-46.2 11.5-53.9L96 240l0-128c0-26.5 21.5-48 48-48l48 0 0-32zM160 218.7l107.8-35.9c13.1-4.4 27.3-4.4 40.5 0L416 218.7l0-90.7-256 0 0 90.7zM306.5 421.9C329 437.4 356.5 448 384 448c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 501.7 417 512 384 512c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 437.2 165.1 448 192 448c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z" />
            </svg>
            <h2>Easy For shipping</h2>
          </div>
          <div className="Dilivery">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M112 0C85.5 0 64 21.5 64 48l0 48L16 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 208 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 160l-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 176 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 224l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 288l0 128c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L112 0zM544 237.3l0 18.7-128 0 0-96 50.7 0L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
            </svg>
            <h2>Fast Delivery</h2>
          </div>
          <div className="active">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
            </svg>
            <h2>24/7 Support</h2>
          </div>
          <div className="return">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M48.5 224L40 224c-13.3 0-24-10.7-24-24L16 72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8L48.5 224z" />
            </svg>
            <h2>Return Available</h2>
          </div>
        </div>
        <div className="third-row">
          <div className="third-image">
            <img src="../Images/third-row-image.jpg"></img>
          </div>
          <div className="third-paragaph">
            <p>
              A flower vase is a decorative container designed to hold and
              display flowers. Typically made from materials like glass,
              ceramic, metal, or wood, it comes in various shapes, sizes, and
              designs. A flower vase enhances the aesthetic appeal of a space
              while keeping flowers hydrated and neatly arranged.
            </p>
            <button type="submit">Buy Now</button>
          </div>
        </div>
        <div className="best-selling">
          <h1>Best Selling Products</h1>
          <h3>Discover our best-selling products, loved by customers for their quality and style!</h3>
          <div className="best-selling-cards">
            <div className="watch">
              <img src="../Images/bestsellingwatch.png"></img>

            </div>
            <div className="slippers">
            <img src="../Images/bestsellingsliipers.png"></img>
            </div>
            <div className="flowerwass">
            <img src="../Images/flowervass.png"></img>
              </div>

          </div>
          <p>Discover our collection of best-selling products, carefully chosen by our customers for their exceptional quality and unique charm. From adorable teddy bears that bring warmth and joy to elegant flower vases that elevate any space, and fashion makeup essentials that define your style</p>
          <div className="best-selling-button">
          <button type="submit">See more...</button>
          </div>
          
        </div>
        <div className="last-row-images">
          <div className="watch-slippers">
            <div className="sub-watch">
            <img src="../Images/subwatchimage.png"></img>
            </div>
            <div className="sub-slippers">
            <img src="../Images/subslippers.png"></img>
              </div>

          </div>
          <div className="flowervass">
            <img src="../Images/lastflowervass.png"></img>

            
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default HomePage;
