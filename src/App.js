import './App.css';
import FeedbackList from './components/FeedbackList/FeedbackList';
import React, { useState } from 'react';
import Form from './components/Form/Form';
import { v4 as uuidv4 } from 'uuid';
import FeedbackInfo from './components/FeedbackInfo/FeedbackInfo';
import { ContextProvider } from './components/Context/Context';

function App() {
	return (
		<ContextProvider>
			<div className="App">
				<Form />
				<FeedbackInfo />
				<FeedbackList />
			</div>
		</ContextProvider>
	);
}

export default App;
