import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { API_URLS } from '../../api/auth';
import { makeApiRequest } from '../../api/function';
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
  const { id } = useParams();
  const [isUpdate, setIsUpdate] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setVendorDetails({
        ...vendorDetails,
        [name]: files[0] 
      });
    } else {
      setVendorDetails({
        ...vendorDetails,
        [name]: value
      });
    }
  };
  const fetchUdateVendor = async () => {
    try {
      const response = await makeApiRequest("GET", `${API_URLS.GET_VENDOR_BY_ID}${id}`);
      console.log(response);
      setVendorDetails({
        name: response.name,
        email: response.email,
        mobile: response.mobile,
        password: response.password,
        dateOfBirth: response.dateOfBirth,
        vendorCode : response.vendorCode,
        gstIn: response.gstIn,
        address: response.address,
      });
      setIsUpdate(true);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  }; 

  useEffect(() => {
    if (id) {
      fetchUdateVendor();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    const formData = new FormData();

    formData.append("name", vendorDetails.name);
    formData.append("email", vendorDetails.email);
    formData.append("mobile", vendorDetails.mobile);
    formData.append("password", vendorDetails.password);
    formData.append("dateOfBirth", vendorDetails.dateOfBirth);
    formData.append("vendorCode", vendorDetails.vendorCode);
    formData.append("gstIn", vendorDetails.gstIn);
    formData.append("address", vendorDetails.address);
    formData.append("panCard", vendorDetails.panCard);
    formData.append("aadharCard", vendorDetails.aadharCard);
    formData.append("businessDoc", vendorDetails.businessDoc);
    try {
     const response = await makeApiRequest("POST", API_URLS.ADD_VENDOR, formData, null ,  {
      'Content-Type': 'multipart/form-data',
    })
     console.log(response)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleUpdate = async ()=>{
    const formData = new FormData();

    formData.append("name", vendorDetails.name);
    formData.append("email", vendorDetails.email);
    formData.append("mobile", vendorDetails.mobile);
    formData.append("password", vendorDetails.password);
    formData.append("dateOfBirth", vendorDetails.dateOfBirth);
    formData.append("address", vendorDetails.address);
    formData.append("vendorCode", vendorDetails.vendorCode);
    formData.append("gstIn", vendorDetails.gstIn);
    if (vendorDetails.panCard) {
      formData.append("panCard", vendorDetails.panCard);
    }
    if (vendorDetails.aadharCard) {
      formData.append("aadharCard", vendorDetails.aadharCard);
    }
    if (vendorDetails.businessDoc) {
      formData.append("businessDoc", vendorDetails.businessDoc);
    }

    try {
      const response = await makeApiRequest("PUT", `${API_URLS.UPDATE_VENDOR}${id}`, formData, null, {
        'Content-Type': 'multipart/form-data',
      });
      console.log(response);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

    
 
  return (
    <div className='p-6  border-red-500'>
        <h3 className='underline text-xl font-medium text-green-300'>{!isUpdate ? "Create" : "Update"} Vendor</h3>
        <div className='flex gap-4 w-[100%] mt-2'>
        <InputBox label="Vendor Code" type={`text`} name="vendorCode" value={vendorDetails.vendorCode} onChange={handleChange} placeholder="Enter vendor code" customStyle="outline-none text-lg " labelStyle="text-blue-500"/>
        <InputBox label="Email" type="email" name="email" value={vendorDetails.email} onChange={handleChange}placeholder="Enter email"  customStyle="outline-none text-lg "/>
        </div>
        <div className='flex gap-4 w-[100%] mt-2'>
        <InputBox label="GST" placeholder="Enter vendor GST number" customStyle="outline-none text-lg " name="gstIn" value={vendorDetails.gstIn} onChange={handleChange}labelStyle="text-blue-500"/>
        <InputBox label="Mobile number" type={`text`} placeholder="Enter mobile number" name="mobile" value={vendorDetails.mobile} onChange={handleChange}customStyle="outline-none text-lg"/>
        </div>
        <div className='flex gap-4 w-[100%] mt-2'>
        <InputBox label="Full name" placeholder="Enter full name" name="name" value={vendorDetails.name} onChange={handleChange} customStyle="outline-none text-lg " />
        <InputBox label="Address" type={`text`} placeholder="Enter address" name="address" value={vendorDetails.address} onChange={handleChange}customStyle="outline-none text-lg"/>
        </div>
        <div className='flex gap-4 w-[100%] mt-2'>
        <InputBox label="Date of birth" placeholder="dd/MM/yyyy" name="dateOfBirth" value={vendorDetails.dateOfBirth} onChange={handleChange} customStyle="outline-none text-lg " />
        <InputBox label="Password" type={`password`} placeholder="Enter password" name="password" value={vendorDetails.password} onChange={handleChange}customStyle="outline-none text-lg"/>
        </div>
        {!isUpdate && 
        <div className='flex gap-4 w-[100%] mt-4'>
        <InputBox label="Upload Pan card" type={`file`} name="panCard" onChange={handleChange} customStyle="outline-none text-lg text-white " />
        <InputBox label="Upload Aadhar card" type={`file`} 
        name="aadharCard" onChange={handleChange} customStyle="outline-none text-lg text-white " />
        <InputBox label="Upload Busieness card" type={`file`} name="businessDoc" onChange={handleChange}  customStyle="outline-none text-lg text-white" />
        </div>}
        <div className='flex justify-end pr-4 mt-4'>
            <button onClick={!isUpdate ? handleSubmit : handleUpdate} className='px-4 py-2 rounded text-lg bg-green-300 outline-none hover:bg-green-500 duration-300 ease-in-out'>{!isUpdate ? "Submit" : "Update"}</button>
        </div>
    </div>
  )
}

export default AddUser