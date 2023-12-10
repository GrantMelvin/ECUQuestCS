import Sidebar from '../Navbar/Navbar'
import "../../App.css"
import { HStack, VStack, Text, Button } from '@chakra-ui/react';
import Feature from './Classes/Feature';
import { useContext } from 'react';
import { AccountContext } from '../AccountContext';
import Bar from './Charts/Line' ;
import { useColorModeValue } from '@chakra-ui/react' ;
import { useEffect, useRef } from 'react';
import axios from 'axios' ;
import { useState } from 'react';
import { useNavigate } from "react-router";


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
                findRecs(response.data)               
            })
      
          effectRan.current = true ;
        }
    },[])

    const findRecs = (response) => {

        const courses = ['Primitive', 'input/output', 'Loop', 'Array',
                        'Pointer', 'Structure', 'LinkedList', 'Stack', 'BinaryTree']
        let percentages = [
            [0, courses[0]],
            [0, courses[1]],
            [0, courses[2]],
            [0, courses[3]],    
            [0, courses[4]],
            [0, courses[5]],
            [0, courses[6]],
            [0, courses[7]],
            [0, courses[8]],
        ] ;

        response.forEach(element => {

            let correct = parseInt(element.num_correct)
            let incorrect = parseInt(element.num_incorrect)
            let total = parseInt(correct) + parseInt(incorrect)

            let accuracy = parseFloat(correct / total) ;

            let name = element.questiontype ;

            switch(element.questiontype){
                case courses[0]:
                    percentages[0] = [accuracy, name] ;
                    break ;
                case courses[1]:
                    percentages[1] = [accuracy, name] ;
                    break ;
                case courses[2]:
                    percentages[2] = [accuracy, name] ;
                    break ;
                case courses[3]:
                    percentages[3] = [accuracy, name] ;
                    break ;
                case courses[4]:
                    percentages[4] = [accuracy, name] ;
                    break ;
                case courses[5]:
                    percentages[5] = [accuracy, name] ;
                    break ;
                case courses[6]:
                    percentages[6] = [accuracy, name] ;
                    break ;
                case courses[7]:
                    percentages[7] = [accuracy, name] ;
                    break ;
                case courses[8]:
                    percentages[8] = [accuracy, name] ;
                    break ;
            }
        });

        let firstRec = 2 ;
        let secondRec = 2 ;
        let thirdRec = 2 ;

        let firstName = '' ;
        let secondName = '' ;
        let thirdName = '' ;

        for(let i = 0 ; i < percentages.length ; i++){
            let current = percentages[i][0] ;
            let currentName = percentages[i][1] ;

            if(firstRec > current){
                thirdRec = secondRec ;
                thirdName = secondName ;

                secondRec = firstRec ;
                secondName = firstName ;

                firstRec = current ;
                firstName = currentName ;

            }else if(secondRec > current){
                thirdRec = secondRec ;
                thirdName = secondName ;

                secondRec = current ;
                secondName = currentName ;

            }else if(thirdRec > current){
                thirdRec = current ;
                thirdName = currentName ;
            }
        }
        
        let recs = [firstName, secondName, thirdName]
        let counter = 0 ;

        recs.forEach(element => {
            switch(element){
            case courses[0]:
                recs[counter] = 'Primitive Data Types'
                counter = counter + 1 ;
                break ;
            case courses[1]:
                recs[counter] = 'Input / Output'
                counter = counter + 1 ;
                break ;
            case courses[2]:
                recs[counter] = 'Loops'
                counter = counter + 1 ;
                break ;
            case courses[3]:
                recs[counter] = 'Arrays'
                counter = counter + 1 ;
                break ;
            case courses[4]:
                recs[counter] = 'Pointers'
                counter = counter + 1 ;
                break ;
            case courses[5]:
                recs[counter] = 'Structures'
                counter = counter + 1 ;
                break ;
            case courses[6]:
                recs[counter] = 'Linked Lists'
                counter = counter + 1 ;
                break ;
            case courses[7]:
                recs[counter] = 'Stacks'
                counter = counter + 1 ;
                break ;
            case courses[8]:
                recs[counter] = 'Binary Trees'
                counter = counter + 1 ;
                break ;
           }
        })
        
        setRecommendations(recs) ;
        findArts(recs) ;
    }
    
    const findArts = (recs) => {
        let firstArt = [recs[0],''], secondArt = [recs[1],''], thirdArt =[recs[2],''] ;

        let arts = [firstArt, secondArt, thirdArt] ;
        let counter = 0 ;

        arts.forEach(element => {
            switch(element[0]){
            case 'Primitive Data Types':
                arts[counter][1] = 'https://www.scaler.com/topics/cpp/data-types-in-cpp/'; 
                counter = counter + 1 ;
                break ;
            case 'Input / Output':
                arts[counter][1] = 'https://www.geeksforgeeks.org/basic-input-output-c/'; 
                counter = counter + 1 ;
                break ;
            case 'Loops':
                arts[counter][1] = 'https://www.educba.com/loops-in-c-plus-plus/'; 
                counter = counter + 1 ;
                break ;
            case 'Arrays':
                arts[counter][1] = 'https://www.simplilearn.com/tutorials/cpp-tutorial/cpp-array#:~:text=array%20in%20detail.-,What%20Is%20C%2B%2B%20Array%3F,the%20size%20of%20the%20array.'; 
                counter = counter + 1 ;
                break ;
            case 'Pointers':
                arts[counter][1] = 'https://www.scaler.com/topics/cpp/pointers-in-cpp/'; 
                counter = counter + 1 ;
                break ;
            case 'Structures':
                arts[counter][1] = 'https://www.w3schools.com/cpp/cpp_structs.asp#:~:text=Structures%20(also%20called%20structs)%20are,%2C%20bool%2C%20etc.).'; 
                counter = counter + 1 ;
                break ;
            case 'Linked Lists':
                arts[counter][1] = 'https://www.bitdegree.org/learn/linked-list-c-plus-plus#:~:text=%2B%2B%3A%20Useful%20Tips-,What%20is%20a%20Linked%20List%20in%20C%2B%2B%3F,next%20and%20the%20previous%20node.'; 
                counter = counter + 1 ;
                break ;
            case 'Stacks':
                arts[counter][1] = 'https://www.softwaretestinghelp.com/stack-in-cpp/'; 
                counter = counter + 1 ;
                break ;
            case 'Binary Trees':
                arts[counter][1] = 'http://cslibrary.stanford.edu/110/BinaryTrees.html'; 
                counter = counter + 1 ;
                break ;
            }
        })

        setArticles(arts) ;

    }

    return(
        <HStack w='100vw'>
            <VStack>{Sidebar()}</VStack>

            <HStack>
            <VStack>
                <Text as='b'
                fontSize={'3xl'}
                className='header'>
                {'Greetings, ' + user.firstname + '!'}
                </Text>

                <Feature
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

            <HStack w={600} h={600}><Bar
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
        </HStack>
    ) ;

}

export default Dashboard ;