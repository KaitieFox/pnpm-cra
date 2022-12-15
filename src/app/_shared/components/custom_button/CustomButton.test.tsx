import React from 'react';
import {render, screen} from '@testing-library/react';
import CustomButton from './CustomButton';

test('renders learn react link', () => {
	render(<CustomButton />);
	const contact = screen.getByText(/Primarily/i);
	expect(contact).toBeInTheDocument();
});
