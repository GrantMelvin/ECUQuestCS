import { Card, CardFooter, Stack, 
Button, Divider, Text,
Heading, Image, CardBody, useColorModeValue } from "@chakra-ui/react" ;
import { useNavigate } from "react-router";


const Cards = ({...props}) => {
  const navigate = useNavigate();

  const itemColor = useColorModeValue('#EDF3FC','#161A23') ;
  const letterColor = useColorModeValue('black','#white') ;


    return(
        <Card 
        maxW='sm'
        bg= {itemColor}
        border="1px"
        >
        <CardBody>
          <Image
            src={props.img}
            alt={props.alt}
            borderRadius='md'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'
            color={letterColor}>{props.title}</Heading>
            <Text
            color={letterColor}>
              {props.desc}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button 
          variant='link' 
          color={letterColor}
          onClick = {() => navigate(props.link)}>
              Practice
          </Button>
        </CardFooter>
      </Card>
    ) ;
} ;

export default Cards ;