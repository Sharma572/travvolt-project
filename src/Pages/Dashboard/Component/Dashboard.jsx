import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import ResponsiveAppBar from './Topbar';

import Tables from './Table/Table';



function TabPanel(props) {
 
  const { children, value, index, ...other } = props;

  return (
    <div
    
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box  sx={{ p: 3 }}>
          <Typography >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (<>
    <div className="wrapper" style={{width:'100%'}}>
    <ResponsiveAppBar />
    <Box
      sx={{position: 'fixed', left: 0 ,top: -18, flexGrow: 1, display: 'flex' ,height: '100%' , marginTop: '120px',zIndex:'1000'}}
    >
      <Tabs
        style={{background: 'DarkBlue',borderRight:'2px solid darkblue'}}
        orientation="vertical"  
        variant="scrollable"
        TabIndicatorProps={{
          sx: {
            backgroundColor: 'white',
            height: '1px'
          },
        }}
        
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{  color: 'warning.main',zIndex: '10' }}
      >
        <Tab sx={{ display: 'flex' }} style={{color:'white'}}  label="Table" icon={< StackedBarChartIcon style={{position:'absolute', top:'21px',left:'8px'}} /> } {...a11yProps(0)} />
        <Tab style={{color:'white'}} label="Item Two" {...a11yProps(1)} />
        <Tab style={{color:'white'}} label="Item Three" {...a11yProps(2)} />
        <Tab style={{color:'white'}} label="Item Four" {...a11yProps(3)} />
        <Tab style={{color:'white'}} label="Item Five" {...a11yProps(4)} />
        <Tab style={{color:'white'}} label="Item Six" {...a11yProps(5)} />
        <Tab style={{color:'white'}} label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
    <TabPanel value={value} index={0}>
        <Tables />
      </TabPanel>
    </div>
    </>
  );
}