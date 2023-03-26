import React from 'react'
import { Box, Link, Heading } from '@chakra-ui/react'
const Anavbar = () => {
    return (
        <Box display={'flex'} backgroundColor='blue' color={'white'} justifyContent='space-evenly'>
            <Link href={'/home'}> <Heading> Home </Heading></Link>
            <Link href='/sprint'><Heading> Sprint </Heading></Link>
            <Link href='/task'><Heading> Task </Heading></Link>


        </Box>
    )
}

export default Anavbar