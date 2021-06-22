import React from 'react';
import TableHeader from './Header';

const Metrics = ({ states, formated, categories }) => {
    const props = {
        title: 'States',
        items: states
    };
    return (
        <div>
            <TableHeader {...props} />
            <div>
                <div className='sub-categories'>
                    {Object.keys(formated).map((category) => {
                        return category !== 'states' ? (
                            <div key={category}>
                                <div>
                                    {Object.keys(formated[category])
                                        .sort()
                                        .map((subCategory) => (
                                            <div className='row' key={subCategory}>
                                                {states.map((state) => (
                                                    <div key={state} className='value'>
                                                        {formated[category][subCategory][state]
                                                            ? parseInt(formated[category][subCategory][state])
                                                            : '0'}
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                </div>
                                <div className='row sub-total'>
                                    {states.map((state) => {
                                        return (
                                            <div className='value' key={state}>
                                                {categories[category][state]
                                                    ? parseInt(categories[category][state])
                                                    : 0}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ) : (
                            <div key={category}></div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Metrics;
