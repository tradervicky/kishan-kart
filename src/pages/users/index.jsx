import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import './users.css'
import UserButton from '../../components/userButton';
import { CiViewList, CiEdit } from "react-icons/ci";
import { LiaIdCardSolid } from "react-icons/lia";
import { FiShoppingCart, FiPlus } from "react-icons/fi";
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'created',
    headerName: 'Created At',
    width: 150,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 200,
    editable: true,
  },
  {
    field: 'mobile',
    headerName: 'Mobile',
    width: 110,
    editable: true,
  },
  
  {
    field: 'email',
    headerName: 'Email',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 250,
  },
  {
    field: 'action',
    headerName: 'Action',
    editable: true,
    flex: 1,
    renderCell: (params) => (
      <div className="flex gap-1 text-sm font-semibold items-center justify-center">
        
        <UserButton icon={<CiViewList size={20}/>} title="Details" customStyle="text-green-500"/>
        <UserButton icon={<LiaIdCardSolid size={20}/>} title="Cards" customStyle="text-[#DDA0DD]"/>
        <UserButton icon={<CiViewList size={20} />} title="Get Invoice" customStyle="text-[#6699CC]"/>
        <UserButton icon={<CiEdit size={20}/>} title="Edit" customStyle="text-blue-300"/>
         
        
       
      </div>
    )
  },
];
const rows = [
  { id: 1, created: '25/12/2023', name: 'Vicky Kumar Gupta', mobile: 7631648106, email : 'vickygupta031@test.in', action: "update delete" },

];

const USers = () => {
  return (
    <div className='mx-6 mt-3'>
      <div className='flex justify-between '>
        <div>
        <input type="text" placeholder='Search By Name' className='px-4 py-2 rounded-lg outline-none' />
        </div>
        <button className='border px-4 py-2 rounded-lg text-white mb-2'>
        <FiPlus size={24}/>
        </button>
      </div>
    <Box sx={{ height: 400, width: '100%' }} >
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

export default USers