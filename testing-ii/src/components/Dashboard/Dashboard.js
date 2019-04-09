import React from 'react';

const Dashboard = (props) => {
    return (
        <div className='dashboard-container'>
        <button className='dash-btn' onClick={props.clickStrike}>Strike</button>
        <button className='dash-btn'>Ball</button>
        <button className='dash-btn'>Foul Ball</button>
        <button className='dash-btn'>Hit</button>
        </div>
    )
}


export default Dashboard;

