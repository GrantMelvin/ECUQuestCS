import React, { useContext, useEffect, useState } from 'react'
import { AccountContext } from './AccountContext';
import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
    Text,
    Stack,
    Tooltip,
    Box,
    useColorMode,
    useColorModeValue
  } from '@chakra-ui/react'
import axios from 'axios';
import { useNavigate } from 'react-router';

const ExperienceBar = () => {

  const classes = 
  ["Primitive Data Types", 
  "Input / Output", 
  "Loops",
  "Arrays", 
  "Pointers", 
  "Structures",
  "Linked Lists", 
  "Stacks", 
  "Binary Trees"]

    const {user} = useContext(AccountContext) 
    const navigate = useNavigate();

    const [currentClass, setCurrentClass] = useState(0)
    const [currentCourse, setCurrentCourse] = useState(0)

    const green = useColorModeValue('#56AE57', '#A1ECA7')
    const yellow = useColorModeValue('#FEB983', '#F7EDBE')
    const red = useColorModeValue('red', '#F77B7A')

    useEffect(() => {
      axios({
        method: 'post',
        url: 'http://localhost:4000/auth/getClasses',
        headers: {
            'content-type': 'application/json',
        },
        data: user
      })
      .then(response => {
          setCurrentClass(response.data)
          setCurrentCourse((Math.floor(response.data / 3)))
      })
    },[])

    const steps = [
        { description: 'CSCI 1010', link: '/CSCI1010', classList: classes.slice(0,3), range:[0,1,2]},
        { description: 'CSCI 2530', link: '/CSCI2530', classList: classes.slice(3,6), range:[3,4,5]},
        { description: 'CSCI 2540', link: '/CSCI2540', classList: classes.slice(6,9), range:[6,7,8]},
      ]
      
    return (
        <Stack>
          <Stepper size='sm' index={currentCourse} gap='0'>
            {steps.map((step, index) => {
            return (
                <Step key={index}>
                    <StepIndicator>
                        <StepStatus 
                        incomplete={<StepNumber />}
                        active={<StepNumber />}
                        complete={<StepIcon />} />
                    </StepIndicator>
                    <Box flexShrink='0'>
                      <StepTitle 
                      className='stepItem'
                      onClick={() => {
                        navigate(step.link)
                      }}>{step.description}</StepTitle>
                      <StepDescription 
                      color={step.range[0] > currentClass ? red : 
                             step.range[0] < currentClass ? green :
                             yellow}>
                        {step.classList[0]}
                      </StepDescription>
                      <StepDescription 
                      color={step.range[1] > currentClass ? red : 
                             step.range[1] < currentClass ? green :
                             yellow}>
                        {step.classList[1]}
                      </StepDescription>
                      <StepDescription 
                      color={step.range[2] > currentClass ? red : 
                             step.range[2] < currentClass ? green :
                             yellow}>
                        {step.classList[2]}
                        </StepDescription>
                    </Box>
                <StepSeparator _horizontal={{ ml: '0' }} />
                </Step>
              )})}
          </Stepper>
          <Text align='right'>
            <b>Next Quest: {steps[currentCourse].description} - {classes[currentClass]} </b>
          </Text>
        </Stack>
    )
}

export default ExperienceBar