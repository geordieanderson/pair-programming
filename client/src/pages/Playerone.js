import React from 'react';
import { Link } from 'react-router-dom';


const Playerone = () => {
    return (
        <div>
            <h1>PLAYER ONE</h1>
            <form>
                <label>ENTER PLAYER ONE NAME
                    <textarea className="form__name" placeholder="Enter Name Here"></textarea>
                </label> 
                <label>CHOOSE YOUR CHIP
                    <div>

                    </div>
                </label> 
        <Link to='/playertwo'>
        <button className="button" type="submit">SUBMIT</button>
        </Link>
            </form>
        </div>
    );
};

export default Playerone;