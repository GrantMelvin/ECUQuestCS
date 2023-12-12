import { HStack, VStack, useColorModeValue } from '@chakra-ui/react'
import Sidebar from '../../../components/Navbar/Navbar'
import Cards from '../Cards'
import prim from '../../../components/imgs/prim.png'
import loops from '../../../components/imgs/loops.png'
import loopsLight from '../../../components/imgs/loopsLight.png'
import io from '../../../components/imgs/io.png'

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
        topic="Primitive"
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
        topic="input/output"
        alt="Input and Output"
        title="Input / Output"
        desc="Practice the basics with input/ouput!"
        link='/Question'
        />
      </VStack>
      <VStack
      spacing={25}
      >
        <Cards
        img={loopsPic}
        topic="Loop"
        alt="Loops"
        title="Loops"
        desc="Practice the basics with Loops!"
        link='/Question'
        />
      </VStack>
    </HStack>
  ) ;

}

export default CSCI1010