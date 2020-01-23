import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
//contexts
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

//REMOVE ITEM **STERTCH
	const removeItem = removed =>{
		setCart(cart.filter(item => item.id !== removed));

	}

	return (
		
		<div className="App">
{/*wrap all components/routes inside of productcontext.provider*/}
		<ProductContext.Provider value = {{products, addItem}}>
{/*pass value prop holding products state & addItem function*/}
		 <CartContext.Provider value = {{cart, removeItem}}>
			<Navigation />
			{/* Routes */}
			<Route
				exact
				path="/"
				component = {Products}/>

			<Route
				path="/cart"
				component = {ShoppingCart}
			/>
			</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
