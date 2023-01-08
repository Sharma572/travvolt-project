import { Flex, Box} from '@chakra-ui/react'
import React from 'react'
import { BanerImage } from '../../banner'

import "./Banner.css"
const Banner = () => {

  return (
<Flex 
    direction="column" 
    justifyContent="space-around"
    bg="red.500"
    className='banners'>
    
    {
      BanerImage.map(({avatar},index)=>{
         
         return <Box w="100%" h="28%" className='bannerImgBox' >
         <img style={{width:"100%", height:"100%"}} src={avatar}  alt="name"/>

         </Box>
      })  
    }
</Flex>
  )
}

export default Banner
