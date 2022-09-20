import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect } from "react";

// USE 'npm start' TO LOAD REACT PAGE

class App extends React.Component {
	state = {
		quote: '',
	}

	componentDidMount() {
		this.fetchQuote();
	}

	fetchQuote = () => {
		axios.get('https://animechan.vercel.app/api/random')
			.then((response) => {
				const {quote} = response;
				console.log(response.data);
				this.setState({quote});
			})
			.catch((error) => {
				console.lot(error);
			});
	}

	render() {
		return (
			<div className="App">
				<div className="Card">
					<h1 className='Heading'>{this.state.quote}</h1>
					<button className="Button" onClick={this.fetchQuote}>
						<span>Random Quote</span>
					</button>
				</div>
			</div>
		);
	}
}

export default App;


// FETCH DATA FROM API BY WRAPPING GET METHOD IN ASYNC/AWAIT FUNCTION
// useEffect(() => {
// 	const getQuote = async () => {
// 		try {
// 			const response = await axios.get('https://animechan.vercel.app/api/random');
// 			console.log(response);
// 			const randomQuote = response.data;
// 			setQuote(randomQuote);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
// 	getQuote();	
// }, []);

// POST DATA FROM API BY WRAPPING POST METHOD IN ASYNC/AWAIT FUNCTION
// useEffect(() => {
// 	const post = async () => {
// 		const randomQuote = {
// 			quote: 'This quote is made by',
// 			character: 'this character',
// 			anime: 'from this anime'
// 		};
// 		try {
// 			const response = await axios.post('https://animechan.vercel.app/api/random',randomQuote);
// 			console.log(response);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
// 	post();
// }, []);
// // FORMAT FOR QUOTE DATA
// function formatQuote(randomQuote) {
// 	return randomQuote.quote 
// }