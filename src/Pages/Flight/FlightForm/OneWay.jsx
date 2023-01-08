import React from 'react'
import transfer from "../../../Images/transfer.png"
import "./OneWay.css"
import { Button } from 'react-bootstrap'
import { Grid, GridItem, Checkbox, Flex } from '@chakra-ui/react'
const OneWay = () => {
  return (
    <form action="/Flightresult" className='formFlightSearch'>

      {/* arrival and departure input box */}
      <div className="row"  >
        <div className="col-xs-12 col-md-3">
          <div className="form_input">
            <label for="from" className="form_lable">FROM</label>
            <input placeholder='Enter city or airport' />
          </div>
        </div>
        <div className="col-md-1" style={{ marginLeft: "-20px", marginRight: "-50px" }}>
          <img src={transfer} alt="name" />
        </div>
        <div className="col-xs-12 col-md-3">
          <div className="form_input">
            <label for="to" className="form_lable">TO</label>
            <input placeholder='Enter city or airport' />
          </div>
        </div>





        <div className="col-xs-12 col-md-2">
          <div className="form_input">
            <label for="departure" className="form_lable">DEPARTURE</label>

            <input type="date" name="departure" id="departure" className="deaprture_input" placeholder="Enter city or airport" >

            </input>
          </div>
        </div>

        <div className="col-xs-12 col-md-2">
          <div className="form_input">
            <label className="form_lable"></label>
            <select name="" id="" className='form_input_select' >

              <option mx={5}>Any Time</option>
              <option px={5} sx={{ fontSize: "9px", fontWeight: "bold" }}>Morning</option>

              <option px={5}>Evening</option>
              <option px={5}>Afternoon</option>
              <option mx={5}>Night</option>

            </select>
          </div>
        </div>


      </div>


      {/*  All fair components  */}
      {/* <div className='row'> <div className='col-sm-12' > */}
      <div className='row'>
        <div className="col-xs-3 col-md-2 " >
          <label className='form_lable1'>Select A Fair of Type</label>
        </div>
        <div className="col-xs-3 col-md-2 faireRadiao">
          <input type="radio" />
        </div>
        <div className="col-xs-3 col-md-2 faireRadiao">
          <input type="radio" />
        </div>
        {/* </div></div> */}

      </div>

      <div>

        <div className='col-xs-9'>
          <div className="row" >
            <div className="col-3 col-md-3 col-lg-3 mb-3">
              <div className="form_input">

                <label for="from" className="form_lable">Adult(12+)</label>

                <select name="" id="" className='form_input_select' >

                  <option mx={5} sx={{ fontSize: "9px", fontWeight: "bold" }}>1</option>
                  <option px={5} >2</option>

                  <option px={5}>3</option>
                  <option px={5}>4</option>
                  <option mx={5}>5</option>

                </select>

              </div>

            </div>

            <div className="col-3 col-md-3 col-lg-3 mb-3">
              <div className="form_input">
                <label for="to" className="form_lable">Child(2-11)</label>
                <select name="" id="" className='form_input_select'>
                  <option mx={5} sx={{ fontSize: "9px", fontWeight: "bold" }}>0</option>
                  <option mx={5}>1</option>
                  <option px={5}>2</option>
                  <option px={5}>3</option>
                  <option px={5}>4</option>
                  <option mx={5}>5</option>
                </select>
              </div>
            </div>
            <div className="col-3 col-md-3 col-lg-3 mb-3">
              <div className="form_input">
                <label for="to" className="form_lable">Infant (Under 2 Yrs)</label>
                <select name="" id="" className='form_input_select'>
                  <option mx={5} sx={{ fontSize: "9px", fontWeight: "bold" }}>1</option>
                  <option px={5}>1</option>
                  <option px={5}>2</option>
                  <option px={5}>3</option>
                  <option mx={5}>4</option>
                </select>
              </div>
            </div>

            <div className="col-3 col-md-3 col-lg-3 mb-3">
              <div className="form_input">
                <label for="to" className="form_lable">Class</label>
                <select name="" id="" className='form_input_select'>

                  <option px={5} sx={{ fontSize: "9px", fontWeight: "bold" }}>Ecomomy</option>
                  <option px={5}>Premimum Economy</option>
                  <option px={5}>Business</option>
                  <option mx={5}></option>
                </select>
              </div>
            </div>
            {/* <div className="col-9 col-md-6 col-lg-2 " > </div> */}

          </div>

        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-3 col-lg-3 mb-3 ">
          <div className="form_input creditBox">
            <label for="from" className="form_lable">Cradit Shell Pnr</label>

            <input placeholder='Enter city or airport' />
          </div>

        </div>


        <div className="col-12 col-md-3 col-lg-3 mb-3">
          <div className="form_input creditBox">
            <label for="to" className="form_lable">Preferred Carrier</label>
            <input placeholder='Enter city or airport' />
          </div>
        </div>

      </div>



      <div className="row">
        <label className='form_lable1'>-More options: Airline prefrence</label>

      </div>
      <div className='row'>
        <div className="col-12 col-md-3 col-lg-3 mb-3">

          <div className='showDirectFligthDiv'>
            <input type="radio" /> <span>Show direct flight</span>
          </div>

        </div>
      </div>


      <label style={{ fontSize: "20px", fontWeight: "400" }}>Restrict my Search to: <span style={{ color: "#00BDC4" }}>Select All / Unselect All</span></label>
      <Grid templateColumns='repeat(6, 1fr)' gap={6}>
        <GridItem w='100%' h='30' >
          <input className="inputSelect" type="checkbox" defaultChecked="checked" /> <span>GPS</span>
        </GridItem>
        <GridItem w='100%' h='30' >
          <input className="inputSelect" type="checkbox" defaultChecked="checked" /> <span>Fly Dubai</span>
        </GridItem>
        <GridItem w='100%' h='30' >
          <input className="inputSelect" type="checkbox" defaultChecked="checked" /> <span>Air Arobia</span>
        </GridItem>
        <GridItem w='100%' h='30' >
          <input className="inputSelect" type="checkbox" defaultChecked="checked" /> <span>zoom air</span>
        </GridItem>
        <GridItem w='100%' h='30' >
          <input className="inputSelect" type="checkbox" defaultChecked="checked" /> <span>Other intl LCC</span>
        </GridItem>
        <GridItem w='100%' h='30' >
          <input className="inputSelect" type="checkbox" defaultChecked="checked" /> <span>Air Asia</span>
        </GridItem>
        <GridItem w='100%' h='30' >
          <input className="inputSelect" type="checkbox" defaultChecked="checked" /> <span>Air India Express</span>
        </GridItem>
        <GridItem w='100%' h='30' >
          <input className="inputSelect" type="checkbox" defaultChecked="checked" /> <span>Air Cost</span>
        </GridItem>
        <GridItem w='100%' h='30' >
          <input className="inputSelect" type="checkbox" defaultChecked="checked" /> <span>NokScoot</span>
        </GridItem>
        <GridItem w='100%' h='30' >
          <input className="inputSelect" type="checkbox" defaultChecked="checked" /> <span>Salman Air</span>
        </GridItem>
        <GridItem w='100%' h='30' >
          <input className="inputSelect" type="checkbox" defaultChecked="checked" /> <span>Inter Sky</span>
        </GridItem>
        <GridItem w='100%' h='30' >
          <input className="inputSelect" type="checkbox" defaultChecked="checked" /> <span>Triger Airways</span>
        </GridItem>
        <GridItem w='100%' h='30' >
          <input className="inputSelect" type="checkbox" defaultChecked="checked" /> <span>SpiceJet</span>
        </GridItem>
        <GridItem w='100%' h='30' >
          <input className="inputSelect" type="checkbox" defaultChecked="checked" /> <span>GOFIRTS</span>
        </GridItem>
        <GridItem w='100%' h='30' >
          <input className="inputSelect" type="checkbox" defaultChecked="checked" /> <span>Alliance Air</span>
        </GridItem>
        <GridItem w='100%' h='30' >
          <input className="inputSelect" type="checkbox" defaultChecked="checked" /> <span>Akasa Air</span>
        </GridItem>
        <GridItem w='100%' h='30' >
          <input className="inputSelect" type="checkbox" defaultChecked="checked" /> <span>Fly Scoot</span>
        </GridItem>
        <GridItem w='100%' h='30' >
          <input className="inputSelect" type="checkbox" defaultChecked="checked" /> <span>Indigo</span>
        </GridItem>
        <GridItem w='100%' h='30' >
          <input className="inputSelect" type="checkbox" defaultChecked="checked" /> <span>Bhutan Airlines</span>
        </GridItem>
        <GridItem w='100%' h='30' >
          <input className="inputSelect" type="checkbox" defaultChecked="checked" /> <span>TruJet</span>
        </GridItem>
        <GridItem w='100%' h='30' >
          <input className="inputSelect" type="checkbox" defaultChecked="checked" /> <span>Mega Maldives</span>
        </GridItem>
      </Grid>

      <div className='row'>
        <Flex direction="row" justifyContent="center">
          <Button

            mt={4}

            colorScheme='teal'
            // isLoading={props.isSubmitting}
            type='submit'
          >
            Flight Search
          </Button>
        </Flex>
      </div>
    </form>
  )
}

export default OneWay
