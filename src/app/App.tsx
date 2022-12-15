import React from 'react';
import logo from '../_assets/logo.svg';
import './App.css';
import Contact from './contact/Contact';

const App = () => (
	<>
		<div className='App-header'>
			<img src={logo} className='App-logo' alt='logo' />
			<p>
          Edit <code>src/App.tsx</code> and save to reload.
			</p>
			<a
				className='App-link'
				href='https://reactjs.org'
				target='_blank'
				rel='noopener noreferrer'
			>
          Learn React!
			</a>
			<Contact/>
		</div>
	</>
);

export default App;
