import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/about/About';
import Header from './components/Header/Header';

ReactDOM.render(
	<BrowserRouter>
		<Header />
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/about" element={<About />} />
		</Routes>
	</BrowserRouter>,
	document.getElementById('root')
);
