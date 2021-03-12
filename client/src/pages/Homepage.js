import React from 'react';
import { Link } from 'react-router-dom';
import "./Homepage.scss";


const Homepage = () => {
    return (
        <div className="home startdiv">
            <h1 className="home__title italic">CONNECT 4</h1>
            <div class="wrapper">
                <div class="chip"></div>
                <div class="chip"></div>  
                <div class="chip"></div>  
                <div class="chip"></div>  
            </div>
            <Link to='/playerone'>
            <button className="home__button" type="button">CLICK HERE TO BEGIN</button>
            </Link>
        </div>
    );
};

export default Homepage;