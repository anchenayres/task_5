import React from "react";
import { Radar } from "react-chartjs-2";

const ChartOne = () => {
    return (
        <>
        <div className="exRadar">
            <Radar data= {{
        labels: ['South Africa', 'Hong Kong', 'Brazil', 'Japan', 'Italy', 'Greece'],
        datasets: [{
            label: 'Number of Covid Cases',
            data: [2, 20, 6, 4, 13, 16],
            backgroundColor: [
                'rgba(222, 247, 82, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(222, 247, 82, 0.2)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }} height={400} width={600} option={{}}
            
            />
            
        </div>
        </>
    )
}

export default ChartOne;