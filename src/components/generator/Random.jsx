import React from 'react';
import './random.css';

const Random = () => {
  return (
	<div className="random__container container grid">
		<div className="random__content grid">
			<div className="random__img"></div>
			<div className="random__data">
				<h3 className="random__quote">Quote</h3>
				<p className="random__details">Character Name, Anime Title</p>
			</div>
		</div>
	</div> 
  );
}

export default Random;