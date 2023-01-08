import { Typography } from '@material-ui/core'
import { Grid, Box } from '@mui/material'
import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PinDropIcon from '@mui/icons-material/PinDrop';

import "./hotelstepper.css";

const HotelForm = () => {

    const navigate = useNavigate();
    const clickme = () => {
        navigate('hotelsearch')
    }
    return (
        <React.Fragment>
            <Grid container spacing={5} py={4}>
                <Grid item md={6} sm={12} xs={12}>
                    <Box>
                        <div className="form_input">
                            <label for="departure" className="form_lable">City Name</label>
                            <input type="text" name="City" className="city_input" placeholder="Enter city Name" />
                        </div>
                    </Box>
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                    <Box display='flex' >
                        <Box mx={3}>
                            <Typography className='or'>OR</Typography>
                        </Box>
                    <PinDropIcon style={{color:'#00BDC4'}}/>
                        <Box mx={3}>
                            <Typography className='search_map'>Search On Map</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={5} py={1} display='inline-block'>
                <Grid item md={6} sm={12} xs={12} display='flex'>
                    <Box paddingRight={1}>
                        <div className="form_input">
                            <label for="departure" className="form_lable">Check In</label>
                            <input type="date" name="departure" id="departure" className="deaprture_input" placeholder="Enter city or airport" >
                            </input>
                        </div>
                    </Box>
                    <Box px={1}>
                        <div className="form_input">
                            <label for="departure" className="form_lable">Time</label>
                            {/* <input type="text" name="City" className="city_input" placeholder="day" /> */}
                            <select name="" id="" className='hotel_input_select'>
                                <option>Day</option>
                                <option>Night</option>
                            </select>
                        </div>
                    </Box>
                    <Box px={1}>
                        <div className="form_input">
                            <label for="departure" className="form_lable">Check-Out</label>
                            <input type="date" name="departure" id="departure" className="deaprture_input" placeholder="Enter city or airport" >
                            </input>
                        </div>
                    </Box>
                    <Box px={1}>
                        <div className="form_input">
                            <label for="departure" className="form_lable">Nationality</label>
                            {/* <input type="text" name="City" className="city_input" placeholder="India" /> */}
                            <select name="" id="" className='hotel_input_select'>
                                <option>India</option>
                                <option>Canada</option>
                            </select>
                        </div>
                    </Box>
                </Grid>

            </Grid>
            <Grid container spacing={5} pt={4} >
                <Grid item md={6} sm={12} xs={12} display='flex'>
                    <Box paddingRight={1}>
                        <div className="form_input">
                            <label for="departure" className="form_lable">Room</label>
                            <select name="" id="" className='hotel_input_select'>
                                <option>1</option>
                                <option>2</option>
                            </select>
                        </div>
                    </Box>
                    <Box px={1}>
                        <div className="form_input">
                            <label for="departure" className="form_lable">Adult</label>
                            <select name="" id="" className='hotel_input_select'>
                                <option>1</option>
                                <option>2</option>
                            </select>
                        </div>
                    </Box>
                    <Box px={1}>
                        <div className="form_input">
                            <label for="departure" className="form_lable">Child (2-12)</label>
                            <select name="" id="" className='hotel_input_select'>
                                <option>1</option>
                                <option>2</option>
                            </select>
                        </div>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={5} pt={4} >
                <Grid item md={6} sm={12} xs={12} display='flex'>
                    <Box paddingRight={1}>
                        <div className="form_input">
                            <label for="departure" className="form_lable">Star Rating</label>
                            <select name="" id="" className='hotel_input_select'>
                                <option>Show All</option>
                                <option>2</option>
                            </select>
                        </div>


                    </Box>
                </Grid>
            </Grid>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button className='hotel_submit' onClick={clickme}  variant='contained'>Hotel Search</Button>
            </div>
        </React.Fragment>
    )
}

export default HotelForm
