import React from "react";
import { Link } from "react-router-dom";
import "./HomeHero.css";

const HomeHero = () => {
  return (
    <>
      <div classNam="Home-container">
        <video loop autoPlay>
          <source
            width="100%"
            src="https://www.lucidmotors.com/s3fs-public/2022-08/sapphire-web-hero.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>

        <section className="HomeDetails">
          <div className="buttons-Container">
            <h1 className="Home-text-logo">Lucid Air</h1>
            <button className="Home-button1">
              <Link className="Nav-links" to="/air">
                Discover Air
              </Link>
            </button>
            <button className="Home-button2">
              <Link className="Nav-links" to="/air/reserve">
                Reserve Now
              </Link>
            </button>
          </div>

          <div className="figures">
            <div>
              <span>Official EPA range up to¹</span>
              <span>520 mi</span>
            </div>
            <div>
              <span>Starting from²</span>
              <span>$87,400</span>
            </div>
            <div>
              <span>Max power³</span>
              <span>1,200+ hp</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeHero;
