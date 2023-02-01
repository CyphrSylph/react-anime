import './App.css';
import axios from 'axios';
import React, { useEffect } from "react";
import MovingText from 'react-moving-text';

// USE 'npm start' TO LOAD REACT PAGE
class App extends React.Component {
	
	constructor(props) {
		// THE KEYWORD super IS USED TO CALL THE CONSTRUCTOR OF ITS PARENT CLASS, ALLOWING ACCESS ACCESS TO IT'S VARIABLES
		// THE KEYWORD props [PROPERTIES] IS USED TO PASS READ-ONLY DATA FROM ONE COMPONENT TO ANOTHER	
		super(props);
		this.state = {quote: ''};
		this.state = {character: ''};
		this.state = {anime: ''};
	}

	// THE FUNCTION componentDidMount WILL RENDER TWICE IN DEV MODE TO AVOID CLIENT MISMATCH WARNINGS
	componentDidMount() {
		this.fetchQuote();
	}

	// FETCH DATA FROM API VIA axios.get
	fetchQuote = () => {
		axios.get('https://animechan.vercel.app/api/random')
			.then((response) => {
				const {quote} =response.data.quote;
				const {character} = response.data.character;
				const {anime} = response.data.anime;
				console.log(response.data);
				// console.log(response.data.quote);
				// console.log(response.data.character);
				// console.log(response.data.anime);
				this.setState({quote});
				this.setState({character});
				this.setState({anime});	
			})
			.catch((error) => {
				console.log(error);
			});
	}

	// RENDER FORMAT OF THE HTML TREE
	render() {
		return (
			<div className="App">
				<div className= "Header">
					<MovingText 
						className= "Title"
						type= "popIn"
						duration= "1800ms"
						delay= "0s"
						direction= "normal"
						timing= "ease-in"
						iteration= "1"
						fillMode= "none">
						.aniQuote
					</MovingText>
				</div>
				<div className="Card">
					<h1 className="Quote">
						"{this.state.quote}"
					</h1>
					<h5 className="Anime">
						{this.state.character}, 
						<i>{this.state.anime}</i>
					</h5>
				</div>
				<button className="Button" onClick={this.fetchQuote}>
						<span>Random Quote</span>
				</button>
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