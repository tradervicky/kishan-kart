import React from 'react'

const InputBox = ({type, placeholder, label,  customStyle, labelStyle, onChange, divStyle, name}) => {
  return (
    <div className={`flex flex-col gap-2  w-full ${divStyle}`}>
      <label htmlFor="" className={` pl-2 text-lg font-medium text-white ${labelStyle}`}>{label}</label>
      <input type={type} name={name} placeholder={placeholder} className={`px-4 py-2  bg-transparent border-b-2 bg-dark-400 ${customStyle}`} onChange={onChange} />
    </div>
  )
}

export default InputBox;