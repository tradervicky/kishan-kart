import React from 'react'
import InputBox from '../input'

const AddUser = () => {
  const [vendorDetails, setVendorDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    dateOfBirth: "",
    vendorCode : "",
    gstIn: "",
    address: "",
    panCard: null,
    aadharCard: null,
    businessDoc: null,
  });

    
 
  return (
    <div className='p-6  border-red-500'>
        <h3 className='underline text-xl font-medium text-green-300'>Create Vendor</h3>
        <div className='flex gap-4 w-[100%] mt-2'>
        <InputBox label="Vendor Code" type={`text`} placeholder="Enter vendor code" customStyle="outline-none text-lg " labelStyle="text-blue-500"/>
        <InputBox label="Email" type="email" placeholder="Enter email"  customStyle="outline-none text-lg "/>
        </div>
        <div className='flex gap-4 w-[100%] mt-2'>
        <InputBox label="GST" placeholder="Enter vendor GST number" customStyle="outline-none text-lg " labelStyle="text-blue-500"/>
        <InputBox label="Mobile number" type={`text`} placeholder="Enter mobile number" customStyle="outline-none text-lg"/>
        </div>
        <div className='flex gap-4 w-[100%] mt-2'>
        <InputBox label="Full name" placeholder="Enter full name" customStyle="outline-none text-lg " />
        <InputBox label="Address" type={`text`} placeholder="Enter address" customStyle="outline-none text-lg"/>
        </div>
        <div className='flex gap-4 w-[100%] mt-2'>
        <InputBox label="Date of birth" placeholder="dd/MM/yyyy" customStyle="outline-none text-lg " />
        <InputBox label="Password" type={`password`} placeholder="Enter password" customStyle="outline-none text-lg"/>
        </div>
        <div className='flex gap-4 w-[100%] mt-4'>
        <InputBox label="Upload Pan card" type={`file`} customStyle="outline-none text-lg text-white " />
        <InputBox label="Upload Aadhar card" type={`file`} customStyle="outline-none text-lg text-white " />
        <InputBox label="Upload Busieness card" type={`file`} customStyle="outline-none text-lg text-white" />
        </div>
        <div className='flex justify-end pr-4 mt-4'>
            <button className='px-4 py-2 rounded text-lg bg-green-300 outline-none hover:bg-green-500 duration-300 ease-in-out'>Submit</button>
        </div>
    </div>
  )
}

export default AddUser