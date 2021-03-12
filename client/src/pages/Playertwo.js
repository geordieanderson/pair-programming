import React from 'react';
import { Link } from 'react-router-dom';


const Playertwo = () => {
    return (
        <div>
            <h1>PLAYER TWO</h1>
            <form>
                <label>ENTER PLAYER TWO NAME
                    <textarea className="form__name" placeholder="Enter Name Here"></textarea>
                </label> 
                <label>CHOOSE YOUR CHIP
                    <div>

                    </div>
                </label> 
        <Link to='/Gamepage'>
        <button className="button" type="submit">SUBMIT</button>
        </Link>
            </form>
        </div>
    );
};

export default Playertwo;