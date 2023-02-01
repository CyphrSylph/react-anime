import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Random from './components/random/Random';
import Specified from './components/specified/Specified';
import Footer from './components/footer/Footer';

const App = () => {
	
	return (
		<>
			<Header />
			<main className='main'>
				<Home />
				<Random />
				<Specified />
			</main>
			<Footer />
		</>
	);	
}

export default App;

