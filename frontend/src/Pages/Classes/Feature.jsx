import {Box, Heading, Text, Tooltip, HStack} from "@chakra-ui/react"
import {InfoIcon} from '@chakra-ui/icons'

function Feature({ title, desc, sx, ...rest }) {
    return (
      <Box 
      p={5} 
      shadow='lg' 
      {...rest}
      >
        <HStack w='100%'>
          <Box w='100%'>
            <Heading fontSize='xl' fontFamily={'MedievalSharp'} >
              {title} 
            </Heading>
          </Box>
          {sx ? 
          <Box w='1%'>
            <Tooltip label={sx.tooltip} placement='top'>
              <InfoIcon/>
            </Tooltip>
          </Box> : ''}
          </HStack>
        <Text 
        mt={4}
        >
        {desc}
        </Text>
      </Box>
    )
}

export default Feature ;