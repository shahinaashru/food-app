import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const banners = [
    { id: 1, image: "../src/images/food.jpg", title: "" },
    { id: 2, image: "../src/images/banner2.png", title: "" },
    { id: 3, image: "../src/images/drink.jpg", title: "" }, // No title
  ];

  return (
    <div
      style={{
        width: "100%",
        margin: "0 auto",
        backgroundColor: "#FFE6CC",paddingTop:"0px",marginTop:"20px",
      }}
    >
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} style={{ position: "relative" }}>
            <img
              src={banner.image}
              alt={banner.title || `Banner ${banner.id}`}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            {banner.title && (
              <h2
                style={{
                  position: "relative",
                  top: "30%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#fff",
                  fontSize: "2rem",
                  background: "rgba(0, 0, 0, 0.4)",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  textAlign: "center",
                  width:"700px"
                }}
              >
                {banner.title}
              </h2>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
