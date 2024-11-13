import React from "react";
import Light from "./lights.jsx";
import Title from "./title.jsx";

//create your first component
const Home = () => {
	return (
		<>
		<div className="container">
					<Title/>
			</div>

			<div className="container">
					<Light />
			</div>
		</>
	);
};

export default Home;
