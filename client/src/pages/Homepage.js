import React from 'react';
import { Link } from 'react-router-dom';


const Homepage = () => {
    return (
        <div>
            <h1>CONNECT 4</h1>
            <Link to='/playerone'>
              <button className="button" type="button">CLICK HERE TO BEGIN</button>
              </Link>
        </div>
    );
};

export default Homepage;