import React from 'react';
import classNames from 'classnames';

// size: large, medium, small. default: medium
// color: blue, pink, gray. default: blue
function Button({ children, size, color }) {
  const className = classNames('Button', size, color);
  return <button className={className}>{children}</button>;
}

Button.defaultProps = {
  size: 'medium',
  color: 'blue',
};

export default Button;
