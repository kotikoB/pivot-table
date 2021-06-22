import React from 'react';

const TableHeader = ({ title, items }) => {
    return (
        <div className='header-container'>
            <h3>{title}</h3>
            <div className='headers'>
                {items.map((item) => (
                    <div key={item} className='header-item'>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TableHeader;
