import React from "react";
import { Link } from "react-router-dom";
import { DisplayPriceInRupees } from "../utils/DisplayPriceInRupees";
import { pricewithDiscount } from "../utils/PriceWithDiscount";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product }) => {
  const placeholderImage = "https://via.placeholder.com/400x400?text=Product+Image";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/product/${product.name.toLowerCase().replace(/\s+/g, "-")}-${product.id}`}>
        <div className="relative h-48 overflow-hidden group">
          <img
            src={product.image?.[0] || placeholderImage}
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.target.src = placeholderImage;
            }}
          />
          {product.discount > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
              {product.discount}% OFF
            </div>
          )}
          {product.stock <= 5 && product.stock > 0 && (
            <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
              Only {product.stock} left!
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/product/${product.name.toLowerCase().replace(/\s+/g, "-")}-${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-green-600 transition-colors duration-200 line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="text-sm text-gray-600 mb-3">{product.unit}</div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-green-600">
            {DisplayPriceInRupees(pricewithDiscount(product.price, product.discount))}
          </span>
          {product.discount > 0 && (
            <span className="text-sm text-gray-400 line-through">
              {DisplayPriceInRupees(product.price)}
            </span>
          )}
        </div>

        <div className="mt-auto">
          {product.stock > 0 ? (
            <AddToCartButton data={product} />
          ) : (
            <button
              className="w-full py-2 px-4 bg-gray-300 text-gray-600 rounded-md cursor-not-allowed"
              disabled
            >
              Out of Stock
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 