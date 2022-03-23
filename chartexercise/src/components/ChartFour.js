import React from "react";
import { PolarArea } from "react-chartjs-2";

const ChartFour = () => {
    return (
        <>
   <div className="exArea">
            <PolarArea data= {{
        labels: ['Cats', 'Birds', 'Dogs', 'Horses'],
        datasets: [{
            label: 'Animals with Covid',
            data: [13, 22, 6, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],

            borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            
        }]
    }} height={200} width={300} option={{}}
            
            />
            
        </div>
        </>
    )
}

export default ChartFour

;