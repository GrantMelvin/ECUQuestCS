import React from 'react' ;
import { SidebarData } from "./Navbardata.jsx" ;
import { AccountContext } from '../AccountContext.jsx';
import { useContext } from 'react' ;
import { useNavigate } from "react-router" ;
import { Button, Box, useColorModeValue, Image, Text, ListItem, HStack, List, Select } from '@chakra-ui/react' ;
import logo from '../imgs/ECUQuestCS.png'
import { CgLogOut } from '@react-icons/all-files/cg/CgLogOut'
import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub'
import { useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useBoolean } from '@chakra-ui/react'
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react'
import { SlBan } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDisclosure } from '@chakra-ui/react';


function Sidebar() {
  const { setUser } = useContext(AccountContext) ;
  const navigate = useNavigate();

  const sideBarColor = useColorModeValue('rgb(194,194,194)', 'linear-gradient(to top, #161a22, #171b24)')
  const itemColor = useColorModeValue('black','white')

  const { colorMode, toggleColorMode } = useColorMode();
  const {isOpen, onOpen, onClose} = useDisclosure()

  const logOut = () => {
    fetch("http://localhost:4000/auth/signout", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(res => {
    console.log(res)
    return res.json() ;
  })
  .then(data => {
      setUser({...data}) ;
    });
  }

  const pageChange = (page) => {
    const selectedValue = page.target.value;
    navigate(selectedValue);
  };


  return (
    <HStack 
    className="Sidebar" 
    w='100vw' 
    h='2vh'>

    <Slide direction='top' in={!isOpen} style={{ zIndex: 10 }}>
        <Button
        mt='2vh'
        ml='96vw'
        onClick={() => {
          onOpen()
        }}
        >
          {<RxHamburgerMenu/>}
        </Button>
    </Slide>

        <Slide direction='top' in={isOpen} onClose={onClose} style={{ zIndex: 10 }}>
          <Box w='100%' h='10vh' align={'left'} >
            <HStack w='10vw' h='100%' id='logo' >
                <Image 
                src={logo}
                mt='0.5vh'
                objectFit='cover'
                boxSize='5vw'
                padding={'3px'}/>
                <Box><Text fontSize={'3vh'} fontFamily={'source-code-pro'}>ECUQuestCS</Text></Box>
            </HStack>
          </Box>
        </Slide>

      <Slide direction='top' in={isOpen} style={{ zIndex: 10 }}>
      <List color={itemColor} w='100%' ml='15vw' mt='2vh'>
        {SidebarData.map((val, key) => {
        return (
          <Button key={key} 
          className='col'
          w={val.title ? '10vw' : '5vw'}
          h='5vh'
          ml='1vw'
          mr='1vw'
          align='center'
          rounded={'10px'}
          id={window.location.pathname === val.link ? "active" : "" }
          onClick={() => {
            navigate(val.link)
        }}>
          <div id="icon">{val.icon}{' '}</div><div id='title'>{val.title ? val.title : ''}</div>
          </Button>
          )
        })}
        <Select
          w='10vw'
          h='5vh'
          ml='1vw'
          mr='1vw'
          align='center'
          rounded={'10px'}
          bg={'#EDF2F7'}
          placeholder={'Select a course'}
          onChange={pageChange}
        >
          <option value='/CSCI1010'>CSCI 1010</option>
          <option value='/CSCI2530'>CSCI 2530</option>
          <option value='/CSCI2540'>CSCI 2540</option>
        </Select>

        <List ml='20vw'>

        <ListItem className='col' mr='1vw'>
          <Button 
          variant={'solid'}
          rounded={'10px'}
          leftIcon={<CgLogOut/>}
          onClick ={() => {
            logOut()
            }}>
              Sign Out
          </Button>
        </ListItem>    

        <ListItem className='col' mr='1vw' > 
          <Button 
          variant={'solid'}
          rounded={'10px'}
          leftIcon={<AiFillGithub/>}
          onClick ={() => {
            window.location.href="https://github.com/GrantMelvin/ECUQuestCS.git" ;
            }}>
              Github
          </Button>
        </ListItem>    


        <ListItem className='col' mr='1vw'>
        <Button
          mr='1vw' 
          variant={'solid'}
          rounded={'10px'}
          onClick={() => {
            toggleColorMode()
            }}
        >
          {colorMode === "dark" ? (
            <SunIcon color="orange.200" />
          ) : (
            <MoonIcon color="blue.700" />
          )}
        </Button>
        </ListItem>

        
        <ListItem className='col' mr='1vw'>
        <Button
        ml='10vw' 
        variant={'solid'}
        rounded={'10px'}
        onClick={() => {
          onClose()
        }}
        >{<SlBan/>}
        </Button>
        </ListItem>

        </List>

      </List>

      </Slide>
    </HStack>
  )
}

export default Sidebar