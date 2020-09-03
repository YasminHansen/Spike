import PropTypes from "prop-types";
import React from "react";

function Button({ title, children }) {
  return (
    <div>
      <div>
        <button>{title}</button>
        {children}
      </div>
    </div>
  );
}

Button.defaultProps = {
  title: "",
  children: null,
};

Button.propTypes = {
  title: PropTypes.string,
  children: PropTypes.shape({}),
};

export default Button;