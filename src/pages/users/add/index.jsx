import React, { useState } from 'react';
import { API_URLS } from '../../../api/auth';
import { makeApiRequest } from '../../../api/function';
import InputBox from '../../../components/input';

const AddCustomer = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    panCard: null,
    aadharCard: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setUserDetails({
        ...userDetails,
        [name]: files[0] // Store the file object directly
      });
    } else {
      setUserDetails({
        ...userDetails,
        [name]: value
      });
    }
  };

  
  console.log(userDetails)


  const handleSubmit = async (e) => {
    const formData = new FormData();

    formData.append("name", userDetails.name);
    formData.append("email", userDetails.email);
    formData.append("mobile", userDetails.mobile);
    formData.append("password", userDetails.password);
    formData.append("dateOfBirth", userDetails.dateOfBirth);
    formData.append("gender", userDetails.gender);
    formData.append("address", userDetails.address);
    formData.append("panCard", userDetails.panCard);
    formData.append("aadharCard", userDetails.aadharCard);

    try {
     const response = await makeApiRequest("POST", API_URLS.ADD_USER, formData, null ,  {
      'Content-Type': 'multipart/form-data',
    })
     console.log(response)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='p-6 border-red-500'>
      <h3 className='underline text-xl font-medium text-green-300'>Create User</h3>
      <div className='flex gap-4 w-[100%] mt-2'>
        <InputBox label="Full name" name="name" value={userDetails.name} onChange={handleChange} placeholder="Enter full name" customStyle="outline-none text-lg" />
        <InputBox label="Email" type="email" name="email" value={userDetails.email} onChange={handleChange} placeholder="Enter email" customStyle="outline-none text-lg" />
      </div>
      <div className='flex gap-4 w-[100%] mt-2'>
        <InputBox label="Mobile number" name="mobile" value={userDetails.mobile} onChange={handleChange} type="text" placeholder="Enter mobile number" customStyle="outline-none text-lg" />
        <InputBox label="Password" type="password" value={userDetails.password} onChange={handleChange} name="password" placeholder="Enter password" customStyle="outline-none text-lg" />
      </div>
      <div className='flex gap-4 w-[100%] mt-2'></div>
      <div className='flex gap-4 w-[100%] mt-2 items-center'>
        <InputBox label="Date of birth" placeholder="dd/MM/yyyy" value={userDetails.dateOfBirth} onChange={handleChange} name="dateOfBirth" customStyle="outline-none text-lg" />
        <div className='w-full flex flex-col gap-2'>
          <label htmlFor="gender" className='text-lg font-medium text-white'>Select Gender</label>
          <select name="gender" id="gender" value={userDetails.gender} onChange={handleChange} className='py-2 border-b bg-dark-400 text-lg text-white outline-none'>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
      </div>
      <div className='flex gap-4 w-[100%] mt-2'>
        <InputBox label="Address" placeholder="Enter address" value={userDetails.address} onChange={handleChange} name="address" customStyle="outline-none text-lg" />
      </div>
      <div className='flex gap-4 w-[100%] mt-4'>
        <InputBox label="Upload Pan card" type="file" name="panCard" onChange={handleChange} customStyle="outline-none text-lg text-white" />
        <InputBox label="Upload Aadhar card" type="file" name="aadharCard" onChange={handleChange} customStyle="outline-none text-lg text-white" />
      </div>
      <div className='flex justify-end pr-4 mt-4'>
        <button className='px-4 py-2 rounded text-lg bg-green-300 outline-none hover:bg-green-500 duration-300 ease-in-out' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default AddCustomer;
