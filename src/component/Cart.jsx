import React from 'react';

const Cart = ({ Carts, handleRemoveFromCart, handleCheckout }) => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white border border-blue-400 rounded-lg shadow-sm mt-10">
   
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-dotted border-blue-300 pb-2">
                Your Cart
            </h2>

            {Carts.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-gray-400 text-lg">Your cart is currently empty.</p>
                </div>
            ) : (
                <div className="space-y-4">
                   
                    <div className="border border-dotted border-blue-300 p-4 rounded-md space-y-4">
                        {Carts.map((item) => (
                            <div 
                                key={item.id} 
                                className="flex items-center justify-between bg-gray-50/50 p-4 rounded-xl"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center border border-gray-100">
                                        <img className="w-8 h-8 object-contain" src={item.icon} alt="" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                        <p className="text-gray-400 text-sm font-medium">${item.price}</p>
                                    </div>
                                </div>
                                
                                <button 
                                    onClick={() => handleRemoveFromCart(item.id)}
                                    className="text-pink-500 hover:text-pink-700 font-semibold text-sm transition-colors cursor-pointer"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between items-center py-4 px-2 border-b border-dotted border-blue-300">
                        <span className="text-gray-400 text-sm">Total:</span>
                        <span className="text-3xl font-bold text-gray-900">
                            ${Carts.reduce((total, item) => total + item.price, 0)}
                        </span>
                    </div>

                 
                    <div className="pt-4">
                        <button 
                            onClick={handleCheckout}
                            className="w-full py-4 bg-[#8B2CFF] hover:bg-[#7a25e5] text-white font-bold rounded-full transition-all active:scale-[0.98] cursor-pointer"
                        >
                            Proceed To Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;