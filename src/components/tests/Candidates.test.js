import {render , screen ,cleanup} from '@testing-library/react';
import Candidates from '../Candidates';

afterEach(() => {
	cleanup()
})

test('should render Candidates component', () => {
	const candidates = [
		{id:1372, name: "Sara Marshall", applicationId:171},
		{id:1111, name: "Sara ", applicationId:1716},
	]

	render(<Candidates candidates={candidates}/>);
	const candidatesElement = screen.getByTestId('candidates-1');
	expect(candidatesElement).toBeInTheDocument()
	expect(candidatesElement).toHaveTextContent('CANDIDATES')
	expect(candidatesElement).toContainHTML('Open Application')
})