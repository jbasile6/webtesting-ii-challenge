import React from 'react';

const Dashboard = (props) => {
    return (
        <div className='dashboard-container'>
        <button className='dash-btn' onClick={props.clickStrike}>Strike</button>
        <button className='dash-btn' onClick={props.clickBall}>Ball</button>
        <button className='dash-btn' onClick={props.clickFoul}>Foul Ball</button>
        <button className='dash-btn' onClick={props.clickHit}>Hit</button>
        </div>
    )
}


export default Dashboard;

