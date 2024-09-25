
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../css/banner.css";
import Banner from '../../components/Banner';
import shopBanner from "../../img/waer.jpg";
import '../../css/news.css';
import SearchBar from "../../components/SearchBar";
import Shoes1 from "../../img/shoes1.png";
import News2 from "../../img/news2.jpg";
import News3 from "../../img/news3.jpg";
import News4 from "../../img/news4.jpg";
function News (){
    return(
        <>
        <div>
          <Banner imgSrc={shopBanner} title="News" />
        </div>
        <div className="container my-5">
  <div className="row">
    {/* Main Content */}
    <div className="col-lg-8">
      <div className="row">
        {/* First Article */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <img src={Shoes1} className="card-img-top" alt="Sneakers 1" />
            <div className="card-body">
              <h5 className="card-title">Release Roundup: Sneakers You Need To Check Out This Weekend</h5>
              <p className="card-text"><small className="text-muted">March 29, 2021</small></p>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
        {/* Second Article */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <img src={News2} className="card-img-top" alt="Sneakers 2" />
            <div className="card-body">
              <h5 className="card-title">Raf Simons and Adidas Are Still Making Great Weird Sneakers</h5>
              <p className="card-text"><small className="text-muted">March 29, 2021</small></p>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
        {/* Third Article */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <img src={News3} className="card-img-top" alt="Sneakers 3" />
            <div className="card-body">
              <h5 className="card-title">Supreme Reports Nearly $1bn USD 2019 Q1 Operating Profits</h5>
              <p className="card-text"><small className="text-muted">March 29, 2021</small></p>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
        {/* Fourth Article */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <img src={News4} className="card-img-top" alt="Sneakers 4" />
            <div className="card-body">
              <h5 className="card-title">Store: Subtype’s New Flagship Store Is A Sneakerhead’s Paradise</h5>
              <p className="card-text"><small className="text-muted">March 30, 2021</small></p>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Sidebar */}
    <div className="col-lg-4">
      <div className="sidebar">
        <form className="mb-10">
          <div className="input-group">
          <SearchBar/>
          </div>
        </form>
        <h5 className="mt-4">Latest</h5>
        <ul className="list-unstyled">
          <li><a href="#">Store: Subtype’s New Flagship Store Is A Sneakerhead’s Paradise</a></li>
          <li><a href="#">Supreme Reports Nearly $1bn USD 2019 Q1 Operating Profits</a></li>
          <li><a href="#">Raf Simons and Adidas Are Still Making Great Weird Sneakers</a></li>
        </ul>
        <h5 className="mt-4">Categories</h5>
        <ul className="list-unstyled">
          <li><a href="#">Style</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Culture</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
         
        </>
    )
};
export default News;