import PropTypes from "prop-types";
import { NotificationMessage } from 'components/NotificationMessage/NotificationMessage';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const isStatisticShown = good || neutral || bad;
  return (
    <div className={css.textWrapper}>
      {isStatisticShown ? (
        <>
          <p className={css.statisticText}>Good: {good}</p>
          <p className={css.statisticText}>Neutral: {neutral}</p>
          <p className={css.statisticText}>Bad: {bad}</p>
          <p className={css.statisticText}>Total: {total}</p>
          <p className={css.statisticText}>Positive feedback: {positivePercentage}%</p>
        </>
      ) : (
        <NotificationMessage message="There is no feedback" />
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
}