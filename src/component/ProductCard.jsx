import React from 'react'; 

const ProductCard = ({ item, getTagStyles, handleAddToCart, Carts }) => {
    
    // চেক করা হচ্ছে আইটেমটি কি কার্টে আছে?
    const isSold = Carts.some(cartItem => cartItem.id === item.id);

    return (
        <div className="relative bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm flex flex-col justify-between h-full">
            <div>
                <span className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-bold ${getTagStyles(item.tagType)}`}>
                    {item.tag}
                </span>

                <div className="w-14 h-14 mb-6 flex items-center justify-center bg-gray-50 rounded-2xl">
                    <img className="w-10 h-10 object-contain" src={item.icon} alt={item.name} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.name}</h3>
                <p className="text-gray-500 mb-6 text-sm min-h-[40px]">{item.description}</p>

                <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-bold text-gray-900">${item.price}</span>
                    <span className="text-gray-400 text-sm">/{item.period}</span>
                </div>
            </div>

            <button 
                onClick={() => handleAddToCart(item)}
                disabled={isSold}
                className={`w-full py-4 rounded-full font-bold transition-all duration-300 cursor-pointer ${
                    isSold 
                    ? "bg-purple-100 text-purple-300 cursor-not-allowed" 
                    : "bg-gradient-to-r from-[#9514FA] to-[#7303E5] text-white hover:brightness-110 active:scale-95"
                }`}
            >
                {isSold ? "Sold Out" : "Buy Now"}
            </button>
        </div>
    );
};

export default ProductCard;