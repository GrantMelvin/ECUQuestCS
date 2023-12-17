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
    Tooltip
  } from '@chakra-ui/react'
import axios from 'axios';

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

    const [currentClass, setCurrentClass] = useState(0)
    const [currentCourse, setCurrentCourse] = useState(0)
    

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
        { title: 'First', description: 'CSCI1010', classList: classes.slice(0,3)},
        { title: 'Second', description: 'CSCI2530', classList: classes.slice(3,6)},
        { title: 'Third', description: 'CSCI2540', classList: classes.slice(6,9)},
      ];
      
    const { activeStep, setActiveStep } = useSteps({
        index: currentCourse,
        count: steps.length,
    })
    
    const activeStepText = steps[activeStep].description
    return (
        <>
        <Stack>
          <Stepper size='sm' index={activeStep} gap='0'>
            {steps.map((step, index) => {
            return (
                <Step key={index} gap='0'>
                    <StepIndicator>
                        <StepStatus complete={<StepIcon />} />
                    </StepIndicator>
                <StepSeparator _horizontal={{ ml: '0' }} />
                </Step>
              )})}
          </Stepper>
          <Text align='right'>
            <b>Next Quest: {activeStepText} - {classes[currentClass]} </b>
          </Text>
        </Stack>
      </>
    )
}

export default ExperienceBar