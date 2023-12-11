import { HStack, VStack, useColorModeValue } from '@chakra-ui/react';
import Sidebar from "../../Navbar/Navbar";
import Cards from './Cards';
import prim from '../../imgs/prim.png'
import loops from '../../imgs/loops.png'
import loopsLight from '../../imgs/loopsLight.png'
import io from '../../imgs/io.png'

function CSCI1010() {
  const themeMode = (localStorage.getItem('chakra-ui-color-mode') === 'dark') ;


  const loopsPic = useColorModeValue(loops, loopsLight) ;

  return(
    <HStack
    spacing={100}
    >

      <VStack>
        {Sidebar(themeMode)} 
      </VStack>

      <VStack
      spacing = {25}
      >
        <Cards
        img={prim}
        alt="Primitive Data Types"
        title="Primitive Data Types"
        desc="Practice Primitive Data Types!"
        link='/Question'
        />
      </VStack>
      <VStack
      spacing = {25}>
      <Cards
        img={io}
        alt="Input and Output"
        title="Input / Output"
        desc="Practice the basics with input/ouput!"
        link='/InputOutput'
        />
      </VStack>
      <VStack
      spacing={25}
      >
        <Cards
        img={loopsPic}
        alt="Loops"
        title="Loops"
        desc="Practice the basics with Loops!"
        link="/Loops"
        />
      </VStack>
    </HStack>
  ) ;

}

export default CSCI1010