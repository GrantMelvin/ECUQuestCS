import { AccountContext } from '../components/AccountContext' ;
import { useContext } from 'react' ;
import Sidebar from "../components/Navbar/Navbar" ;
import { HStack, VStack, Text } from '@chakra-ui/react' ;
import React from 'react' ;
import Pie from './Charts/Pie'
import AnimatePage from '../components/AnimatePage';

const Analytics = () => {
  const {user} = useContext(AccountContext) ;
  
  return(
    <AnimatePage>
    <VStack spacing={'20%'}
    mt='10vh'>
      <VStack spacing={100}>

        <HStack spacing={25}>


          <Pie
          user={user}
          type={"Primitive"}
          title={"Data Types"}
          />

          <Pie
          user={user}
          type={"input/output"}
          title={"Input / Output"}
          />

          <Pie
          user={user}
          type={"Loop"}
          title={"Loops"}
          />
          
        </HStack>
        
        <HStack spacing={25}>

          <Pie
          user={user}
          type={"Array"}
          title={"Arrays"}
          />

          <Pie
          user={user}
          type={"Pointer"}
          title={"Pointers"}
          />

          <Pie
          user={user}
          type={"Structure"}
          title={"Structures"}
          />

        </HStack>

        <HStack spacing={25}>


          <Pie
          user={user}
          type={"LinkedList"}
          title={"Linked Lists"}
          />

          <Pie
          user={user}
          type={"Stack"}
          title={"Stacks"}
          />

          <Pie
          user={user}
          type={"BinaryTree"}
          title={"Binary Trees"}
          />

        </HStack>
      </VStack>
    </VStack>
    </AnimatePage>
  ) ;

}

export default Analytics