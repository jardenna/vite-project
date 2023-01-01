/* eslint-disable react/button-has-type */

import { FC } from 'react';

interface ButtonProps {
  text: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  ariaLabel?: string;
}

const Button: FC<ButtonProps> = ({ text, type = 'button', ariaLabel }) => (
  <button type={type} aria-label={ariaLabel}>
    {text}
  </button>
);

export default Button;
