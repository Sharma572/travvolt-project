import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserAction, userData } from '../../../../Redux/Auth/UserData/actionUserData';
import { Backdrop, Button, Checkbox, Fade, Modal, Switch, TextField } from '@mui/material';
import { Box } from '@mui/system';
import './Table.css';
import { markUpAction } from '../../../../Redux/Auth/markUp/actionMarkUp';
import { activeStatusAction } from '../../../../Redux/Auth/activeStatus/actionActiveStatus';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function Tables() {
  const [imgUrl, setImgUrl] = useState(null)
  const [checked, setChecked] = useState(false);
  // console.log(imgUrl);
  const reducerState = useSelector((state) => state);
  console.log("reducerState", reducerState);
  const dispatch = useDispatch()
  // const [openModal,setOpenModal] = useState(false)
  const [isActive, setIsActive] = useState(reducerState?.userTableData?.userData?.data?.data[0]?.is_active)
 
  const [markUp, setMarkUp] = useState(reducerState?.userTableData?.userData?.data?.data[0]?.markup)


  const tableData = reducerState?.userTableData?.userData?.data?.data;
 

  const markupData = reducerState?.addMarkUp?.markupData?.data?.data?.markup;  
 
  useEffect(() => {
   dispatch(getUserAction())
 }, []);

 useEffect(()=>{
  // window.location.reload(); 
  dispatch(getUserAction())
 },[markupData])

  // mui modal
  const [open, setOpen] = React.useState(false);
  // Custom mui modal function  
  const handleModal = () => {
    setOpen(!open);
  }
  // console.log("open",open);
  // Mui checkbox
  const [selected, setSelected] = useState([]);

  const handleActiveStatus = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);

    const payload = {
      "user_id": id,
      "is_active": "1" 
  }

    dispatch(activeStatusAction(payload))
   console.log(payload);
  };

  

  // Input field of markup
  const [inputMarkUp, setInputMarkUp] = useState('');
  const [inputid, setId] = useState('');
 
  const handleMarkUp = (event, id) => {
    
    // setInputMarkUp(event.target.value);
   
    // let oldValue = inputMarkUp;
    let newValue = event.target.value;
    setInputMarkUp(newValue)
    setId(id)
    // console.log("id",inputid);
    // console.log("input markup",inputMarkUp);

  };



  // const handleActive =(e)=>{
  //   setChecked(e.target.checked)
  //   // console.log(e.target);
  // }


  // Handle update status
   const handleStatusUpdate=()=>{
    const payload = {
      "userId" : inputid,
      "amount" : inputMarkUp,
  }
  dispatch(markUpAction(payload));  
}
   



  return (
    <>
      <div style={{ marginTop: '200px', marginLeft: '250px' }}>

        {/* {
  openModal && (
    <Lightbox
      medium={imgUrl}
      large={imgUrl}
      alt="Hello World!"
      onClose={closeLightbox}
    />
  )
} */}
      </div>
      <TableContainer style={{ width: '90%' }} sx={{ marginTop: '15%', marginLeft: '10%', overflowY: 'scroll' }} component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell> Document Image</StyledTableCell>
              <StyledTableCell> Name</StyledTableCell>
              <StyledTableCell align="center">Agency Name</StyledTableCell>
              <StyledTableCell align="center">Agency Email</StyledTableCell>
              <StyledTableCell align="center">Agency Classification</StyledTableCell>
              <StyledTableCell width={300} align="center">Agency Address</StyledTableCell>
              <StyledTableCell align="center">Contact Person</StyledTableCell>
              <StyledTableCell align="center">Provisional GSTIN</StyledTableCell>
              <StyledTableCell align="center">Mobile</StyledTableCell>
              <StyledTableCell align="center">Password</StyledTableCell>
              <StyledTableCell align="center">Is Active</StyledTableCell>
              <StyledTableCell align="center">Mark Up Amount</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {
              tableData || tableData === 'undefined' ?
                tableData.map((ele, index) => {
                  return (
                    <>

                      <StyledTableRow key={index}>

                        {/* <img src={ele.agency_details.document_details.pan_card_document}  alt={index} /> */}
                        <StyledTableCell align="right"> <button onClick={handleModal}>
                          {/* {imgUrl && <ModalImage
                        large={imgUrl}
                        small={imgUrl}
                        alt="Pic" />} */}
                          {/* <span>{imgUrl}</span> */}



                          {/* <Button onClick={handleOpen}>Open modal</Button> */}
                          <img style={{}} src={ele.agency_details.document_details.pan_card_document} alt={index} />

                          <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={open}
                            onClick={handleModal}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                              timeout: 500,
                            }}


                          >
                            <Fade in={open}>
                              <Box sx={style}>
                                <Button onClick={() => setOpen(false)}>Close</Button>
                                <img style={{ width: '300px', height: '200px' }} src={ele.agency_details.document_details.pan_card_document} alt={index} />
                              </Box>
                            </Fade>
                          </Modal>



                        </button>
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                          {ele.personal_details.first_name}
                        </StyledTableCell>
                        <StyledTableCell align="right">{ele.agency_details.agency_name}</StyledTableCell>
                        <StyledTableCell align="right">{ele.agency_gst_details.email}</StyledTableCell>
                        <StyledTableCell align="right">{ele.agency_gst_details.agency_classification}</StyledTableCell>
                        <StyledTableCell width={300} align="right">{ele.agency_details.address}</StyledTableCell>
                        <StyledTableCell align="right">{ele.agency_gst_details.agency_name}</StyledTableCell>
                        <StyledTableCell align="right">{ele.agency_gst_details.provisional_GSTIN}</StyledTableCell>
                        <StyledTableCell align="right">{ele.personal_details.mobile.mobile_number}</StyledTableCell>
                        <td className='' align="right">
                          <Box
                            sx={{
                              width: 400,
                              maxWidth: '100%',
                              textAlign: 'left',
                              marginLeft: 10
                            }}
                          >
                            <span>{ele.personal_details.password.slice(0, 32)}</span> <br />
                            <span>{ele.personal_details.password.slice(32, ele.personal_details.password.length)}</span>
                          </Box>
                        </td>
                        <StyledTableCell align="right">
                          {/* {ele.is_active} */}
                          <Switch
                          color="success"
                            checked={selected.indexOf(ele._id) !== -1}
                            onChange={(event) => handleActiveStatus(event, ele._id)}
                            inputProps={{ 'aria-label': 'select item' }}
                          />

                          {/* <Checkbox
                checked={selected.indexOf(ele._id) !== -1}
                onClick={(event) => handleClick(event, ele._id)}
                inputProps={{ 'aria-label': 'select item' }}
              /> */}
                        </StyledTableCell>
                        <StyledTableCell align="center">

                          {/* <input type="number" value={ele.markup} onChange={(e)=> setMarkUp(e.target.value) } /> */}

                          <Box
                            sx={{
                              width: 350,
                              maxWidth: '100%',
                              display:'flex',
                              justifyContent: 'space-between',
                              alignItems:'center'
                            }}
                          >
                            <span>Mark Up Amount : {ele.markup}</span>
                            {/* {inputMarkUp} */}
                            <TextField
                           placeholder='Amount'
                            sx={{width:'120px',marginRight:'10px'}}
                              fullWidth id="fullWidth"
                              onInput={(event) => handleMarkUp(event, ele._id)}
                            />
                            <Button sx={{marginLeft:'10px'}} size="small" variant="contained" color="success" onClick={handleStatusUpdate}>
                              Update
                            </Button>
                          </Box>



                        </StyledTableCell>
                      </StyledTableRow>
                    </>
                  )
                }) : ''
            }



          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
