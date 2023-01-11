import { render, screen } from '@testing-library/react';
import CustomButton from './CustomButton';

test('renders learn react link', () => {
	render(<CustomButton />);
	const contact = screen.getByText(/Component/i);
	expect(contact).toBeInTheDocument();
});
