import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import '../users/users.css'
import UserButton from '../../components/userButton';
import { CiViewList, CiEdit } from "react-icons/ci";
import { LiaIdCardSolid } from "react-icons/lia";
import { FiShoppingCart, FiPlus } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { makeApiRequest } from '../../api/function';
import { API_URLS } from '../../api/auth';
import { hideLoader, showLoader } from '../../components/loader';

const Users = () => {
const navigate = useNavigate()

const [users, setUsers] = useState([])
const [searchTerm, setSearchTerm] = useState('');
// method, url, data = null, params = null
const fetchUsers = async()=>{
  showLoader()
  try {
    const response = await makeApiRequest("GET", API_URLS.VIEW_ALL_USER)
    setUsers(response)
    hideLoader()
    // console.log(response)
  } catch (error) {
    console.error(error)
  }
}
useEffect(()=>{
  fetchUsers()
},[])
const handleSearch = (e) => {
  setSearchTerm(e.target.value);
};
const filteredUsers = users.filter(user =>
  user.name.toLowerCase().includes(searchTerm.toLowerCase())
);


// console.log(users)
const formatCreatedAt = (createdAt) => {
  const date = new Date(createdAt);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const day = String(date.getDate()).padStart(2, '0');
  return `${day}/${month}/${year}`;
};
// const rows = users && users.map((data, index)=> ({id:index+1, userId:data._id, created: formatCreatedAt(data.createdAt), name : data.name, mobile: data.mobile, email: data.email}))

const rows = filteredUsers.map((data, index)=>({
  id:index+1, userId:data._id, created: formatCreatedAt(data.createdAt), name : data.name, mobile: data.mobile, email: data.email
}))
// { id: 1, created: '25/12/2023', name: 'Vicky Kumar Gupta', mobile: 7631648106, email : 'vickygupta031@test.in', action: "update delete" },
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'created',
    headerName: 'Created At',
    width: 150,
    editable: false,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 200,
    editable: false,
  },
  {
    field: 'mobile',
    headerName: 'Mobile',
    width: 150,
    editable: false,
  },
  
  {
    field: 'email',
    headerName: 'Email',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 300,
  },
  {
    field: 'action',
    headerName: 'Action',
    editable: false,
    flex: 1,
    renderCell: (params) => (
      <div className="flex gap-1 text-sm font-semibold items-center">   
        <UserButton onClick={()=>handleClick(`user-details/${params.row.userId}`)} icon={<CiViewList size={20}/>} title="Details" customStyle="text-green-500"/>
        <UserButton onClick={()=>handleClick(`/users/add-cards/${params.row.userId}`)} icon={<LiaIdCardSolid size={20}/>} title="Cards" customStyle="text-[#DDA0DD]"/>
        <UserButton onClick={()=>handleClick('/users/get-invoice/1')} icon={<CiViewList size={20} />} title="Get Invoice" customStyle="text-[#6699CC]"/> 
      </div>
    )
  },
];
// const rows = [
//   { id: 1, created: '25/12/2023', name: 'Vicky Kumar Gupta', mobile: 7631648106, email : 'vickygupta031@test.in', action: "update delete" },

// ];

const handleClick = (route)=>{
  console.log("clicked")
  navigate(route)  
}


  return (
    <div className='mx-6 mt-3'>
      <div className='flex justify-between '>
        <div>
        <input type="text" placeholder='Search By Name' className='px-4 py-2 rounded-lg outline-none' value={searchTerm}
            onChange={handleSearch} />
        </div>
        <button className='border px-4 py-2 rounded-lg text-white mb-2' onClick={()=>navigate('/users/add-user')} >
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

export default Users