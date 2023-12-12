import { HStack, VStack, useColorModeValue } from '@chakra-ui/react';
import Sidebar from '../../../components/Navbar/Navbar';
import Cards from '../Cards';
import stack from '../../../components/imgs/stack.png'
import tree from '../../../components/imgs/Binary_tree_v2.svg.png'
import treeLight from '../../../components/imgs/Binary_tree_v2_light.svg.png'
import linkedList from '../../../components/imgs/linkedlist.png'



function CSCI2540() {
  const treePic = useColorModeValue(tree, treeLight) ;

  return(
    <VStack
    w='100%'
    h='100%'
    >

      <HStack mb='10vh'>
        {Sidebar()} 
      </HStack>


      <HStack w='100%'>
      <VStack
      w='33%'
      >
        <Cards
        img={linkedList}
        topic='LinkedList'
        alt="Linked Lists"
        title="Linked Lists"
        desc="Practice the basics with Linked Lists!"
        link="/Question"
        />
      </VStack>
      <VStack
      w='33%'
      >
        <Cards
        img={stack}
        topic='Stack'
        alt="Stacks"
        title="Stacks"
        desc="Practice Stacks!"
        link="/Question"
        />
      </VStack>
      <VStack
      w='33%'
      >
      <Cards
        img={treePic}
        topic='BinaryTree'
        alt="Binary Trees"
        title="Binary Trees"
        desc="Practice the basics with Binary Trees!"
        link="/Question"
        />
      </VStack>
      </HStack>
    </VStack>
    
  ) ;

}

export default CSCI2540