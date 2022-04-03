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
                callback: function (value, index, ticks) {
                    return `${value}K`;
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

const labels = ['1', '5', '10', '15'];
const datapoints = [50, 150, 250, 200, 150];

export const data = {
    labels,
    datasets: [
        {
            data: datapoints,
            borderColor: '#1E1E1F',
            backgroundColor: '',
            tension: 0.6,
            fill: true,
        }
    ],
};

const VisitorsChart = () => {
    return (
        <Line options={chartOptions} data={data} />
    )
}

export default VisitorsChart
