import React from "react";

const HomeHero = () => {
  return (
    <>
      <video loop autoPlay>
        <source
          width="100%"
          src="https://www.lucidmotors.com/s3fs-public/2022-08/sapphire-web-hero.webm"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default HomeHero;
