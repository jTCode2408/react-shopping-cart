import React, {useContext} from 'react';
//context obj
import { ProductContext } from '../contexts/ProductContext';
// Components
import Product from './Product';

const Products = () => {
	//destructure values from productContext obj and pass into hook
	const {products, addItem } = useContext(ProductContext);

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
