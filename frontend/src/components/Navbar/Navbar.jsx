import React from 'react' ;
import { SidebarData } from "./Navbardata.jsx" ;
import { AccountContext } from '../AccountContext.jsx';
import { useContext } from 'react' ;
import { useNavigate } from "react-router" ;
import { Button, Box, useColorModeValue, Image, Text, ListItem, HStack, List } from '@chakra-ui/react' ;
import logo from '../imgs/ECUQuestCS.png'
import { CgLogOut } from '@react-icons/all-files/cg/CgLogOut'
import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub'


function Sidebar() {
  const { setUser } = useContext(AccountContext) ;
  const navigate = useNavigate();

  const sideBarColor = useColorModeValue('linear-gradient(to top, #e8f2fc, #f8f5fc)', 'linear-gradient(to top, #161a22, #171b24)')
  const itemColor = useColorModeValue('black','white')


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

  return (
    <HStack bg={sideBarColor} className="Sidebar" w='100%' h='100%'>
      
      <Box w='100%' h='15vh' align={'left'}>
        <HStack w='100%' h='100%' id='logo' bg='red'>
            <Image 
            src={logo}
            objectFit='cover'
            boxSize='100%'
            padding={'3px'}/>
            <Box w='100%'><Text fontSize={'3vh'} fontFamily={'source-code-pro'}>ECUQuestCS</Text></Box>
        </HStack>
      </Box>

      <List color={itemColor} bg='blue'>
        {SidebarData.map((val, key) => {
        return (
          <ListItem key={key} 
          className="row"
          id={window.location.pathname === val.link ? "active" : "" }
          onClick={() => {
            navigate(val.link)
        }}>
          <div id="icon">{val.icon}</div><div id="title">{val.title} </div>
          </ListItem>
          )
        })}

        <ListItem className='row'>
          <Button 
          variant="unstyled"
          leftIcon={<CgLogOut/>}
          onClick ={() => {
            logOut()
            }}>
          </Button>
        </ListItem>    

        <ListItem className='row'> 
          <Button 
          variant="unstyled"
          leftIcon={<AiFillGithub/>}
          onClick ={() => {
            window.location.href="https://github.com/GrantMelvin/ECUQuestCS.git" ;
            }}>
          </Button>
        </ListItem>    
      </List>
    </HStack>
  )
}

export default Sidebar