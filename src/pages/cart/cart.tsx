import React from 'react'

function cart() {
  return (
    <>
      <div className='container mt-5 mb-3'>
        <h2>Cart</h2>
        <div className='card'>
          <div className='card-body'>
            <p className='card-text'>No items in your cart.</p>

            <a href="#" className='btn btn-outline-danger float-end'>Clear Cart</a>
          </div>
          <div className='card-footer'>
            <small className='text-muted'>Total: $0.00</small>
          </div>
        </div>
      </div>
    </>
  )
}

export default cart