import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import './vendor.css'
import UserButton from '../../components/userButton';
import { CiViewList, CiEdit } from "react-icons/ci";
import { LiaIdCardSolid } from "react-icons/lia";
import { FiShoppingCart, FiPlus } from "react-icons/fi";
import { makeApiRequest } from '../../api/function';
import { API_URLS } from '../../api/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Vendors = () => {
  const [vendors, setVendors] = useState([])
  const navigate = useNavigate()
  const fetchVendors = async ()=>{
    try {
      const response = await makeApiRequest("GET", API_URLS.GET_VENDOR_LIST)
      console.log(response)
      setVendors(response)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(()=>{
    fetchVendors()
  },[])

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
      editable: true,
    },
    {
      field: 'mobile',
      headerName: 'Mobile No',
      width: 150,
      editable: true,
    },
    
    {
      field: 'address',
      headerName: 'Address',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 380,
    },
    {
      field: 'action',
      headerName: 'Action',
      editable: true,
      flex: 1,
      renderCell: (params) => (
        <div className="flex gap-1 text-sm font-semibold items-center">
          <UserButton icon={<CiViewList size={20}/>} onClick={()=>navigate(`/vendors/${params.row.userId}`)} title="Details" customStyle="text-green-500"/>
          <UserButton icon={<CiEdit size={20}/>} title="Edit" customStyle="text-blue-300 px-4"/>
        </div>
      )
    },
  ];
  const rows = vendors.map((data,index)=>({id: index+1, userId:data._id, name : data.name, email: data.email, mobile: data.mobile, address : data.address}))
  // const rows = [
  //   { id: 1, name: 'Vicky kumar Gupta', email: 'vickygupta031@gmail.com', mobile: 7631648106, address : 'Vill Mathiya, Siwan' },
  // ];
  return (
    <div className='mx-6 mt-3'>
      <div className='flex justify-between '>
        <div>
        <input type="text" placeholder='Search By Name' className='px-4 py-2 rounded-lg outline-none' />
        </div>
        <button className='border px-4 py-2 rounded-lg text-white mb-2' onClick={()=>navigate('/vendors/add-vendor')}>
        <FiPlus size={24}/>
        </button>
      </div>
    <Box sx={{ height: 570, width: '100%' }} >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pmobileSize: 5,
            },
          },
        }}
        pmobileSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
    </div>
  )
}

export default Vendors