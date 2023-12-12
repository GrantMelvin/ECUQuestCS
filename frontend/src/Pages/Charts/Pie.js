import { useColorModeValue } from '@chakra-ui/react' ;
import axios from 'axios' ;
import React, {useState, useEffect } from 'react' ;
import Chart from 'react-apexcharts' ;


const PieCharts = ({...props}) => {


    const [answers, setAnswers] = useState([])

    const itemColor = useColorModeValue('black','white') ;
    
    const questionTotal = 10 ;

    const [useTitle, setUseTitle] = useState("") ;

    const [loading, setLoading] = useState(true)

    useEffect(() => { 
        let trueQuest = 0
        let falseQuest = 0
        
        const fetchData = async () => {
          await axios({
          method: 'post',
          url: 'http://localhost:4000/auth/getResults',
          headers: {
            'content-type': 'application/json',
          },
          data: {
            user: props.user,
            questiontype: props.type
          }
        })
        .then(response => {
            for(let i = 0 ; i < response.data.length ;i++){
                if(response.data[i].correct === 1){
                  trueQuest = trueQuest + 1 ;
                }else{
                  falseQuest = falseQuest + 1 ;
                }
            }
            let unanswered = questionTotal - trueQuest - falseQuest ;
            if(unanswered !== questionTotal){
              setUseTitle(props.title)
              setAnswers([trueQuest,falseQuest, unanswered]) ;
            }
            setLoading(false)
        })}
        fetchData() ;
    },[]);   


    return (
      <>
      {(loading) ? <></> : 
      <Chart 
        type="pie"
        width={225}
        height={200}

        series={answers}                

        options={{
            title:{ 
              text: useTitle,
              align: 'center',
            style:{
              color: itemColor
              }
            } , 
            noData:{text:""},                        
            colors:["#7cf576","#f5769c", "#7c76f5"],
            labels:['correct', 'incorrect', 'unanswered'],
            dataLabels: {
              enabled: false,
            },
            legend:{
              show: false,
              labels:{
                colors: itemColor
              },
              onItemClick: {
                toggleDataSeries: true
            },
            onItemHover: {
              highlightDataSeries: true
          },
            }
          }}
        >
        </Chart> }
        </>
    )
}

export default PieCharts