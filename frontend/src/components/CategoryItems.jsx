import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PlaceholderImage from './PlaceholderImage';

const CategoryItems = ({ category }) => {
  const [imageError, setImageError] = useState(false);

  if (!category || !category._id) {
    return null; // Don't render anything if category data is invalid
  }

  return (
    <Link to={`/category/${category._id}`} className="block">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <div className="relative h-40">
          {category.image && !imageError ? (
            <img
              src={category.image}
              alt={category.name || 'Category'}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              onError={() => setImageError(true)}
            />
          ) : (
            <PlaceholderImage text={category.name} />
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 text-center">
            {category.name || 'Unnamed Category'}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItems;
