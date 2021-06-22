import React from 'react';
import './pivot.css';
import data from './data.json';
import { transformData, getStates, getTotals, getCategories } from '../helpers/transformer';
import Dimensions from './Dimensions';
import Metrics from './Metrics';

const formated = transformData(data);
const states = getStates(formated);
const categories = getCategories(formated);
const totals = getTotals(states, categories);

const Pivot = () => {
    return (
        <div className='container'>
            <div className='fixed-container'>
                <Dimensions formated={formated} />
                <div>Grand Total</div>
            </div>
            <div className='flex-container'>
                <Metrics formated={formated} categories={categories} states={states} />
                <div className='row sub-total'>
                    {states.map((state) => (
                        <div className='value' key={`${state}1`}>
                            {totals[state] ? parseInt(totals[state]) : '0'}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pivot;
