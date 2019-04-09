import React from 'react';

const Display = (props) => {
    return (
        <div className='display-container'>
            <div className='stat-tracker'>
                <h2>Balls:</h2>
                <h3>{props.balls}</h3>
            </div>
            <div className='stat-tracker'>
                <h2>Strikes:</h2>
                <h3>{props.strikes}</h3>
            </div>
        </div>
    )
}

export default Display;