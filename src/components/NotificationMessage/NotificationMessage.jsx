import PropTypes from "prop-types";
import css from "./NotificationMessage.module.css";

export const NotificationMessage = ({message}) => {
  return (
    <p className={css.notificationMessage}>{message}</p>
  )
}

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
}

