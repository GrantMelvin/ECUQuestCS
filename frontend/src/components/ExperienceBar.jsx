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
    Stack
  } from '@chakra-ui/react'

const ExperienceBar = () => {

    useEffect(() => {
    
        
    },[])

    const {user} = useContext(AccountContext) ;

    const steps = [
        { title: 'First', description: 'CSCI1010'},
        { title: 'Second', description: 'CSCI2530'},
        { title: 'Third', description: 'CSCI2540'},
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
                    <StepIndicator>
                        <StepStatus complete={<StepIcon />} />
                    </StepIndicator>
                <StepSeparator _horizontal={{ ml: '0' }} />
                </Step>)
            })}
          </Stepper>
          <Text align='right'>
            <b>Next Quest: {activeStepText}</b>
          </Text>
        </Stack>
      </>
    )
}

export default ExperienceBar