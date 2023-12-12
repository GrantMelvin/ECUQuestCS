import { Card, CardFooter, Stack, 
Button, Divider, Text,
Heading, Image, CardBody, useColorModeValue } from "@chakra-ui/react" ;
import { useNavigate } from "react-router";
import Sidebar from "../../components/Navbar/Navbar";
import { useContext, useState } from "react";
import { AccountContext } from "../../components/AccountContext";
import axios from "axios";

const Cards = ({...props}) => {
  const navigate = useNavigate();

  const itemColor = useColorModeValue('#EDF3FC','#161A23') ;
  const letterColor = useColorModeValue('black','#white') ;

  const {user, setUser} = useContext(AccountContext) ;

  const setTopic = () => {
    axios({
      method: 'post',
      url: 'http://localhost:4000/auth/classTopic',
      headers: {
        'content-type': 'application/json',
      },
      data: {
        user: user,
        topic: props.topic
      }
    })
    .then(response => {
      setUser(response.data)
      navigate(props.link)
    })
    
  }

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

            <Heading size='md'color={letterColor}> {props.title} </Heading>
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
          onClick = {() => 
            setTopic(props.set) 
            }>
              Practice
          </Button>

        </CardFooter>

      </Card>
    ) ;
} ;

export default Cards ;