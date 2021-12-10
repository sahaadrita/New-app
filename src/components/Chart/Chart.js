import react from "react";
import ChartBar from './ChartBar'
import './Chart.css'
import styled from "styled-components";
const Chart = props =>{
    const dataPointValues=props.dataPoints.map(dataPoint=>dataPoint.value)
const totalMaximum=Math.max(...dataPointValues)

const FormControl = styled.div`
 
    padding: 1rem;
    border-radius: 12px;
    background-color: #f8dfff;
    text-align: center;
    display: flex;
    justify-content: space-around;
    height: 10rem;
`
return (
    <FormControl>
    {/* <div className="chart"> */}
     {props.dataPoints.map(dataPoint => <ChartBar
      key ={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label}/>)}
    {/* </div> */}
    </FormControl>
)
}
export default Chart;