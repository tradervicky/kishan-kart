import React from 'react';

const InputBox = ({
  type,
  placeholder,
  label,
  value,
  customStyle,
  labelStyle,
  onChange,
  onBlur,
  divStyle,
  name,
  error,
  touched
}) => {
  return (
    <div className={`flex flex-col gap-2 w-full ${divStyle}`}>
      <label htmlFor={name} className={`pl-2 text-lg font-medium text-white ${labelStyle}`}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={type === 'file' ? undefined : value}
        className={`px-4 py-2 bg-transparent border-b bg-dark-400 text-white ${customStyle}`}
        onChange={onChange}
        onBlur={onBlur}
      />
      {touched && error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default InputBox;
