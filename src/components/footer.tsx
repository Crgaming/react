
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from '../img/Logo2.png';
function footer() {
  return (
   <>
   <footer className="text-center text-lg-starttext-muted" style={{backgroundColor:'rgba(131, 24, 8, 1)',color: 'white'}}>
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
      <a href='#' className="me-4 text-reset">
      <i className="bi bi-facebook"></i>
      </a>
      <a href='#' className="me-4 text-reset">
      <i className="bi bi-twitter"></i>
      </a>
      <a href='#' className="me-4 text-reset">
      <i className="bi bi-google"></i>
      </a>
      <a href='#' className="me-4 text-reset">
        <i className="fab fa-instagram" />
      </a>
     
    </div>
  </section>
  <section>
    <div className="container text-center text-md-start mt-5">
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3" />
            <img src={Logo} alt="" width={150}/>
          </h6>
         
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
           Quick Links
          </h6>
          <p>
            <a href='/' className="text-reset">Home</a>
          </p>
          <p>
            <a href='#' className="text-reset">About Us</a>
          </p>
          <p>
            <a href='#' className="text-reset">Destination</a>
          </p>
          <p>
            <a href='/Contact' className="text-reset">Contact</a>
          </p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Other Page
          </h6>
          <p>
            <a href='#' className="text-reset">Privacy & Policy</a>
          </p>
          <p>
            <a href='#' className="text-reset">Terms of Use</a>
          </p>
          <p>
            <a href='#' className="text-reset">Disclaimer</a>
          </p>
          <p>
            <a href='#' className="text-reset">FAQ</a>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3" /> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3" />
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3" /> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3" /> + 01 234 567 89</p>
        </div>
      </div>
    </div>
  </section>
  <div className="text-left p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2024 Copyright
   
  </div>
</footer>

   </>
  )
}

export default footer