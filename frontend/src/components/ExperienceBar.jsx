import React, { useContext, useEffect } from 'react'
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

const ExperienceBar = () => {

    useEffect(() => {
    
        
    },[])

    const {user} = useContext(AccountContext) ;

    const steps = [
        { title: 'First', description: 'CSCI1010', classes: ["Primitive Data Types", 
                                                              "Input / Output", 
                                                              "Loops"]},
        { title: 'Second', description: 'CSCI2530', classes: ["Arrays", 
                                                              "Pointers", 
                                                              "Structures"]},
        { title: 'Third', description: 'CSCI2540', classes: ["Linked Lists", 
                                                              "Stacks", 
                                                              "Binary Trees"]},
      ];
      
    const { activeStep, setActiveStep } = useSteps({
        index: 0,
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
                  {console.log(step.classes)}
                    <StepIndicator>
                        <StepStatus complete={<StepIcon />} />
                    </StepIndicator>
                <StepSeparator _horizontal={{ ml: '0' }} />
                </Step>
              )})}
          </Stepper>
          <Text align='right'>
            <b>Next Quest: {activeStepText}</b>
          </Text>
        </Stack>
      </>
    )
}

export default ExperienceBar