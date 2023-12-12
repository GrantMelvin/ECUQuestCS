import {Box, Heading, Text } from "@chakra-ui/react"

function Feature({ title, desc, ...rest }) {
    return (
      <Box 
      p={5} 
      shadow='lg' 

      {...rest}
      >
        <Heading fontSize='xl'>{title}</Heading>
        <Text 
        mt={4}
        >
        {desc}
        </Text>
      </Box>
    )
}

export default Feature ;