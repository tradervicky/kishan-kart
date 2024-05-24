import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { API_URLS } from '../../api/auth';
import { makeApiRequest } from '../../api/function';
import InputBox from '../input';

const AddUser = () => {
  const { id } = useParams();
  const [isUpdate, setIsUpdate] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    mobile: Yup.string().required('Mobile number is required'),
    password: Yup.string().required('Password is required'),
    dateOfBirth: Yup.string().required('Date of birth is required'),
    vendorCode: Yup.string().required('Vendor code is required'),
    gstIn: Yup.string().required('GST number is required'),
    address: Yup.string().required('Address is required'),
    panCard: Yup.mixed().nullable(),
    aadharCard: Yup.mixed().nullable(),
    businessDoc: Yup.mixed().nullable(),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      password: '',
      dateOfBirth: '',
      vendorCode: '',
      gstIn: '',
      address: '',
      panCard: null,
      aadharCard: null,
      businessDoc: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
      });

      try {
        const response = await makeApiRequest(
          isUpdate ? 'PUT' : 'POST',
          isUpdate ? `${API_URLS.UPDATE_VENDOR}${id}` : API_URLS.ADD_VENDOR,
          formData,
          null,
          { 'Content-Type': 'multipart/form-data' }
        );
        console.log(response);
      } catch (error) {
        console.error('Error:', error);
      }
    },
  });

  useEffect(() => {
    if (id) {
      const fetchUpdateVendor = async () => {
        try {
          const response = await makeApiRequest('GET', `${API_URLS.GET_VENDOR_BY_ID}${id}`);
          formik.setValues({
            name: response.name,
            email: response.email,
            mobile: response.mobile,
            password: response.password,
            dateOfBirth: response.dateOfBirth,
            vendorCode: response.vendorCode,
            gstIn: response.gstIn,
            address: response.address,
            panCard: null,
            aadharCard: null,
            businessDoc: null,
          });
          setIsUpdate(true);
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      };

      fetchUpdateVendor();
    }
  }, [id]);

  return (
    <div className='p-6 border-red-500'>
      <h3 className='underline text-xl font-medium text-green-300'>{!isUpdate ? 'Create' : 'Update'} Vendor</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className='flex gap-4 w-[100%] mt-2'>
          <InputBox
            label='Vendor Code'
            type='text'
            name='vendorCode'
            value={formik.values.vendorCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Enter vendor code'
            customStyle='outline-none text-lg '
            labelStyle='text-blue-500'
            error={formik.errors.vendorCode}
            touched={formik.touched.vendorCode}
          />
          <InputBox
            label='Email'
            type='email'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Enter email'
            customStyle='outline-none text-lg '
            error={formik.errors.email}
            touched={formik.touched.email}
          />
        </div>
        <div className='flex gap-4 w-[100%] mt-2'>
          <InputBox
            label='GST'
            placeholder='Enter vendor GST number'
            customStyle='outline-none text-lg '
            name='gstIn'
            value={formik.values.gstIn}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            labelStyle='text-blue-500'
            error={formik.errors.gstIn}
            touched={formik.touched.gstIn}
          />
          <InputBox
            label='Mobile number'
            type='text'
            placeholder='Enter mobile number'
            name='mobile'
            value={formik.values.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            customStyle='outline-none text-lg'
            error={formik.errors.mobile}
            touched={formik.touched.mobile}
          />
        </div>
        <div className='flex gap-4 w-[100%] mt-2'>
          <InputBox
            label='Full name'
            placeholder='Enter full name'
            name='name'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            customStyle='outline-none text-lg '
            error={formik.errors.name}
            touched={formik.touched.name}
          />
          <InputBox
            label='Address'
            type='text'
            placeholder='Enter address'
            name='address'
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            customStyle='outline-none text-lg'
            error={formik.errors.address}
            touched={formik.touched.address}
          />
        </div>
        <div className='flex gap-4 w-[100%] mt-2'>
          <InputBox
            label='Date of birth'
            placeholder='dd/MM/yyyy'
            name='dateOfBirth'
            value={formik.values.dateOfBirth}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            customStyle='outline-none text-lg '
            error={formik.errors.dateOfBirth}
            touched={formik.touched.dateOfBirth}
          />
          <InputBox
            label='Password'
            type='password'
            placeholder='Enter password'
            name='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            customStyle='outline-none text-lg'
            error={formik.errors.password}
            touched={formik.touched.password}
          />
        </div>
        {!isUpdate && (
          <div className='flex gap-4 w-[100%] mt-4'>
            <InputBox
              label='Upload Pan card'
              type='file'
              name='panCard'
              onChange={(event) => formik.setFieldValue('panCard', event.target.files[0])}
              customStyle='outline-none text-lg text-white '
              error={formik.errors.panCard}
              touched={formik.touched.panCard}
            />
            <InputBox
              label='Upload Aadhar card'
              type='file'
              name='aadharCard'
              onChange={(event) => formik.setFieldValue('aadharCard', event.target.files[0])}
              customStyle='outline-none text-lg text-white '
              error={formik.errors.aadharCard}
              touched={formik.touched.aadharCard}
            />
            <InputBox
              label='Upload Business card'
              type='file'
              name='businessDoc'
              onChange={(event) => formik.setFieldValue('businessDoc', event.target.files[0])}
              customStyle='outline-none text-lg text-white'
              error={formik.errors.businessDoc}
              touched={formik.touched.businessDoc}
            />
          </div>
        )}
        <div className='flex justify-end pr-4 mt-4'>
          <button
            type='submit'
            className='px-4 py-2 rounded text-lg bg-green-300 outline-none hover:bg-green-500 duration-300 ease-in-out'
          >
            {!isUpdate ? 'Submit' : 'Update'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
