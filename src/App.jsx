import { useState, Suspense } from "react";
import Navbar from "./component/Navbar";
import Banner from "./Banner/Banner";
import Matrix from "././Matrics/Matrix";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Digital from "./component/Digital"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getProduct = async () => {
  const res = await fetch("/Product.json");
  return res.json();
};
const productPromise = getProduct();

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [Carts, setCarts] = useState([]); 

  const handleAddToCart = (product) => {
    const isExist = Carts.find((item) => item.id === product.id);
    if (!isExist) {
      setCarts([...Carts, product]);
      toast.success(`${product.name} added to cart!`);
    } else {
      toast.warn("Item already in cart!");
    }
  };

  const handleRemoveFromCart = (id) => {
    const remainingCarts = Carts.filter((item) => item.id !== id);
    setCarts(remainingCarts);
    toast.error("Item removed from cart");
  };

  const handleCheckout = () => {
    if (Carts.length > 0) {
      toast.success("Congratulations! Order placed successfully.");
      setCarts([]); 
      setActiveTab("products"); 
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Banner />
      <Matrix />
      <Digital></Digital>
      

      <div className="tabs tabs-box justify-center mt-10 bg-transparent border-none gap-3">
        <input 
          type="radio" 
          name="tabs" 
          aria-label="Products" 
          className={`tab font-bold px-10 rounded-full transition-all duration-300 cursor-pointer 
            ${activeTab === "products" 
              ? "!bg-gradient-to-r !from-[#9514FA] !to-[#7303E5] !text-white" 
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          onChange={() => setActiveTab("products")} 
          checked={activeTab === "products"} 
        />
        <input 
          type="radio" 
          name="tabs" 
          aria-label={`Cart (${Carts.length})`} 
          className={`tab font-bold px-10 rounded-full transition-all duration-300 cursor-pointer 
            ${activeTab === "cart" 
              ? "!bg-gradient-to-r !from-[#9514FA] !to-[#7303E5] !text-white" 
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          onChange={() => setActiveTab("cart")} 
          checked={activeTab === "cart"}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {activeTab === "products" ? (
          <Suspense fallback={<div className="text-center py-20 font-bold text-2xl text-purple-600">Loading...</div>}>
            <Product 
              productPromise={productPromise} 
              handleAddToCart={handleAddToCart} 
              Carts={Carts} 
            />
          </Suspense>
        ) : (
          <Cart 
            Carts={Carts} 
            handleRemoveFromCart={handleRemoveFromCart} 
            handleCheckout={handleCheckout}
          />
        )}
      </div>

      <ToastContainer 
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>
  );
}

export default App;