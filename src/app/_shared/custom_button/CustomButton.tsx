import React from 'react';
import './CustomButton.css';
import {Button} from 'react-bootstrap';

const CustomButton = () => (
	<Button className='btn-primary' onClick={(): void => {
		console.log('clicked');
	}}>Primarily</Button>
);

export default CustomButton;
