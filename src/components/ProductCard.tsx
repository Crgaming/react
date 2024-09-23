
import React from "react";

interface ProductCardProps {
  imgSrc: string;
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imgSrc, title, price }) => {
  return (
    <div className="col-md-3 mb-4">
    <div className="product-card">
      <img src={imgSrc} alt={title} className="img-fluid" />
      <h5 className="mt-3">{title}</h5>
      <p className="text-info"><strong>{price}</strong></p>
      <a href="#" className="btn btn-outline-dark">Select Options</a>
    </div>
  </div>
  );
};

export default ProductCard;