import React from 'react';
import CategoryItems from './CategoryItems';

const CategoriesGrid = ({ categories }) => {
  if (!categories || !Array.isArray(categories) || categories.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Shop by Category</h2>
        <div className="text-center text-gray-500">
          No categories available
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories.map((category) => (
          category && category._id ? (
            <CategoryItems key={category._id} category={category} />
          ) : null
        ))}
      </div>
    </div>
  );
};

export default CategoriesGrid; 