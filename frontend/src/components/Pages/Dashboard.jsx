import Sidebar from '../Navbar/Navbar'
import "../../App.css"
import { HStack, VStack, Text, Button, Box } from '@chakra-ui/react';
import Feature from './Classes/Feature';
import { useContext } from 'react';
import { AccountContext } from '../AccountContext';
import Bar from './Charts/Line' ;
import { useColorModeValue } from '@chakra-ui/react' ;
import { useEffect, useRef } from 'react';
import axios from 'axios' ;
import { useState } from 'react';
import { useNavigate } from "react-router";
import AnimatePage from '../AnimatePage';


const Dashboard = () => {
    const {user} = useContext(AccountContext) ;

    const itemColor = useColorModeValue('black','white') ;
    const lineColor = useColorModeValue('#161A22','#EDF3FC') ;

    const effectRan = useRef(false) ;
    const navigate = useNavigate();

    const [recommendations, setRecommendations] = useState([])
    const [articles, setArticles] = useState([['Loading',''], ['Loading',''], ['Loading',''],])

    useEffect(() => {
        if(effectRan.current === false){  
            axios({
              method: 'post',
              url: 'http://localhost:4000/auth/getRecs',
              headers: {
                'content-type': 'application/json',
              },
              data: {
                user: user
              }
            })
            .then(response => {
                console.log(response.data)               
            })
      
          effectRan.current = true ;
        }
    },[])

    return(
        
        <HStack w='100vw'>
            <VStack>{Sidebar()}</VStack>
            <AnimatePage w='100%'>
            <HStack w='100%'>
            <VStack w='100%'>
                <Box>
                    <Text as='b'
                    fontSize={'3xl'}
                    className='header'>
                    {'Greetings, ' + user.firstname + '!'}
                    </Text>
                </Box>

                <Feature
                w='50%'
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
            </HStack>

            <VStack>

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
            </AnimatePage>
        </HStack>
        
    ) ;

}

export default Dashboard ;