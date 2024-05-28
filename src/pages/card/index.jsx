import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import { API_URLS } from '../../api/auth';
import { makeApiRequest } from '../../api/function';
import { hideLoader, showLoader } from '../../components/loader';
import UserButton from '../../components/userButton';




const Cards = () => {
  const [cards, setCards] = useState([])
  const [cardForUpdate, setCardForUpdate] = useState([])
  const fetchCards = async ()=>{
    console.log(showLoader())
    try {
      const response = await makeApiRequest("GET", API_URLS.VIEW_ALL_CARDS)
      // console.log(response)
      hideLoader()
      setCards(response)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchCards()
  }, [])

  const handleUpdateStatus = async(id,newStatus)=>{
    showLoader()
    try {
      const response = await makeApiRequest("PUT", `${API_URLS.UPDATE_CARD}${id}`, { isActivated: newStatus })
      fetchCards();
      hideLoader()
    } catch (error) {
      console.error(error)
    }
  }
  // try {
  //   const response = await makeApiRequest("PUT", `${API_URLS.UPDATE_CARD}/${cardId}`, { isActivated: newStatus });
  //   console.log(response);
  //   // Update the local state
  //   setCards(cards.map(card => card._id === cardId ? { ...card, isActivated: newStatus } : card));
  // } catch (error) {
  //   console.error(error);
  // }

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
      headerName: 'Expiry Date',
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
<UserButton onClick={()=>handleUpdateStatus(params.row.cardId, !params.row.isActivated)} title={params.row.active === "YES" ? "Activated" : "Deactivated"} customStyle={params.row.active === "YES" ? "text-green-400 text-sm":"text-red-400 text-sm"}/>      )
    },
    
  ];

  const rows = cards.map((data, index)=>({id : index+1, created: data.createdAt, cardType: data.cardType, cardNo:data.cardNumber, expiry : data.expMonth, isActivated: data.isActivated, cardId : data._id, amount : data.balance, active: data.isActivated ? "YES" : " NO"}))
  // const rows = [
  //   {id: 125,  created: '25/12/2023', cardType: 'PLATINUM', cardNo: 2345202366556397, expiry : '25/12/2030', amount: "1000000", active:"YES", },
  
  // ];
  return (
    <div className='mx-6 mt-3'>
     
    <Box sx={{ height: 620, width: '100%', overflowX: 'auto' }} >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pmobileSize: 6,
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
