import { FC } from 'react';
import FormError from './FormError';
import FormLabel from './FormLabel';

interface InputProps {
  inputIdentifier: string;
  type?: string;
  required?: boolean;
  labelText: string;
  errorText?: string;
  showLabel?: boolean;
}
const Input: FC<InputProps> = ({
  inputIdentifier,
  type,
  required,
  labelText,
  showLabel,
  errorText,
}) => (
  <div className="input-container">
    {showLabel && (
      <FormLabel labelText={labelText} inputIdentifier={inputIdentifier} />
    )}
    {required && <span className="text-danger">*</span>}
    <input
      type={type || 'text'}
      name={inputIdentifier}
      id={inputIdentifier}
      aria-invalid={errorText ? true : undefined}
      required={required}
      aria-errormessage={inputIdentifier || undefined}
      aria-label={!showLabel ? labelText : undefined}
    />
    {errorText && (
      <FormError errorText={errorText} ariaErrorId={inputIdentifier} />
    )}
  </div>
);
export default Input;
