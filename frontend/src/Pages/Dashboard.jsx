import Sidebar from "../components/Navbar/Navbar";
import { HStack, VStack, Text, Button, Box, Divider } from '@chakra-ui/react';
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


const Dashboard = () => {
    const {user} = useContext(AccountContext) ;

    const itemColor = useColorModeValue('black','white') ;
    const lineColor = useColorModeValue('#161A22','#EDF3FC') ;

    const effectRan = useRef(false) ;
    const navigate = useNavigate();

    const [recommendations, setRecommendations] = useState([])
    const [articles, setArticles] = useState([['Loading',''], ['Loading',''], ['Loading',''],])

    const [communityNotes, setCommunityNotes] = useState([])


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
        effectRan.current = true ;
      }}, [communityNotes]);

      const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours() % 12 || 12; // Convert to 12-hour format
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
      
        return `${month}/${day} ${hours}:${minutes} ${ampm}`;
      };

    return(
        
        <VStack 
        w='100vw'
        h='85vh'
        mt='10vh'>

            <AnimatePage w='100%' h='100%'>

            <HStack w='100%'  h='100%'>

            <VStack w='25%'>
                {/* <Box>
                    <Text as='b'
                    fontSize={'3xl'}
                    className='header'>
                    {'Greetings, ' + user.firstname + '!'}
                    </Text>
                </Box> */}

                <Feature
                w='100%'
                title={'We recommend you work on the following question sets:'}
                desc={
                    <center>
                        <ul
                        className='listItems'>
                            <li>
                                {recommendations[0]}
                            </li>
                            <li>
                                {recommendations[1]}
                            </li>
                            <li>
                                {recommendations[2]}
                            </li>
                        </ul>
                    </center>
                }
                />
                
                <Button
                colorScheme={'teal'}
                onClick={() => {
                    navigate("/Missed")
                }}>
                    Practice some of the questions you've missed
                </Button>

            </VStack>

            <HStack>
            <Bar
            user={user}
            title={'User Activity'}
            color={itemColor}
            lineColor={lineColor}
            /></HStack>

            <VStack w='25%'>

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

            <VStack w='30%' h='100%'>
                <Feature title={'Community Notes'} 
                w='100%'
                desc={ communityNotes.map((note, index) => (
                    <Box key={index} w='100%' h='15vh'>
                        <Divider></Divider>
                        <Text fontWeight={'bold'}>{note.title} - {formatDate(note.created_at)}</Text>
                        <Text>{note.description}</Text>
                    </Box>
                ))}>
                </Feature>
            </VStack>
            </HStack>
            </AnimatePage>
        </VStack>
        
    ) ;

}

export default Dashboard ;