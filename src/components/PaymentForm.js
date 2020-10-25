import React, { useState, useEffect } from "react";

const PaymentForm = ({ item }) => {
	const [cardNumber, setCardNumber] = useState("");
	const [cvv, setCvv] = useState("");
	const [paid, setPaid] = useState(false);

	const onSubmit = (e) => {
		console.log(paid);
		if (cvv && cardNumber) {
			setPaid(true);
		}
		console.log(paid);
	};

	let orderStatus = paid ? "Successfully ordered" : "Order Now";
	let buttonStyle = paid ? "#1be357" : "black";

	return (
		<form onSubmit={(e) => onSubmit(e)}>
			<button
				disabled
				style={{ background: buttonStyle }}
				className="btn1"
			>
				{" "}
				{orderStatus}
			</button>
			<br />
			<br />
			<b>Enter Card Details : </b>
			<input
				placeholder="XXXX-XXXX-XXXX-XXXX"
				type="number"
				value={cardNumber}
				className="form-control"
				onChange={(e) => setCardNumber(e.target.value)}
				autoFocus
			/>
			<input
				style={{ width: "80px" }}
				placeholder=" CVV "
				type="number"
				value={cvv}
				className="form-control"
				onChange={(e) => setCvv(e.target.value)}
				autoFocus
			/>
			<input
				className="btn3"
				type="submit"
				value={"Pay $" + item.price}
				autoFocus
			/>
		</form>
	);
};
export default PaymentForm;