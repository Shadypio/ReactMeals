import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

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
		<Modal onHideCart={props.onHideCart}>
			<ul className={classes["cart-items"]}>{cartItems}</ul>
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>35.62</span>
			</div>
			<div className={classes.actions}>
				<button className={classes["button--alt"]} onClick={props.onHideCart}>
					Close
				</button>
				<button className={classes.button}>Order</button>
			</div>
		</Modal>
	);
};

export default Cart;
