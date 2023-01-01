import { FC } from 'react';

interface FormErrorProps {
  errorText: string;
  ariaErrorId?: string;
}
const FormError: FC<FormErrorProps> = ({ errorText, ariaErrorId }) => (
  <span id={ariaErrorId} className="text-danger">
    {errorText}
  </span>
);
export default FormError;
