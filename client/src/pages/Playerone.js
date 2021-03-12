import React from 'react';
import { Link } from 'react-router-dom';
import './Playerone.scss';


const Playerone = () => {
    return (
        <div className="page1">
    <h1>PLAYER ONE</h1>
    <form>
        <div className="player">
            <label className="player__label">ENTER PLAYER ONE NAME
            <textarea className="player__name" placeholder="Enter Name Here"></textarea>
            </label> 

            <label>CHOOSE YOUR CHIP</label> 

            <Link to='/playertwo' style={{ textDecoration: 'none' }}>
            <button className="player__button" type="submit">SUBMIT</button>
            </Link>

        </div>
    </form>
        </div>
    );
};

export default Playerone;