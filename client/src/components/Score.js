
import './Score.scss'

const score = ({ name, chip, score }) => {
    return (
        <div className='score'>
            <h3>{name}</h3>
            <div>{chip}</div>
            <div>{score}</div>
        </div>
    );
};

export default score;