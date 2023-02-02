import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Generator from './components/generator/Generator';
import Footer from './components/footer/Footer';


const App = () => {
	
	return (
		<>
			<Header />
			<main className='main'>
				<Home />
				<Generator />
			</main>
			<Footer />
		</>
	);	
}

export default App;

