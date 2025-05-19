import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { motion, AnimatePresence } from "framer-motion";
import { staticProducts } from "../common/staticProducts";

const CategoryProductsPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryInfo, setCategoryInfo] = useState({
    title: "",
    description: "",
    image: "",
  });

  // Category data mapping
  const categoryData = {
    "smart-phones": {
      title: "Smart Phones",
      description: "Explore our range of cutting-edge smartphones",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3",
    },
    "feature-phone": {
      title: "Feature Phones",
      description: "Reliable and durable feature phones",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3",
    },
    "gaming-laptops": {
      title: "Gaming Laptops",
      description: "High-performance gaming laptops",
      image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3",
    },
    "macbooks": {
      title: "MacBooks",
      description: "Premium Apple MacBooks",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3",
    },
    "microsoft-surface": {
      title: "Microsoft Surface",
      description: "Versatile Microsoft Surface devices",
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3",
    },
    "notebook-laptops": {
      title: "Notebook & Laptops",
      description: "Wide range of notebooks and laptops",
      image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3",
    },
    "gaming-chair-accessories": {
      title: "Gaming Chair Accessories",
      description: "Enhance your gaming setup",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3",
    },
    // Add mappings for static product categories
    "perfume-fiesta": {
      title: "Perfume Fiesta",
      description: "Discover a world of luxurious fragrances",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3",
    },
    "time-fest": {
      title: "Time Fest",
      description: "Special time-limited deals and offers",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3",
    },
    "clearance-sale": {
      title: "Clearance Sale",
      description: "Huge discounts on premium products",
      image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3",
    },
    "pre-owned-products": {
      title: "Pre-Owned Products",
      description: "Quality certified pre-owned items",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3",
    },
    "saver-zone": {
      title: "Saver Zone",
      description: "Best deals and maximum savings",
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3",
    },
    "deal-of-the-day": {
      title: "Deal of The Day",
      description: "Don't miss today's special offers",
      image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3",
    },
    "top-selling-products": {
      title: "Top Selling Products",
      description: "Most popular products loved by customers",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3",
    },
  };

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Get products from static data
        const categoryProducts = staticProducts[category] || [];
        setProducts(categoryProducts);

        // Set category info
        if (categoryData[category]) {
          setCategoryInfo(categoryData[category]);
        } else {
          // Set default category info if not found
          setCategoryInfo({
            title: category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
            description: "Explore our products",
            image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3",
          });
        }
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [category]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative h-[300px] overflow-hidden"
      >
        <img
          src={categoryInfo.image}
          alt={categoryInfo.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl font-bold mb-4">{categoryInfo.title}</h1>
            <p className="text-xl">{categoryInfo.description}</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center h-64"
            >
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500"></div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          )}

          {!loading && products.length === 0 && (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center py-16"
            >
              <h2 className="text-2xl font-semibold text-gray-600">
                No products found in this category
              </h2>
              <p className="text-gray-500 mt-2">
                Please check back later for new products
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default CategoryProductsPage; 