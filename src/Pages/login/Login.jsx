import React from 'react';
import Grid from '@mui/material/Grid';
import { Input, Typography } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Flex, Spacer, Text } from '@chakra-ui/react'
import Popularfilter from '../Flight/flightresult/Popularfilter';
import tra from '../../Images/tra.png';
import LockIcon from '@mui/icons-material/Lock';

import './login.css';
import { Button } from 'react-bootstrap';
const Flightresult = () => {
  return (
    <React.Fragment>
      <div className='loginContainer' >

        {/* step by step updating part */}

        <Box>

          <div>
            <Grid container display='flex' justifyContent='center' alignItems='center' textAlign='center' pb={5} >

              <Grid item xs={12} sm={12} md={3} display='flex' justifyContent='end' alignItems='center'>


              </Grid>
              <Grid item xs={12} sm={12} md={6} display='flex' justifyContent='center' alignItems='center' >
                <Box pt={5}>
                  <Box>
                    <img src={tra}></img>
                  </Box>
                  <Box py={2}>

                    <div className="form_input">

                      <label for="from" className="form_lable">UserName*</label>

                      <input type='text' placeholder='UserName' style={{ height: '60px', width: '400px' }} />

                    </div>
                  </Box>
                  <Box py={2}>

                    <div className="form_input">

                      <label for="from" className="form_lable">Password*</label>

                      <input type='text' placeholder='Your Password' style={{ height: '60px', width: '400px' }} />

                    </div>
                  </Box>
                  <Box py={2}>

                    

                      <Box display='flex' justifyContent='space-between'>
                        <Button variant='contained' style={{ backgroundColor: '#0052D0', color: 'white' }} startIcon={<LockIcon />}>
                          Lost Password?
                        </Button>
                        <Button variant="contained" style={{ backgroundColor: '#0052D0', color: 'white' }}>Login</Button>
                      </Box>

                    
                  </Box>
                

                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={3} display='flex' justifyContent='start' alignItems='center'>


              </Grid>
            </Grid>
          </div>

        </Box>
      </div>
    </React.Fragment>
  )
}

export default Flightresult;
