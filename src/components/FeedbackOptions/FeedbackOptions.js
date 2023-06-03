import PropTypes from 'prop-types';
import './FeedbackOptions.css';

const FeedbackOptions=({options, onLeaveFeedback})=>(
 <ul className="ButtonsFeedback__list">
   {options.map((option) => (
      <li key={option} className="ButtonsFeedback__list-item">
        <button className="ButtonsFeedback__button" onClick={() => onLeaveFeedback(option)}>{option}</button>
      </li>
    ))}
    </ul>
);

export default FeedbackOptions;


FeedbackOptions.propTypes={
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};    