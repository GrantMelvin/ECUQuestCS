import { HStack, VStack, useColorModeValue} from '@chakra-ui/react'
import Sidebar from '../../../components/Navbar/Navbar'
import Cards from '../Cards'

import arrays from '../../../components/imgs/arrays.png'
import struct from '../../../components/imgs/house.png'
import structLight from '../../../components/imgs/houseLight.png'
import pointers from '../../../components/imgs/pointers.png'
import pointersLight from '../../../components/imgs/pointersLight.png'


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
        topic='Array'
        alt="arrays"
        title="Arrays"
        desc="Practice intermediate questions with arrays!"
        link="/Question"
        />
      </VStack>
      <VStack
      spacing = {25}
      >
        <Cards
        img={pointersPic}
        topic='Pointer'
        alt="pointers"
        title="Pointers"
        desc="Learn about pointers!"
        link="/Question"
        />
      </VStack>
      <VStack
      spacing = {25}>
      <Cards
        img={housePic}
        topic='Structure'
        alt="Structures"
        title="Structures"
        desc="Practice Structures!"
        link='/Question'
        />
      </VStack>
    </HStack>
  ) ;

}

export default CSCI2530