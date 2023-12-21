import {Box, Heading, Text, Tooltip, HStack} from "@chakra-ui/react"
import {InfoIcon} from '@chakra-ui/icons'

function Feature({ title, desc, ...rest }) {
    return (
      <Box 
      p={5} 
      shadow='lg' 

      {...rest}
      >
        <HStack w='100%'>
          <Box w='90%'>
            <Heading fontSize='xl' fontFamily={'MedievalSharp'} >
              {title} 
            </Heading>
          </Box>
          <Box w='10%'>
            <Tooltip label={'asdnaoedneosjfnosefnoesnfousnfouerfneorfnewoiufnweoj'}>
              <InfoIcon/>
            </Tooltip>
          </Box>
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