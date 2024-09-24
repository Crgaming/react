import React from 'react';
import Banner from '../../components/Banner';
import shopBanner from "../../img/singlebanner.jpg";
import Shoes1 from "../../img/shoes1.png";
import Shoes2 from "../../img/shoes2.png"; 
import Shoes3 from "../../img/shoes3.png";
import Shoes4 from "../../img/shoes4.png";

import Productcard from "../../components/ProductCard"
import '../../css/singleproduct.css';

function single_product() {
    return (
        <>
            <Banner imgSrc={shopBanner} title="Fillo - Xtrema 3 Retro" />

            <div className="container mt-5 mb-3">
                <div className="row">
                    {/* Product Image Section */}
                    <div className="col-md-6 text-center">
                        <img src={Shoes1} className="img-fluid product-img" alt="Product Image" />
                        <div className="d-flex justify-content-center product-thumbnails">
                            {/* Thumbnails would go here */}
                        </div>
                    </div>

                    {/* Product Details Section */}
                    <div className="col-md-6 product-details">
                        <h2 className="text-primary">$20.00</h2>
                        <h4 className="text-secondary">Grum X Sneaker</h4>
                        <p>Experience style and comfort with the Grum X Sneaker, designed for casual wear and all-day comfort. The unique design offers a combination of vibrant colors, premium material, and durable construction.</p>
                        <div className="sku-categories my-3">
                            <span><strong>SKU:</strong> XTRM3</span>
                            <span><strong>Categories:</strong> Casual</span>
                            <span><strong>Brand:</strong> Fillo</span>
                        </div>
                        <div style={{ backgroundColor: 'rgba(236, 236, 236, 0.8)' }}>
                            <div className="size-dropdown my-3">
                                <label htmlFor="size" className="form-label"><strong>Size</strong></label>
                                <select id="size" className="form-select" size={1}>
                                    <option selected>Choose an option</option>
                                    <option >46</option>
                                    <option>45</option>
                                    <option>44</option>
                                    <option>43</option>
                                </select>
                            </div>

                            <div className="d-flex align-items-center my-3">
                                <button className="btn add-to-cart"><i className="bi bi-cart-fill" /> Add to Cart</button>
                            </div>
                        </div>
                        <div className="info-badges">
                            <span><i className="bi bi-shield-check" /> Enjoy safety insurance with every purchase</span>
                            <span><i className="bi bi-truck" /> Free delivery for orders over $20</span>
                        </div>
                    </div>
                </div>

                {/* Review Section */}
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h4 className="text-primary mb-3">Customer Reviews</h4>

                        {/* Review Form */}
                        <form className="mb-4 bg-p">
                            <div className="mb-3">
                                <label htmlFor="reviewerName" className="form-label"><strong>Name</strong></label>
                                <input type="text" className="form-control" id="reviewerName" placeholder="Your Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="reviewText" className="form-label"><strong>Review</strong></label>
                                <textarea className="form-control" id="reviewText" placeholder="Write your review here"></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label"><strong>Rating</strong></label>
                                <div className="d-flex">
                                    <div className="form-check me-2">
                                        <input className="form-check-input" type="radio" name="rating" id="rating1" value="1" />
                                        <label className="form-check-label" htmlFor="rating1">1</label>
                                    </div>
                                    <div className="form-check me-2">
                                        <input className="form-check-input" type="radio" name="rating" id="rating2" value="2" />
                                        <label className="form-check-label" htmlFor="rating2">2</label>
                                    </div>
                                    <div className="form-check me-2">
                                        <input className="form-check-input" type="radio" name="rating" id="rating3" value="3" />
                                        <label className="form-check-label" htmlFor="rating3">3</label>
                                    </div>
                                    <div className="form-check me-2">
                                        <input className="form-check-input" type="radio" name="rating" id="rating4" value="4" />
                                        <label className="form-check-label" htmlFor="rating4">4</label>
                                    </div>
                                    <div className="form-check me-2">
                                        <input className="form-check-input" type="radio" name="rating" id="rating5" value="5" />
                                        <label className="form-check-label" htmlFor="rating5">5</label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit Review</button>
                        </form>

                        {/* Display Reviews */}
                        <div className="reviews">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">John Doe <span className="text-warning">4(★)</span></h5>
                                    <p className="card-text">Great pair of sneakers! Very comfortable and stylish. The colors really pop.</p>
                                    <small className="text-muted">Posted on September 18, 2024</small>
                                </div>
                            </div>

                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Jane Smith <span className="text-warning">5(★)</span></h5>
                                    <p className="card-text">Absolutely love these sneakers! They fit perfectly, and the design is amazing.</p>
                                    <small className="text-muted">Posted on September 17, 2024</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                <div className="row mt-5">
                    <h4 className="text-primary text-center"><strong>Related Products</strong></h4>
                    <Productcard imgSrc={Shoes1} title="Shoes 1" price="$20.00" />
                    <Productcard imgSrc={Shoes2} title="Shoes 2" price="$20.00" />
                    <Productcard imgSrc={Shoes3} title="Shoes 3" price="$20.00" />
                    <Productcard imgSrc={Shoes4} title="Shoes 4" price="$20.00" />
                </div>
            </div>
        </>
    );
}

export default single_product;
