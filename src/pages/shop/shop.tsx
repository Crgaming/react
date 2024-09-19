import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../css/banner.css";
import Banner from '../../components/Banner';
import shopBanner from "../../img/culshop.jpg";
import Shoes1 from "../../img/shoes1.png";
import Shoes2 from "../../img/shoes2.png";
import Shoes3 from "../../img/shoes3.png";
import Shoes4 from "../../img/shoes4.png";
import Productcard from "../../components/ProductCard"
import SearchBar from "../../components/SearchBar";
function Shop() {
  return (
    <>
      <div>
        <Banner imgSrc={shopBanner} title="Shop" />
      </div>
      <div className='container'>
        <div className='row mt-5'>
          {/* Main Product Section */}
          <div className='col-lg-9'>
            <h2 className='fw-bold'>Our Product</h2>
            <div className='col-lg-3'>
            {/* Search Bar */}
           <SearchBar/>

            </div>
            <div className='row'>
              <Productcard imgSrc={Shoes1} title="Fillo - XTREMA 3 RETRO" price="$20.00" />
              <Productcard imgSrc={Shoes2} title="Nika - SPORTA X BROWN" price="$20.00" />
              <Productcard imgSrc={Shoes3} title="Nika - SKORTA S BLACK" price="$20.00" />
              <Productcard imgSrc={Shoes4} title="Fillo - YEZZO 2X WHITE" price="$20.00" />
              <Productcard imgSrc={Shoes1} title="Fillo - XTREMA 3 RETRO" price="$20.00" />
              <Productcard imgSrc={Shoes2} title="Nika - SPORTA X BROWN" price="$20.00" />
              <Productcard imgSrc={Shoes3} title="Nika - SKORTA S BLACK" price="$20.00" />
              <Productcard imgSrc={Shoes4} title="Fillo - YEZZO 2X WHITE" price="$20.00" />
            </div>
          </div>
         
         
        </div>
      </div>
    </>
  );
}

export default Shop;
