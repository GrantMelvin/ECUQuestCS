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


    const [communityNotes, setCommunityNotes] = useState([])
    const [leaderboard, setLeaderboard] = useState([])

    const [text, setText] = useState('');

    const [loading, setLoading] = useState(false)

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
            setLoading(true)
            axios({
                method: 'post',
                url: 'http://localhost:4000/auth/CommunityNotes',
                headers: {
                    'content-type': 'application/json',
                }
            }).then(response => {
                setCommunityNotes(response.data)
            })

            axios({
                method: 'post',
                url: 'http://localhost:4000/auth/leaderboards',
                headers: {
                    'content-type': 'application/json',
                }
            }).then(response => {
                setLeaderboard(response.data)
                setLoading(false)
            })
            
            effectRan.current = true
        }
    // let timeout
    // if (isVisible) {
    // timeout = setTimeout(() => {
    //         onClose();
    //     }, 3000);
    // }
    // return () => clearTimeout(timeout);
    }, [communityNotes, loading]);

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
        h='90vh'
        mt='5vh'>

            {(!loading) && <AnimatePage w='100%' h='100%'>

            <HStack w='100%' h='100%'>

            <VStack w='30%' ml='3%' vh='60vh' >
                
                <Box 
                align='center' 
                w='100%'
                h='60vh'>
                <Feature
                w='100%'
                h='60%'
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
                                <Box w='55%'>
                                    <Text>{bounty.name}</Text>
                                </Box>
                                <Box w='45%'>
                                    <Text>{bounty.value}</Text>
                                </Box>
                            </HStack>

                        )})}
                        </VStack>
                    </Box>
                }
                />
                <Feature
                w='100%'
                h='40%'
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

            <VStack 
            w='40%'
            h='60vh'>

                <Feature
                    title={'Leaderboards'}
                    w='100%'
                    h='60vh'
                    align='center'
                    desc={
                        <VStack w='100%' h='100%' mt='-1vh'>
                            <HStack w='100%'>
                            <Box w='50%'>
                                <Text>Name</Text>
                            </Box>
                            <Box w='50%'>
                                <Text>Points</Text>
                            </Box>
                            </HStack>
                            <Divider/>
                        {leaderboard.map((leader, index) => {
                        return (
                            <HStack w='100%' key={index} h='3vh'>
                                <Box w='50%'>
                                    <Text>{leader.firstname + ' ' + leader.lastname}</Text>
                                </Box>
                                <Box w='50%'>
                                    <Text>{leader.points}</Text>
                                </Box>
                            </HStack>
                        )})}
                        </VStack>
                    }
                    />
            </VStack>

            <VStack 
            w='30%' 
            h='60vh'>
                <Feature 
                title={'Community Notes'} 
                w='100%'
                h='100%'
                overflowX="auto"
                whiteSpace="wrap"
                overflowY="auto"
                desc={communityNotes.map((note, index) => {
                    const numberOfLines = calculateNumberOfLines(note.description);
                    return (
                    <Box key={index} w='100%' h='20vh'>
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
                
                    
                {/* <Box w='100%' h='3vh' align='center' mt='1vh'>
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
                </Box>    */}
            </VStack>

            </HStack>
            

            <Box w='100%' h='5vh' align='center' mt='1%'>           
                <Box w='90%' h='5vh' align='center'>
                    <ExperienceBar/>  
                </Box>  
            </Box>
            

            </AnimatePage>}
        </VStack>
        
    ) ;

}

export default Dashboard ;