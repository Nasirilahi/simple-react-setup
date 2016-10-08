import React ,{Component} from 'react';
import MainList from './MainList';
import CartItem from './CartItem';
	const order = {
    title: 'Fresh fruits package',
    image: 'http://images.all-free-download.com/images/graphiclarge/citrus_fruit_184416.jpg',
    initialQty: 3,
    price: 8
};

const App =()=>{
	return(<div>
			 <MainList />
			 <CartItem title={order.title} image={order.image} initialQty={order.initialQty} price={order.price} />
			 </div>
			); 
}	
export default App;