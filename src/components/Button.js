import React from 'react';
import classNames from 'classnames';

// size: large, medium, small. default: medium
// color: blue, pink, gray. default: blue
function Button({ children, size, color, outline, fullWidth, ...rest }) {
  console.log(rest);
  return (
    <button
      className={classNames('Button', size, color, { outline, fullWidth })}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: 'medium',
  color: 'blue',
};

export default Button;
