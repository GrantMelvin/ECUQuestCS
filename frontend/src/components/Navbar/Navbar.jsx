import React from 'react' ;
import { SidebarData } from "./Navbardata.jsx" ;
import { AccountContext } from '../AccountContext.jsx';
import { useContext } from 'react' ;
import { useNavigate } from "react-router" ;
import { Button, Stack, useColorModeValue, Image, Text, Box, HStack, VStack } from '@chakra-ui/react' ;
import logo from '../imgs/ECUQuestCS.png'
// import { CgLogOut } from '@react-icons/all-files/cg/CgLogOut'
// import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub'


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
    return res.json() ;
  })
  .then(data => {
      setUser({...data}) ;
    });
  }

  return (
    <VStack bg={sideBarColor} className="Sidebar">
      <ul className='sideBarList' color={itemColor}>
        <li>
          <HStack>
          <Image 
          src={logo}
          boxSize='10vh'
          objectFit='cover'/>
          <Text fontSize={'3vh'} fontFamily={'source-code-pro'}>ECUQuestCS</Text>
          </HStack>
        </li>
        {SidebarData.map((val, key) => {
        return (
          <li key={key} 
          className="row"
          id={window.location.pathname === val.link ? "active" : "" }
          onClick={() => {
            navigate(val.link)
        }}>
          <div id="icon">{val.icon}</div><div id="title">{val.title} </div>
          </li>
          )
        })}
        <li className="row">
          <Button 
          variant="unstyled"
          // leftIcon={<CgLogOut/>}
          onClick ={() => {
            logOut()
            }}>
            <div id="signOut">Sign Out</div>
          </Button>
        </li>    
          <li 
            className="row"
            id="footer"
            onClick={() => {
              window.location.href="https://github.com/GrantMelvin/ECUQuestCS.git" ;
          }}>
            {/* <div id="icon" bg='red'>{<AiFillGithub/>}</div><div id="title" >{'github'}</div> */}
          </li>    
      </ul>
    </VStack>
  )
}

export default Sidebar