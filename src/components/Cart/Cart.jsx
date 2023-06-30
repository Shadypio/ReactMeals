import React from "react";
import classes from "./Cart.module.css";

const Cart = (props) => {
	const cartItems = [
		{
			id: "c1",
			name: "Sushi",
			amount: 2,
			price: 12.99,
		},
		{
			id: "c2",
			name: "Schnitzel",
			amount: 3,
			price: 16.5,
		},
		{
			id: "c3",
			name: "Barbecue Burger",
			amount: 1,
			price: 22.99,
		},
	].map((item) => <li>{item.name}</li>);

	return (
		<div>
			<ul className={classes["button--alt"]}>{cartItems}</ul>
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>35.62</span>
			</div>
			<div>
				<button className={classes["button--alt"]}>Close</button>
				<button className={classes.button}>Order</button>
			</div>
		</div>
	);
};

export default Cart;
