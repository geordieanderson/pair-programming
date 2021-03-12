import React from 'react';
import { Link } from 'react-router-dom';
import './Playertwo.scss';

const Playertwo = () => {
    return (
        <div className="page2">
    <h1>PLAYER TWO</h1>
    <form>
        <div className="player">
            <label>ENTER PLAYER TWO NAME
            <textarea className="player__name" placeholder="Enter Name Here"></textarea>
            </label> 

            <label>CHOOSE YOUR CHIP</label> 

            <Link to='/gamepage' style={{ textDecoration: 'none' }}>
            <button className="button" type="submit">SUBMIT</button>
            </Link>

        </div>
    </form>
        </div>
    );
};

export default Playertwo;