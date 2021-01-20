import React from "react";
import Rating from "./Rating";

const Product = ({ product }) => {
  const { id, name, image, price, rating, numReviews } = product;
  return (
    <div className="card">
      <a href={`/product/${id}`}>
        <img className="medium" src={image} alt={name} />
      </a>
      <div className="card-body">
        <a href={`/product/${id}`}>
          <h2>{name}</h2>
        </a>
        <Rating rating={rating} numReviews={numReviews} />
        <div className="price">${price}</div>
      </div>
    </div>
  );
};

export default Product;
