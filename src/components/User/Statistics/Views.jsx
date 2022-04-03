import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const chartOptions = {
    responsive: true,
    scales: {
        x: {
            grid: {
                display: false,
            }
        },
        y: {
            ticks: {
                // Include a dollar sign in the ticks
                callback: function (value: any, index: any, ticks: any) {
                    return `${value} views`;
                }
            }
        }
    },
    plugins: {
        legend: {
            display: false,
        },

    }
};

const labels = ['20221-12-05', '2021-12-12', '2021-12-19', '2021-12-26', '2022-01-02'];
const datapoints = [0.5, 0.3, 0.6, 0.2, 1];

export const data = {
    labels,
    datasets: [
        {
            data: datapoints,
            borderColor: '#6093B6',
            backgroundColor: '#0038FF',
            tension: 0.4,
            fill: true,
        }
    ],
};

const Views = () => {
    return (
        <div className="flex items-center justify-center pb-8 px-4">
            <div className="w-11/12">
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h1 className='font-[600] text-2xl flex items-center mb-16'>Statistics</h1>
                        <div className="lg:flex w-full justify-between">

                            <h3 className="text-gray-600 dark:text-gray-400 leading-5 text-base md:text-xl font-bold">Total Views</h3>
                            <div className="flex items-center justify-between lg:justify-start mt-2 md:mt-4 lg:mt-0">
                            </div>
                        </div>
                        <div className="flex items-end mt-6">
                            <h3 className="text-gray-900 leading-5 text-xs md:text-sm">Total Views: 0</h3>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Line options={chartOptions} data={data} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Views
