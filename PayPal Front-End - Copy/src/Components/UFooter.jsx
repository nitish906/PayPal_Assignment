import React from 'react'
// import "./Footer.css"
import { Box, Image, Button, Heading, Text, Icon, Flex } from "@chakra-ui/react"


const UFooter = () => {
     return (
          <Box pb="20px" display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'} w={'100%'} bg={"url(//images.ctfassets.net/rz1oowkt5gyp/7KgS3XVFhGu3TiclJKloEp/c10aad1…/ViewsBackground_Left_Narrow.svg) left center / contain no-repeat scroll padding-box border-box, url(//images.ctfassets.net/rz1oowkt5gyp/2HisRmboWIdXSYaaUSDzon/dadecff…/ViewsBackground_Right_Narrow.svg) right center / contain no-repeat scroll padding-box border-box, linear-gradient(240deg, rgb(0, 184, 217), rgb(0, 101, 255)) 0% 0% / auto repeat scroll padding-box border-box rgb(0, 101, 255)"} >
               <Box color={'white'} display={"flex"} flexDirection={'column'} justifyContent={'center'} alignItems={"center"}>
                    <Heading as={'h2'} fontSize={'2.25rem'} fontWeight='500' mb={'6px'} mt='12'> See work in a whole new way </Heading>

                    <Box w='82%' mb={'7'}>  <Text  > View your team’s projects from every angle and bring a fresh perspective to the task at hand. </Text>
                    </Box>
                    <Button p={'10px 20px'} fontSize='16px' color={'black'} backgroundColor={'white'} border={'1px solid #5243aa'} borderRadius={"5px"} cursor={'pointer'} _hover={{ backgroundColor: "#deebff" }}> Discover All Trello Views </Button>

               </Box>
               <Box backgroundColor={'white'} w={'83%'} borderRadius={'8px'} mt={'5%'}>
                    <Box display={'flex'} padding={'30px'} gap='7%' >
                         <Box > <Image src='https://images.ctfassets.net/rz1oowkt5gyp/5Hb09iiMrK6mSpThW5HS89/f5683a167ad3f74bed4dc7592ae5a002/TrelloBoard_Timeline_2x.png?w=1212&fm=webp' /></Box>
                         <Flex flexDir={'column'} alignItems='flex-start' justifyContent={'space-evenly'} w='90%' > <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                              <Icon aria-hidden="true" viewBox="0 0 32 32">
                                   <path fill="#8777d9" d="M6 5.333h9.333a3.333 3.333 0 0 1 0 6.667H6a3.333 3.333 0 0 1 0-6.667Zm9.333 4a.667.667 0 0 0 0-1.333H6a.667.667 0 0 0 0 1.333h9.333Zm-6.666 4H18A3.333 3.333 0 1 1 18 20H8.667a3.333 3.333 0 0 1 0-6.667Zm9.333 4A.667.667 0 0 0 18 16H8.667a.667.667 0 0 0 0 1.333H18Zm6.667 4h-9.334a3.333 3.333 0 1 0 0 6.667h9.334a3.333 3.333 0 0 0 0-6.667Zm-9.334 4a.667.667 0 0 1 0-1.333h9.334a.667.667 0 1 1 0 1.333h-9.334Zm8-20H26A3.333 3.333 0 1 1 26 12h-2.667a3.333 3.333 0 1 1 0-6.667Zm2.667 4A.667.667 0 1 0 26 8h-2.667a.667.667 0 1 0 0 1.333H26Z" />
                              </Icon>
                              <Heading as={'h3'} fontSize={'1rem'} fontWeight={'600'}> HIT DEADLINES EVERY TIME </Heading> </Box>
                              <Text w={'85%'} lineHeight={'30px'} textAlign={'left'}> From weekly sprints to annual planning, Timeline view keeps all tasks on track. Quickly get a glimpse of what’s coming down the pipeline and identify any gaps that might impede your team’s progress.</Text>
                              <Text cursor={'pointer'} color={'#0052cc'} textDecor={'underline'}> Learn more about Timeline view</Text>

                         </Flex>
                    </Box>

               </Box>



               <Box backgroundColor={'white'} w={'83%'}  borderRadius={'8px'} mt={'5%'} >
                    <Box display={'flex'} padding={'30px'} gap='7%' >

                         <Flex flexDir={'column'} alignItems='flex-start' justifyContent={'space-evenly'} w='80%' > <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                              <Icon aria-hidden="true" viewBox="0 0 32 32" >
                                   <path fill="#00c7e5" d="M6.66 6.667h18.68A2.66 2.66 0 0 1 28 9.325v16.016A2.659 2.659 0 0 1 25.34 28H6.66A2.66 2.66 0 0 1 4 25.341V9.325a2.659 2.659 0 0 1 2.66-2.658ZM6.667 12v12A1.333 1.333 0 0 0 8 25.333h16A1.333 1.333 0 0 0 25.333 24V12H6.667ZM8 5.333a1.333 1.333 0 0 1 2.667 0v1.334H8V5.333Zm13.333 0a1.333 1.333 0 0 1 2.667 0v1.334h-2.667V5.333Zm-12 12v-2.668H12v2.668H9.333Zm10.667 0v-2.668h2.667v2.668H20Zm-5.333 0v-2.668h2.668v2.668h-2.668Zm-5.334 5.334V20H12v2.667H9.333Zm5.334 0V20h2.668v2.667h-2.668Zm5.333 0V20h2.667v2.667H20Z" />
                              </Icon>
                              <Heading as={'h3'} fontSize={'1rem'} fontWeight={'600'}> STAY ON TOP OF TASKS </Heading> </Box>
                              <Text w={'88%'} lineHeight={'30px'} textAlign={'left'}> Start each day without any surprises. Whether scheduling an editorial calendar or staying on top of to-dos, Calendar view is like a crystal ball giving you a clear vision of what work lies ahead.</Text>
                              <Text cursor={'pointer'} color={'#0052cc'} textDecor={'underline'}>  Learn more about Calendar view</Text>

                         </Flex>
                         <Box > <Image src='https://images.ctfassets.net/rz1oowkt5gyp/7sxChS4x6XAcUgDpp4VAZk/25377d162e964f4243e329c447bfd7dc/TrelloBoard_Calendar_2x.png?w=1140&fm=webp' /></Box>
                    </Box>

               </Box>

          </Box>
     )
}

export default UFooter