import { HStack, VStack, useColorModeValue} from '@chakra-ui/react';
import Sidebar from "../../Navbar/Navbar";
import Cards from './Cards';
import arrays from '../../imgs/arrays.png'
import struct from '../../imgs/house.png'
import structLight from '../../imgs/houseLight.png'
import pointers from '../../imgs/pointers.png'
import pointersLight from '../../imgs/pointersLight.png'

function CSCI2530() {

  const housePic = useColorModeValue(struct, structLight) ;
  const pointersPic = useColorModeValue(pointers, pointersLight) ;

  return(
    <HStack
    spacing={100}
    >

      <VStack>
        {Sidebar()} 
      </VStack>

      <VStack
      spacing={25}
      >
        <Cards
        img={arrays}
        alt="arrays"
        title="Arrays"
        desc="Practice intermediate questions with arrays!"
        link="/Arrays"
        />
      </VStack>
      <VStack
      spacing = {25}
      >
        <Cards
        img={pointersPic}
        alt="pointers"
        title="Pointers"
        desc="Learn about pointers!"
        link="/Pointers"
        />
      </VStack>
      <VStack
      spacing = {25}>
      <Cards
        img={housePic}
        alt="Structures"
        title="Structures"
        desc="Practice Structures!"
        link='/Structs'
        />
      </VStack>
    </HStack>
  ) ;

}

export default CSCI2530