import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import UserButton from '../../components/userButton';

const columns = [
  { field: 'id', headerName: 'ID', width: 1 },
  {
    field: 'created',
    headerName: 'Created At',
    width: 150,
    editable: false,
  },
  {
    field: 'cardType',
    headerName: 'Card Type',
    width: 150,
    editable: false,
  },
  {
    field: 'cardNo',
    headerName: 'Card No',
    width: 300,
    editable: false,
  },
  
  {
    field: 'expiry',
    headerName: 'Expiry Data',
    sortable: false,
    width: 150,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    description: 'This column has a value getter and is not sortable.',
    width: 200,
  },
  {
    field: 'active',
    headerName: 'Active',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 100,
  },
  {
    field: 'cardStatus',
    headerName: 'Card Status',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    flex: 1,
    width: 250,
    renderCell: (params) => (
      <UserButton title="Deactivate" customStyle="text-red-400 text-sm"/>
    )
  },
  
];
const rows = [
  {id: 125,  created: '25/12/2023', cardType: 'PLATINUM', cardNo: 2345202366556397, expiry : '25/12/2030', amount: "1000000", active:"YES", },

];

const Cards = () => {
  return (
    <div className='mx-6 mt-3'>
     
    <Box sx={{ height: 400, width: '100%', overflowX: 'auto' }} >
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

export default Cards
