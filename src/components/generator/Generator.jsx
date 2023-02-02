import { React, useState } from 'react';
import {IoDiceOutline } from 'react-icons/io5';
import { HiOutlineStar } from 'react-icons/hi2';
import Random from './Random';
import Specific from './Specific';
import './generator.css';

const Generator = () => {
  	const [toggleState, setToggleState] = useState(1)

	const toggleGen = (index) => {
		setToggleState(index);
	};

	return (
		<section className="generator section">
			<h2 className="section__title">[In'yō]Generator</h2>
			<span className="section__subtitle">
				Select Channel 01 for a random quote or select Channel 02 to input an Anime character
			</span>
			<div className="generator__container container">
				<div className="generator__tabs">
					<div className={toggleState === 1 ? "generator__button button--flex generator__active" 
						: "generator__button button--flex"} onClick={() => toggleGen(1)}>
						<IoDiceOutline className="generator__icon" />
						Random
					</div>
					<div className={toggleState === 2 ? "generator__button button--flex generator__active" 
						: "generator__button button--flex"} onClick={() => toggleGen(2)}>
						<HiOutlineStar className="generator__icon" />
						Specific
					</div>
				</div>
				<div className="generator__sections">
					<div className={toggleState === 1 ? "generator__content generator__content-active"
					: "generator__content"}>
						<div className="generator__data">
							<Random />
						</div>
					</div>
					<div className={toggleState === 2 ? "generator__content generator__content-active"
					: "generator__content"}>
						<div className="generator__data">
							<Specific />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Generator;