import React from 'react';
import classNames from 'classnames';

// size: large, medium, small. default: medium
// color: blue, pink, gray. default: blue
function Button({ children, size, color, outline, fullWidth }) {
  const className = classNames('Button', size, color, { outline, fullWidth });
  return <button className={className}>{children}</button>;
}

Button.defaultProps = {
  size: 'medium',
  color: 'blue',
};

export default Button;
