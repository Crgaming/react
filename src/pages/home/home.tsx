import React from "react";
import Banner from "../../img/fillo-hero.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../../css/style.css';
import Shoes1 from "../../img/shoes1.png"
import Shoes2 from "../../img/shoes2.png"
import Shoes3 from "../../img/shoes3.png"
import Shoes4 from "../../img/shoes4.png"
const Home = () => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div>
              <h1>XTREMA 3</h1>
              <h2>COMFY AND TRENDY</h2>
              <p>
                A shoe is an item of footwear intended to protect and comfort.
                They are often worn with a sock. Shoes are also used as an item
                of decoration and fashion. The design of shoes has varied
                enormously through time and from culture to culture, with form
                originally being tied to function.
              </p>
              <button className="btn btn-outline-light btn-lg btn-custom">
                Shop Here
              </button>
            </div>
            </div>
            <div className="col-12 col-md-6">
              <img className="img-fluid" src={Banner} alt="Banner" />
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-icons">
        <div className="container">
          <div className="row text-center">
            <div className="col-6 col-sm-3">
              <i className="bi bi-check2-circle" style={{ color: "#3D399F" }}></i>
              <span>ORIGINAL PRODUCT</span>
            </div>
            <div className="col-6 col-sm-3">
              <i className="bi bi-bag" style={{ color: "#3D399F" }}></i>
              <span>INTERESTING PROMO & DEALS</span>
            </div>
            <div className="col-6 col-sm-3">
              <i className="bi bi-wallet2" style={{ color: "#3D399F" }}></i>
              <span>30 DAYS MONEY-BACK GUARANTEE</span>
            </div>
            <div className="col-6 col-sm-3">
              <i className="bi bi-award" style={{ color: "#3D399F" }}></i>
              <span>EXPERIENCED SELLER</span>
            </div>
          </div>
        </div>
      </div>
     <div className="container mt-5">
  <div className="row">
    {/* Product 1 */}
    <div className="col-md-3">
      <div className="product-card">
        <img src={Shoes1} alt="Fillo Xtreama 3 Retro" className="img-fluid" />
        <h5 className="mt-3">Fillo – XTREMA 3 RETRO</h5>
        <p className="text-primary">$20.00</p>
        <a href="#" className="btn btn-outline-dark">Select Options</a>
      </div>
    </div>
    {/* Product 2 */}
    <div className="col-md-3">
      <div className="product-card">
        <img src={Shoes2} alt="Nika Sporta X Brown" className="img-fluid" />
        <h5 className="mt-3">Nika – SPORTA X BROWN</h5>
        <p className="text-primary">$20.00</p>
        <a href="#" className="btn btn-outline-dark">Select Options</a>
      </div>
    </div>
    {/* Product 3 */}
    <div className="col-md-3">
      <div className="product-card">
        <img src={Shoes3} alt="Nika Skorta S Black" className="img-fluid" />
        <h5 className="mt-3">Nika – SKORTA S BLACK</h5>
        <p className="text-primary">$20.00</p>
        <a href="#" className="btn btn-outline-dark">Select Options</a>
      </div>
    </div>
    {/* Product 4 */}
    <div className="col-md-3">
      <div className="product-card">
        <img src={Shoes4} alt="Fillo Yezzo 2X White" className="img-fluid" />
        <h5 className="mt-3">Fillo – YEZZO 2X WHITE</h5>
        <p className="text-primary">$20.00</p>
        <a href="#" className="btn btn-outline-dark">Select Options</a>
      </div>
    </div>
  </div>
  {/* Hot Product Section */}
</div>
  <div className="row mt-5">
    <div className="col-md-12">
      <div className="hot-product d-flex justify-content-between">
        <div>
          <h2>HOT PRODUCT.</h2>
          <p></p>
        </div>
        <div>
          <a href="#" className="btn see-more-btn">See More →</a>
        </div>
      </div>
    </div>
  </div>

    </>
  );
};

export default Home;
