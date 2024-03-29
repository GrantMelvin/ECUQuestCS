import { AccountContext } from '../../../components/AccountContext';
import { useContext } from 'react';
import Sidebar from '../../../components/Navbar/Navbar';
import { HStack, VStack, Text, Button, Stack } from '@chakra-ui/react';
import React, {useState, useEffect, useRef } from 'react';
import { Form, Formik } from "formik";
import axios from 'axios' ;
import {getCurrentDate} from './Utility/getCurrentDate' ;

function Test({...props}) {
  const {user} = useContext(AccountContext) ;
  const effectRan = useRef(false) ;
  
  const [question, setQuestion] = useState("");
  const [userAnswer, setUserAnswer] = useState('initial') ;
  const [answered, setAnswered] = useState(false) ; 

  useEffect(() => { 
    if(effectRan.current === false){  
      axios({
        method: 'post',
        url: 'http://localhost:4000/auth/getMissed',
        headers: {
          'content-type': 'application/json',
        },
        data: {
          user: user
        }
      }).then(response => {
        setQuestion({...response.data})
        })
      }
    effectRan.current = true ;
  }, []);


  const nextQuestion = () => {
    setAnswered(false)
    axios({
      method: 'post',
      url: 'http://localhost:4000/auth/getMissed',
      headers: {
        'content-type': 'application/json',
      },
      data: {
        user: user
      }
    }).then(response => {
      setQuestion({...response.data})
      })
    
  }


  return(
    <Formik
    initialValues={{userAnswer: "initial"}}
    onSubmit={(values, actions) => {
      const date = getCurrentDate() ;
      const isCorrect = (userAnswer == question.answer ? 1 : 0) ;
      axios({
        method: 'post',
        url: 'http://localhost:4000/auth/missedResults',
        data: {
          email:user.email, 
          questiontype: props.type,
          questionid: question.ident, 
          submissionDate: date,
          correct: isCorrect
        }
      })
    }}
    >

    {(formik) => (
      <VStack w='100%' h='100%' mt='10vh'>
    
        <VStack 
        as={Form}
        className='questionBox' 
        direction="column" 
        spacing={10}> 


          <Text 
          as="p" 
          color={userAnswer == question.answer ? 'green' : 'red.400'}
          opacity={answered ? 1 : 0}
          fontSize='3xl'
          >
            {(userAnswer == question.answer ? 'Correct!' : 'Incorrect!')}
          </Text>

          <Text id="question" fontSize='4xl'>{question.desc}</Text>


          <Stack
          direction='column'
          spacing={8}
          align='center'
          opacity={answered ? .5 : 1}
          className={answered ? 'getLight' : 'getDark'}
          >

            <Button 
            colorScheme="teal" 
            type="submit" 
            className={question.a === 'None' ? 'hideQuestion' : 'showQuestion'}
            id={answered || question.a === 'None' ? 'notAllowQuestion' : 'allowQuestion'}
            value = '1'
            onClick={e => {
              setUserAnswer(e.target.value)
              setAnswered(true);
            }}
            >
                {question.a}
            </Button>
            <Button 
            colorScheme="teal" 
            type="submit" 
            className={question.b === 'None' ? 'hideQuestion' : 'showQuestion'}
            id={answered || question.b === 'None' ? 'notAllowQuestion' : 'allowQuestion'}
            value='2'
            onClick={e => {
              setUserAnswer(e.target.value)
              setAnswered(true);
            }}
            >
                {question.b}
            </Button>
            <Button 
            colorScheme="teal"    
            type="submit" 
            className={question.c === 'None' ? 'hideQuestion' : 'showQuestion'}
            id={answered || question.c === 'None' ? 'notAllowQuestion' : 'allowQuestion'}
            value='3'
            onClick={e => {
              setUserAnswer(e.target.value)
              setAnswered(true);
            }}
            >                   
                {question.c}
            </Button>
            <Button 
            colorScheme="teal" 
            type="submit" 
            className={question.d === 'None' ? 'hideQuestion' : 'showQuestion'}
            id={answered || question.d === 'None' ? 'notAllowQuestion' : 'allowQuestion'}
            value='4'
            onClick={e => {
              setUserAnswer(e.target.value)
              setAnswered(true);
            }}
            >
                {question.d}
            </Button>
          </Stack>


          <Button 
          id='next'
          colorScheme="blue" 
          opacity={(answered && question.ident !== 0) ? 1 : 0}
          pointerEvents={answered ? 'auto' : 'None'}
          marginRight='100%'
          onClick={() => {
            nextQuestion()
          }}
          >
            Next Question
          </Button>

        </VStack>    
      </VStack>
    )}
    </Formik>
  ) ;
}

export default Test ;