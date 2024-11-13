import React from "react";
import Light from "./lights.jsx";


//create your first component
const Home = () => {
	return (
		<>
			<div className="container mx-auto">
				<div className="container">
					<Light />
				</div>
			</div>
		</>
	);
};

export default Home;
