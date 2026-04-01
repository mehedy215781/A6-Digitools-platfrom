import React, { use } from 'react';
import ProductCard from './ProductCard'; 

const Product = ({ productPromise, handleAddToCart, Carts }) => {
    const products = use(productPromise);

    const getTagStyles = (tagType) => {
        if (tagType === 'best-seller') return 'bg-orange-100 text-orange-600';
        if (tagType === 'popular') return 'bg-blue-100 text-blue-600';
        if (tagType === 'new') return 'bg-green-100 text-green-600';
        return 'bg-purple-100 text-purple-600';
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((item) => (
                <ProductCard 
                    key={item.id} 
                    item={item} 
                    getTagStyles={getTagStyles} 
                    handleAddToCart={handleAddToCart}
                    Carts={Carts}
                />
            ))}
        </div>
    );
};

export default Product;