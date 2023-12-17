import Sidebar from "../components/Navbar/Navbar";
import { HStack, VStack, Text, Button, Box, Divider, Input, Textarea, ScaleFade, Alert, AlertIcon, AlertDescription, AlertTitle, Tooltip } from '@chakra-ui/react';
import Feature from './Classes/Feature';
import { useContext } from 'react';
import { AccountContext } from "../components/AccountContext";
import Bar from './Charts/Line' ;
import { useColorModeValue } from '@chakra-ui/react' ;
import { useEffect, useRef } from 'react';
import axios from 'axios' ;
import { useState } from 'react';
import { useNavigate } from "react-router";
import AnimatePage from '../components/AnimatePage'
import { FaArrowRightLong } from "react-icons/fa6";
import { useDisclosure } from "@chakra-ui/react";
import ExperienceBar from "../components/ExperienceBar";


const Dashboard = () => {
    const {user} = useContext(AccountContext) ;

    const itemColor = useColorModeValue('black','white') ;
    const lineColor = useColorModeValue('#161A22','#EDF3FC') ;

    const effectRan = useRef(false) ;
    const navigate = useNavigate();

    const [recommendations, setRecommendations] = useState([])
    const [articles, setArticles] = useState([['Loading',''], ['Loading',''], ['Loading',''],])

    const [communityNotes, setCommunityNotes] = useState([])

    const [text, setText] = useState('');

    const [bounties, setBounties] = useState([{'name': 'Primitive Data Types',
                                               'value': '1.5x'}, 
                                               {'name': 'Arrays',
                                               'value': '3x'}, 
                                               {'name': 'Structures',
                                               'value': '5x'}, ])

    const {
        isOpen: isVisible,
        onClose,
        onOpen,
      } = useDisclosure({ defaultIsOpen: false })


    useEffect(() => { 
    if(effectRan.current === false){  
    axios({
        method: 'post',
        url: 'http://localhost:4000/auth/CommunityNotes',
        headers: {
            'content-type': 'application/json',
        }
    })
    .then(response => {
        setCommunityNotes(response.data)
    })
        effectRan.current = true
    }
    let timeout
    if (isVisible) {
    timeout = setTimeout(() => {
            onClose();
        }, 3000);
    }
    return () => clearTimeout(timeout);
    }, [communityNotes, isVisible]);

      const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours() % 12 || 12; // Convert to 12-hour format
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
      
        return `${month}/${day} ${hours}:${minutes} ${ampm}`;
      };

    const handleChange = (content) => {
        setText(content.target.value)
    };

    // totally fucking arbitrary
    const calculateNumberOfLines = (text) => {
        return text.length / 42;
      };

    return(
        
        <VStack 
        w='100vw'
        h='85vh'
        mt='10vh'>

            <AnimatePage w='100%' h='100%'>

            <HStack w='100%' h='100%'>

            <VStack w='30%'ml='3%'>
                
                <Box align='center' w='100%'>

                <Feature
                w='100%'
                title={'Bounty Quests'}
                desc={
                    <Box w='100%' h='100%'>
                        <HStack w='100%'>
                            <Box w='50%'>
                                <Text>Quest Name</Text>
                            </Box>
                            <Box w='50%'>
                                <Text>Quest Value</Text>
                            </Box>
                        </HStack>
                        <Divider/>
                        <VStack>
                        {bounties.map((bounty, index) => {
                        return (
                            <HStack w='100%' key={index}>
                                <Box w='50%'>
                                    <Text>{bounty.name}</Text>
                                </Box>
                                <Box w='50%'>
                                    <Text>{bounty.value}</Text>
                                </Box>
                            </HStack>

                        )})}
                        </VStack>
                    </Box>
                }
                />
                {console.log(user)}
                <Feature
                w='100%'
                title={'Practice Missed Quests'}
                desc={
                    <Button
                    mt='1vh'
                    colorScheme={'teal'}
                    onClick={() => {
                        navigate("/Missed")
                    }}>
                        Practice 
                    </Button>
                }
                />

                </Box>
            
            </VStack>

            <VStack w='35%'>

                <Feature
                    title={'Article Recommendations:'}
                    desc={
                        <center>
                            <ul
                            className='listItems'>
                                <li>
                                    <Button
                                    onClick={() => {
                                        window.location.href=articles[0][1] ;
                                    }}
                                    colorScheme='teal'>
                                        {articles[0][0]}
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                    onClick={() => {
                                        window.location.href=articles[1][1] ;
                                    }}
                                    colorScheme='teal'>
                                        {articles[1][0]}
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                    onClick={() => {
                                        window.location.href=articles[2][1] ;
                                    }}
                                    colorScheme='teal'>
                                        {articles[2][0]}
                                    </Button>
                                </li>
                            </ul>
                        </center>
                    }
                    />
            </VStack>

            <VStack 
            w='30%' 
            h='60vh'>
                <Feature 
                title={'Community Notes'} 
                w='100%'
                h='80%'
                overflowX="auto"
                whiteSpace="wrap"
                overflowY="auto"
                desc={communityNotes.map((note, index) => {
                    const numberOfLines = calculateNumberOfLines(note.description);
                    return (
                    <Box key={index} w='100%' h='12vh'>
                        <Divider></Divider>
                        <Text fontWeight={'bold'}>{note.title} - {formatDate(note.created_at)}</Text>
                        <Box>
                            {numberOfLines > 3 ? 
                            <Tooltip label={note.description} placement='left-start'>
                                <Text noOfLines={3}>{note.description}</Text>
                            </Tooltip>
                            :
                            <Text noOfLines={3}>{note.description}</Text>}
                            
                        </Box>
                        
                    </Box>
                )})}>
                </Feature>
                
                    
                <Feature 
                title={'Submit feedback'} 
                align='center'
                w='100%'
                h='30%'
                desc={
                    <HStack>
                        <Textarea resize={'none'} onChange={handleChange} value={text}/>
                        <Button onClick={() => {
                            setText('')
                            onOpen()
                        }}><FaArrowRightLong/></Button>
                    </HStack>
                }>
                </Feature>

                <Box w='100%' h='3vh' align='center' mt='1vh'>
                    <Box w='50%' h='3vh' align='center'>
                        <ScaleFade initialScale={.1} in={isVisible}>
                            {isVisible ? (
                                <Alert status='success' rounded={10}>
                                <AlertIcon />
                                <Box w='100%' h='100%'>
                                <AlertTitle>Success</AlertTitle>
                                <AlertDescription>
                                    Thank you for your feedback!
                                </AlertDescription>
                                </Box>
                            </Alert>
                            ) : ''}
                        </ScaleFade>
                    </Box>
                </Box>   
            </VStack>

            </HStack>
            

            <Box w='100%' h='5vh' align='center' mt='3%'>           
                <Box w='90%' h='5vh' align='center'>
                    <ExperienceBar/>  
                </Box>  
            </Box>
            

            </AnimatePage>
        </VStack>
        
    ) ;

}

export default Dashboard ;