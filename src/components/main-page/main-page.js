import React from 'react';
import Calendar from 'react-calendar';
import { withRouter } from 'react-router-dom';

import './main-page.css';
import tvPict from './TV.png';

const  MainPage = ( {history} ) => {

    let onChange = (itemId) => {
        history.push(`/films/${itemId}`);
    };

    return (
        <div className='tv-style'>
            <div >
                <img src={tvPict} />       
            </div>
            <div className='tv-text'>
                <p>Для получения списка сериалов,</p>
                <p>пожалуйса выберите</p>
                <p>необходимый месяц и день</p>
            </div>
            <div className="calendar">
                <Calendar
                    onChange={(el) => onChange(el)}
                    value={new Date()}
                />
            </div>
        </div>        
    )
};

export default withRouter(MainPage);