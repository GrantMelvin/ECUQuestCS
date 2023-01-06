import axios from 'axios';
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from 'chart.js';
ChartJS.register(Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler);

const Bar = ({ ...props }) => {
  const [dates, setDates] = useState([]);

  const currentDate = new Date();

  const [currentWeek, setCurrentWeek] = useState(['initial']);
  const dayOfWeek = currentDate.getDay();

  useEffect(() => {
    let datesOfWeek = [];

    let day1 = 0, day2 = 0, day3 = 0, day4 = 0, day5 = 0, day6 = 0, day7 = 0 ;  

    const fetchData = async () => {
      await axios({
        method: 'post',
        url: 'http://localhost:4000/auth/getTimes',
        headers: {
          'content-type': 'application/json',
        },
        data: {
          user: props.user,
        },
      }).then((response) => {

        for (let i = 0; i < 7; i++) {
          const date = new Date(currentDate);
          date.setDate(currentDate.getDate() - dayOfWeek + i);
          datesOfWeek.push((date.getMonth()+1) + "/" + (date.getDate()));
        }

        setCurrentWeek(datesOfWeek);

        for (let i = 0; i < response.data.length; i++) {
          let dayOfQuestion = new Date (response.data[i].submissiondate).getDate() ;
          let monthofQuestion = new Date (response.data[i].submissiondate).getMonth() + 1
          dayOfQuestion = (monthofQuestion + "/" + dayOfQuestion)

          switch(dayOfQuestion.toString()){
            case datesOfWeek[0]:
              day1 = day1 + 1 ;
              break ;
            case datesOfWeek[1]: 
              day2 = day2 + 1 ;
              break ;
            case datesOfWeek[2]:
              day3 = day3 + 1 ;
              break ;
            case datesOfWeek[3]:
              day4 = day4 + 1 ;
              break ;
            case datesOfWeek[4]:
              day5 = day5 + 1 ;
              break ;
            case datesOfWeek[5]: 
              day6 = day6 + 1 ;
              break ;
            case datesOfWeek[6]:
              day7 = day7 + 1 ;
              break ;
          }
        }
        setDates([day1, day2, day3, day4, day5, day6, day7]) ;
      });
    };

    fetchData();
  }, []);

  const data = {
  labels: currentWeek,
  datasets: [{
    label: 'Weekly question activity',
    data: dates,
    fill: false,
    borderColor: props.lineColor,
    backgroundColor: props.color,
    tension: .4,
    }]
  };

  return (
    <Line data={data}>    
    </Line>
  );
};

export default Bar;