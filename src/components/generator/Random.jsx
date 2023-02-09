import React from 'react';
import './random.css';
import useFetch from '../hooks/useFetch';

const Random = () => {
	const [data, error] = useFetch();
	// console.log("Checking the Aether for data... ", data);
	// console.log("Checking the Aether for set data... ", data, setData);
	const loading = false;
	
	return loading ? (
		<div className="random__container container grid">
			<div className="random__content grid">
				<div className="random__img"></div>
				<div className="random__data">
					Loading...
				</div>
			</div>
		</div> 
	) :

	(
		<div className="random__container container grid">
			<div className="random__content grid">
				<div className="random__img"></div>
				<div className="random__data">
					{/* {error !== "" && error} */}
					<h3 className="random__quote">{data['quote']}</h3>
					<p className="random__details">{`Character: ${data['character']} Anime Title: ${data['anime']}`}</p>
				</div>
			</div>
		</div> 
	);
}

export default Random;