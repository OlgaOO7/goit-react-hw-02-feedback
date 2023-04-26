import PropTypes from "prop-types";
import css from "./FeedbackOption.module.css";


export const FeedbackOption = ({options, handleFeedback}) => {
  return (
    <div className={css.feedbackOptionWrapper}>
      {options.map(option => {
        return (
          <button key={option} type="button" name={option} className={css.btnFeedbackOpt} onClick ={() => handleFeedback(option)}>{option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        )
      })}
    </div>
  )
};

FeedbackOption.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleFeedback: PropTypes.func.isRequired,
}