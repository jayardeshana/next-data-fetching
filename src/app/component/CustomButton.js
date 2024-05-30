import '../component/CustomButton.module.css';
import styles from './CustomButton.module.css';
import PropTypes from 'prop-types';
const CustomButton = ({ variant, children, ...props }) => {
  const className = `${styles.button} ${styles[variant]}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']).isRequired,
  children: PropTypes.node.isRequired,
};

export default CustomButton;
