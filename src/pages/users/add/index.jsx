import React from 'react'
import InputBox from '../../../components/input'


const AddCustomer = () => {
    // panCard: { type: String },
    // aadharCard: { type: String },
    // isBlocked: { type: Boolean, default: false }, 
    // createdAt: { type: Date, default: Date.now }, 
    // updatedAt: { type: Date, default: Date.now }, 
    // createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // isEmailVerified: { type: Boolean, default: false },
 
  return (
    <div className='p-6  border-red-500'>
        <h3 className='underline text-xl font-medium text-green-300'>Create User</h3>
        <div className='flex gap-4 w-[100%] mt-2'>
        <InputBox label="Full name" placeholder="Enter full name" customStyle="outline-none text-lg " />
        <InputBox label="Email" type="email" placeholder="Enter email"  customStyle="outline-none text-lg "/>
        </div>
        <div className='flex gap-4 w-[100%] mt-2'>
        <InputBox label="Mobile number" type={`text`} placeholder="Enter mobile number" customStyle="outline-none text-lg"/>
        <InputBox label="Password" type={`password`} placeholder="Enter password" customStyle="outline-none text-lg"/>
        </div>
        <div className='flex gap-4 w-[100%] mt-2'>
        </div>
        <div className='flex gap-4 w-[100%] mt-2 items-center'>
        <InputBox label="Date of birth" placeholder="dd/MM/yyyy" customStyle="outline-none text-lg  " />
        <div className='w-full flex flex-col gap-2'>
            <label htmlFor="" className='text-lg font-medium text-white'>Select Gender</label>
        <select name="" id="" className='py-2 border-b-2 bg-dark-400 text-lg text-white outline-none'>
            <option value="" >Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
        </select>
        </div>
        </div>
        <div className='flex gap-4 w-[100%] mt-2'>
        <InputBox label="Address" placeholder="Enter address" customStyle="outline-none text-lg " />
        
        </div>
        <div className='flex gap-4 w-[100%] mt-4'>
        <InputBox label="Upload Pan card" type={`file`} customStyle="outline-none text-lg text-white " />
        <InputBox label="Upload Aadhar card" type={`file`} customStyle="outline-none text-lg text-white " />
        </div>
        <div className='flex justify-end pr-4 mt-4'>
            <button className='px-4 py-2 rounded text-lg bg-green-300 outline-none hover:bg-green-500 duration-300 ease-in-out'>Submit</button>
        </div>
    </div>
  )
}

export default AddCustomer