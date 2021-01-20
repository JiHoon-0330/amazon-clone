import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  const { id, name, image, price, rating, numReviews } = product;
  return (
    <div className="card">
      <Link to={`/product/${id}`}>
        <img className="medium" src={image} alt={name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${id}`}>
          <h2>{name}</h2>
        </Link>
        <Rating rating={rating} numReviews={numReviews} />
        <div className="price">${price}</div>
      </div>
    </div>
  );
};

export default Product;
