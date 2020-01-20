import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
//contexts
import { ProductContext } from './contexts/ProductContext';
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		console.log('item',item);
		setCart([...cart, item]);
	};

	return (
		
		<div className="App">
{/*wrap all components/routes inside of productcontext.provider*/}
		<ProductContext.Provider value = {{products, addItem}}>
{/*pass value prop holding products state & addItem function*/}
			<Navigation cart={cart} />
			{/* Routes */}
			<Route
				exact
				path="/"
				component = {Products}/>

			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
