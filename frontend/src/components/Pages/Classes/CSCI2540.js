import { HStack, VStack, useColorModeValue } from '@chakra-ui/react';
import Sidebar from "../../SideBar/Sidebar";
import Cards from './Cards';
import stack from '../../imgs/stack.png'
import tree from '../../imgs/Binary_tree_v2.svg.png'
import treeLight from '../../imgs/Binary_tree_v2_light.svg.png'
import linkedList from '../../imgs/linkedlist.png'

function CSCI2540() {
  const treePic = useColorModeValue(tree, treeLight) ;

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
        img={linkedList}
        alt="Linked Lists"
        title="Linked Lists"
        desc="Practice the basics with Linked Lists!"
        link="/LinkedLists"
        />
      </VStack>
      <VStack
      spacing = {25}
      >
        <Cards
        img={stack}
        alt="Stacks"
        title="Stacks"
        desc="Practice Stacks!"
        link="/Stacks"
        />
      </VStack>
      <VStack
      spacing = {25}>
      <Cards
        img={treePic}
        alt="Binary Trees"
        title="Binary Trees"
        desc="Practice the basics with Binary Trees!"
        link="/BinaryTrees"
        />
      </VStack>
    </HStack>
  ) ;

}

export default CSCI2540