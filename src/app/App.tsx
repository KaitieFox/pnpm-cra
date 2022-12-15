import React from 'react';
import logo from '../_assets/logo.svg';
import CustomButton from './_shared/custom_button/CustomButton';
import './App.css';

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
			<CustomButton/>
		</div>
	</>
);

export default App;
