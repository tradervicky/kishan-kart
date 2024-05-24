import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URLS } from '../../../api/auth';
import { makeApiRequest } from '../../../api/function';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputBox from '../../../components/input';

const AddCustomer = () => {
  const { id } = useParams();
  const [isUpdate, setIsUpdate] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    mobile: Yup.string().required('Mobile number is required'),
    password: Yup.string().required('Password is required'),
    dateOfBirth: Yup.string().required('Date of birth is required'),
    gender: Yup.string().required('Gender is required'),
    address: Yup.string().required('Address is required'),
    panCard: Yup.mixed().nullable(),
    aadharCard: Yup.mixed().nullable(),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      password: '',
      dateOfBirth: '',
      gender: '',
      address: '',
      panCard: null,
      aadharCard: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      // Handle form submission logic here
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
      });

      try {
        
          const response = await makeApiRequest(
            isUpdate ? 'PUT' : 'POST', 
            isUpdate ? `${API_URLS.UPDATE_USER}${id}`: API_URLS.ADD_USER,
             formData,
              null, {
            'Content-Type': 'multipart/form-data',
          });
          console.log(response);
        } 
        //   const response = await makeApiRequest('POST', API_URLS.ADD_USER, formData, null, {
        //     'Content-Type': 'multipart/form-data',
        //   });
        //   console.log(response);
        // }
      // }
       catch (error) {
        console.error('Error:', error);
      }
    },
  });

  useEffect(() => {
    if (id) {
      const fetchUpdateCustomer = async () => {
        try {
          const response = await makeApiRequest('GET', `${API_URLS.VIEW_USER_BY_ID}${id}`);
          // console.log(response);
          formik.setValues({
            name: response.name,
            email: response.email,
            mobile: response.mobile,
            password: response.password,
            dateOfBirth: response.dateOfBirth,
            gender: response.gender,
            address: response.address,
          });
          setIsUpdate(true);
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      };

      fetchUpdateCustomer();
    }
  }, [id]);

  return (
    <div className='p-6 border-red-500'>
      <h3 className='underline text-xl font-medium text-green-300'>{isUpdate ? 'Update User' : 'Create User'}</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className='flex gap-4 w-[100%] mt-2'>
          <InputBox
            label='Full name'
            name='name'
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Enter full name'
            customStyle='outline-none text-lg'
            error={formik.errors.name}
            touched={formik.touched.name }
          />
          <InputBox
            label='Email'
            type='email'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Enter email'
            customStyle='outline-none text-lg'
            error={formik.errors.email}
            touched={formik.touched.email}
          />
        </div>
        <div className='flex gap-4 w-[100%] mt-2'>
          <InputBox
            label='Mobile number'
            name='mobile'
            value={formik.values.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type='text'
            placeholder='Enter mobile number'
            customStyle='outline-none text-lg'
            error={  formik.errors.mobile}
            touched={formik.touched.mobile}
          />
          <InputBox
            label='Password'
            type='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name='password'
            placeholder='Enter password'
            customStyle='outline-none text-lg'
            error={ formik.errors.password}
            touched={formik.touched.password}
          />
        </div>
        <div className='flex gap-4 w-[100%] mt-2'></div>
        <div className='flex gap-4 w-[100%] mt-2 items-center'>
          <InputBox
            label='Date of birth'
            placeholder='dd/MM/yyyy'
            value={formik.values.dateOfBirth}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name='dateOfBirth'
            type="text"
            customStyle='outline-none text-lg'
            error={formik.errors.dateOfBirth}
            touched={formik.touched.dateOfBirth}
          />
          <div className='w-full flex flex-col gap-2'>
            <label htmlFor='gender' className='text-lg font-medium text-white'>
              Select Gender
            </label>
            <select
  name='gender'
  id='gender'
  value={formik.values.gender}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  className='py-2 border-b bg-dark-400 text-lg text-white outline-none'
>
  <option value=''>Select Gender</option>
  <option value='male'>Male</option>
  <option value='female'>Female</option>
  <option value='others'>Others</option>
</select>
{formik.errors.gender && formik.touched.gender && (
  <div className="text-red-500">{formik.errors.gender}</div>
)}
          </div>
        </div>
        <div className='flex gap-4 w-[100%] mt-2'>
          <InputBox
            label='Address'
            placeholder='Enter address'
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name='address'
            customStyle='outline-none text-lg'
            error={formik.errors.address}
            touched={formik.touched.address}
          />
        </div>
        {!isUpdate && (
          <div className='flex gap-4 w-[100%] mt-4'>
            <InputBox
              label='Upload Pan card'
              type='file'
              name='panCard'
              onChange={(e) => formik.setFieldValue('panCard', e.target.files[0])}
              customStyle='outline-none text-lg text-white'
            />
            <InputBox
              label='Upload Aadhar card'
              type='file'
              name='aadharCard'
              onChange={(e) => formik.setFieldValue('aadharCard', e.target.files[0])}
              customStyle='outline-none text-lg text-white'
            />
          </div>
        )}
        <div className='flex justify-end pr-4 mt-4'>
          <button
            type='submit'
            className='px-4 py-2 rounded text-lg bg-green-300 outline-none hover:bg-green-500 duration-300 ease-in-out'
          >
            {isUpdate ? 'Update' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCustomer;
