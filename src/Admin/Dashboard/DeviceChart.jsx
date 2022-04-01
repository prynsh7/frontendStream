import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: '#D8DEE8',
            borderColor: 'transparent',
            borderWidth: 1,
        },
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: '#909297',
            borderColor: 'transparent',
            borderWidth: 1,
        },
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: '#14121F',
            borderColor: 'transparent',
            borderWidth: 1,
        },
    ],
}

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },

    }
}

export function DeviceChart() {
    return (
        <div className='px-8 py-8'>
            <h1 className='font-[600] text-2xl'>Device</h1>
            <div className='px-4 my-4'>
                <Doughnut data={data} options={options} />
            </div>
            <div className='flex justify-between mt-6'>
                <div className='flex items-center gap-2'>
                    <div className='h-4 w-4 bg-[#14121F] rounded-full'></div>
                    <p className='text-xs font-semibold'>Desktop</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='h-4 w-4 bg-[#909297] rounded-full'></div>
                    <p className='text-xs font-semibold'>Mobile</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='h-4 w-4 bg-[#D8DEE8] rounded-full'></div>
                    <p className='text-xs font-semibold'>Others</p>
                </div>
            </div>
        </div>
    )
}
