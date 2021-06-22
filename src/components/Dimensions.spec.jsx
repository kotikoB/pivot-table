import { render } from '@testing-library/react';
import data from './data.json';
import { transformData } from '../helpers/transformer';
import Dimensions from './Dimensions';

test('renders Dimensions', () => {
    const formated = transformData(data);
    const { container } = render(<Dimensions formated={formated} />);
    expect(container).toMatchSnapshot();
});
