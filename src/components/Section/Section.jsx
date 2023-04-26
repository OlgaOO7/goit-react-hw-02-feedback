import PropTypes from "prop-types";
import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div>
      {title && (
        <h2 className={css.sectionTitle}>
          {title}
          {children}
        </h2>
      )}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

