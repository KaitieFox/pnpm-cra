import './CustomButton.css';
import {Button} from 'react-bootstrap';

const CustomButton = () => (
	<Button className='btn-primary' onClick={(): void => {
		console.log('clicked');
	}}>Component</Button>
);

export default CustomButton;
