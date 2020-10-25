import React, { useState, useEffect } from "react";

import PaymentForm from "./PaymentForm";
const Dish = ({ item }) => {
	let label = item.label ? item.label : " New Item ";
	return (
		<div align="center">
			<div>
				{" "}
				<h2 style={{ color: "transparent" }}> {item.name} </h2>
			</div>

			<div id="card" align="center">
				<div className="card">
					<div className="card-inner">
						<div className="card-front">
							<div>
								<img className="img" src={item.image} alt="" />
								<h1>{item.name}</h1>
								<h3> ${item.price} </h3>
							</div>
						</div>
						<br />
						<div className="card-back">
							<b>
								<h1>{item.name}</h1>
							</b>
							<br />
							<ul>
								<li>
									<h4>{item.description}</h4>
								</li>

								<li>
									<button className="btn1">
										{item.category}
									</button>
								</li>

								<li className="btn2">{label}</li>
							</ul>
							<PaymentForm item={item} />
						</div>
					</div>
				</div>

				<br />
			</div>
		</div>
	);
};

export default Dish;