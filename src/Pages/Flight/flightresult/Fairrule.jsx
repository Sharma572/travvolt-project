import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';

export default function PositionedTooltips() {
  return (
      
          <Tooltip title="Fair Rule" placement="top">
            <CorporateFareIcon  style={{color:'gray'}}/>
          </Tooltip>
          
         
        
  );
}
