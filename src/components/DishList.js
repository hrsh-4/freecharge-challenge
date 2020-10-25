import React from "react";
import Dish from "./Dish";

const DishList = ({ items }) => {
	return (
		<section className="cards">
			{items.map((item) => (
				<Dish key={item.id} item={item}></Dish>
			))}
		</section>
	);
};

export default DishList;