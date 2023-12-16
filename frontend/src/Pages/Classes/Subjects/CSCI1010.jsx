import { HStack, VStack, useColorModeValue } from '@chakra-ui/react'
import Cards from '../Cards'
import prim from '../../../components/imgs/prim.png'
import loops from '../../../components/imgs/loops.png'
import loopsLight from '../../../components/imgs/loopsLight.png'
import io from '../../../components/imgs/io.png'
import AnimatePage from '../../../components/AnimatePage'

function CSCI1010() {
  const loopsPic = useColorModeValue(loops, loopsLight) ;

  return(
    <AnimatePage>
    <VStack
    w='100%'
    h='100%'
    mt='10vh'
    >
      <HStack w='100%' h='100%' >

        <VStack
        w='33%'
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
        w='33%'
        >
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
        w='33%'
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
    </VStack>
    </AnimatePage>
  ) ;

}

export default CSCI1010