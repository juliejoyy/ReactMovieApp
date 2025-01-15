import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text}){
    return <button className={styles.title}>{text}</button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired, // Ensures the prop is a string and not null or undefined
};
export default Button;