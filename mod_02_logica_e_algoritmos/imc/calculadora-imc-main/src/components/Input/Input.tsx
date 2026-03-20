
import { ChangeEvent, KeyboardEvent } from "react";

type Props = {
  type: string,
  placeholder?: string,
  value: number | string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  onKeyUp: (e: KeyboardEvent<HTMLInputElement>) => void,
  className?: string,
}

export const Input = ({ type, placeholder, value, onChange, onKeyUp, className } : Props) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        className={className}
      />
    </>
  );
};
