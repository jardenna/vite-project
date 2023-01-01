import { FC } from 'react';

interface FormLabelProps {
  labelText: string;
  inputIdentifier: string;
}
const FormLabel: FC<FormLabelProps> = ({ labelText, inputIdentifier }) => (
  <label htmlFor={inputIdentifier}>{labelText}</label>
);
export default FormLabel;
