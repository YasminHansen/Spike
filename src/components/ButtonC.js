import PropTypes from "prop-types";
import React from "react";

function ButtonC({ title, children }) {
  return (
    <div>
      <div>
        <button>{title}</button>
        {children}
      </div>
    </div>
  );
}

ButtonC.defaultProps = {
  title: "",
  children: null,
};

ButtonC.propTypes = {
  title: PropTypes.string,
  children: PropTypes.shape({}),
};

export default ButtonC;
