import { render } from '@testing-library/react';
import data from './data.json';
import { transformData, getStates, getCategories } from '../helpers/transformer';
import Metrics from './Metrics';

const formated = transformData(data);
const states = getStates(formated);
const categories = getCategories(formated);

test('renders Metrics', () => {
    const formated = transformData(data);
    const { container } = render(<Metrics states={states} formated={formated} categories={categories} />);
    expect(container).toMatchSnapshot();
});
