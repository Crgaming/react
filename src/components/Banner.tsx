import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/banner.css";

interface BannerProps {
  imgSrc: string;
  title: string;
}

const Banner: React.FC<BannerProps> = ({ imgSrc, title}) => {
  return (
    <div className="banner">
      <img src={imgSrc} alt="Banner" style={{ width: '100%', height: '300px' }} />
      <div className="banner-overlay">
        <div className="banner-text">
          <h1>{title}</h1>
         
        </div>
      </div>
    </div>
  );
};

export default Banner;