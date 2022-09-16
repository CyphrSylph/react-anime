import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect } from "react";

// FETCH data from API by wrapping GET method in ASYNC/AWAIT function
useEffect(() => {
	const getQuote = async () => {
		try {
			const response = await axios.get('https://animechan.vercel.app/api/random');
			console.log(response);
			const randomQuote = response.data;
			setQuote(randomQuote);
		} catch (error) {
			console.log(error);
		}
	};
	getQuote();	
}, []);

// POST data from API by wrapping POST method inusing ASYNC/AWAIT function
useEffect(() => {
	const post = async () => {
		const data = {
			quote: 'This quote is made by',
			character: 'this character',
			anime: 'from this anime'
		};
		try {
			const response = await axios.post('https://animechan.vercel.app/api/random',data);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};
	post();
}, []);






// 	// API fetch via Axios with Get method
// const [quote, setQuote] = useState([]);
// const getQuote = () => {
// 	axios.get('https://animechan.vercel.app/api/random')
// 		.then((response) => {
// 			console.log(response);
// 			// Store fetch data in variable
// 			const randoQuote = response.data;
// 			setQuote(randoQuote);
// 		});
// };
// // Pass fetched data to state
// useEffect(() => getQuote(), []);



// // DEFAULT REACT FUNCTION
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;