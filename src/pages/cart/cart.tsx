import React from 'react';
import Shoes1 from "../../img/shoes1.png";

function Cart() {
  return (
    <>
      <div className='container mt-5 mb-4'>
        <h2>Cart</h2>
        <div className='card mb-3'>
          <div className='row g-0'>
            <div className='col-md-4 d-flex align-items-center'>
              
              <img
                src={Shoes1}
                className='img-fluid rounded-start'
                alt='Product'
                width={200}

              />
            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <h5 className='card-title'>Grum X Sneaker</h5>
                <p className='card-text'>
                  Experience style and comfort with the Grum X Sneaker, designed for casual wear and all-day comfort. The unique design offers a combination of vibrant colors, premium material, and durable construction.
                </p>
                <p className='card-text'>
                  <strong className='text-success'>Price: $20.00</strong>
                </p>

                {/* Remove item and Clear Cart buttons */}
                <a href='#' className='btn btn-outline-danger me-2'>Remove Item</a>
                <a href='#' className='btn btn-outline-danger float-end'>Clear Cart</a>
              </div>
            </div>
          </div>
          <div className='card-footer'>
            <small className='text-muted'>Total: $29.99</small>
          </div>
        </div>
      </div>


    </>
  );
}

export default Cart;
