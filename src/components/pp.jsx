import React, { useEffect, useState } from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { BiBasket } from "react-icons/bi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/marketplace_logo.png";
import { useNavigate } from "react-router-dom";
import Carausel from "./Carausel";
import ImageView from "./ImageView";
import { format } from "number-brm"; // Added this to format price correctly

const API_URL = "https://fakestoreapi.com";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [basket, setBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [modalData, setModalData] = useState(null); // To store product details for modal

  const navigate = useNavigate();

  const handleBasketClick = () => {
    setIsBasketOpen(!isBasketOpen);
  };

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/products/categories`);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setCategories(["all", ...data]);
    } catch (err) {
      console.error("Error fetching categories:", err);
      setError("Kategoriyalarni olishda xatolik yuz berdi.");
      toast.error("Kategoriyalarni olishda xatolik yuz berdi.");
    } finally {
      setLoading(false);
    }
  };

  const fetchProducts = async () => {
    setLoading(true);
    setError("");
    try {
      const url =
        selectedCategory === "all"
          ? `${API_URL}/products`
          : `${API_URL}/products/category/${selectedCategory}`;
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      const productsWithQuantity = data.map((product) => ({
        ...product,
        quantity: 0,
      }));
      setProducts(productsWithQuantity);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Error fetching products!");
      toast.error("Error fetching products!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

  useEffect(() => {
    const total = basket.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
    setTotalPrice(total);
  }, [basket]);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<IoIosStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars && halfStar) {
        stars.push(<IoIosStarHalf key={i} className="text-yellow-400" />);
      } else {
        stars.push(<IoIosStarOutline key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  const addToBasket = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);

    if (productToAdd) {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );

      setBasket((prevBasket) => {
        const existingProduct = prevBasket.find(
          (item) => item.id === productId
        );
        if (existingProduct) {
          return prevBasket.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...prevBasket, { ...productToAdd, quantity: 1 }];
      });
    }
    toast.success("Product added to basket!");
  };

  const removeFromBasket = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max(product.quantity - 1, 0) }
          : product
      )
    );

    setBasket((prevBasket) => {
      const updatedBasket = prevBasket
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0);
      return updatedBasket;
    });

    toast.info("Product removed from basket!");
  };

  const handleOrder = () => {
    if (basket.length === 0) {
      toast.error("Your basket is empty!");
      return;
    }
    console.log("Order placed:", basket);
    setBasket([]);
    setProducts((prevProducts) =>
      prevProducts.map((product) => ({ ...product, quantity: 0 }))
    );
    setTotalPrice(0);
    toast.success("Order placed successfully!");
  };

  // Modal opening on product image click
  const handleImageClick = (product) => {
    setModalData(product);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white border-[#023e7d] border-2">
      <div className="flex items-center justify-between p-6 mb-6 bg-[#c0fdff] border-[#023e7d] border-[1px]">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Sardor's Market Logo"
            className="w-12 h-12 object-contain mr-4"
          />
          <h1 className="text-4xl font-bold text-[#0466c8]">Sardor's Market</h1>
        </div>
        <div className="text-lg text-[#0466c8] font-semibold">
          <button
            onClick={handleBasketClick}
            className="relative flex items-center justify-center p-2 rounded-full bg-[#0466c8] hover:bg-[#0353a4] text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#023e7d]"
          >
            <BiBasket className="text-3xl md:text-4xl" />
            {basket.length > 0 && (
              <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full px-2.5 py-1 transform translate-x-1/2 -translate-y-1/2">
                {basket.length}
              </span>
            )}
          </button>
        </div>
      </div>
      <Carausel />
      {loading && <p className="text-[#023e7d]">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="mb-6">
        <p className="block text-lg font-medium text-[#002855] mb-2">
          Choose category:
        </p>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category
                  ? "bg-[#0466c8] text-white"
                  : "bg-[#f7f9fc] text-[#023e7d] hover:bg-[#e2eaf1]"
              }`}
            >
              {category === "all" ? "All" : category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover cursor-pointer"
              onClick={() => handleImageClick(product)} // Show details on click
            />
            <h3 className="mt-4 text-xl font-semibold text-[#023e7d]">
              {product.title}
            </h3>
            <p className="mt-2 text-sm text-[#0466c8]">
              {format(product.price)} UZS
            </p>
            <div className="flex items-center mt-2">
              {renderStars(product.rating.rate)}
            </div>
            <button
              onClick={() => addToBasket(product.id)}
              className="mt-4 w-full py-2 bg-[#0466c8] text-white rounded-lg hover:bg-[#0353a4]"
            >
              Add to Basket
            </button>
          </div>
        ))}
      </div>
      {modalData && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4">{modalData.title}</h2>
            <p className="text-lg text-[#0466c8] mb-4">
              {format(modalData.price)} UZS
            </p>
            <p className="mb-4">{modalData.description}</p>
            <div className="flex gap-4">
              {modalData.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product image ${index + 1}`}
                  className="w-24 h-24 object-cover"
                />
              ))}
            </div>
            <button
              onClick={() => setModalData(null)}
              className="mt-4 w-full py-2 bg-[#0466c8] text-white rounded-lg hover:bg-[#0353a4]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
