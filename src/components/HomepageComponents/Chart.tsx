import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Financial Bar Chart',
        },
    },
};

const labels = ['Income', 'Expense', 'Current Balance', 'Saving'];

const target = localStorage.getItem('savingsTarget')
const currentSaving = localStorage.getItem('currentSaving')

export const data = {
    labels,
    datasets: [
        {
            label: 'Target',
            //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            data : target,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Saving',
            data : currentSaving,
            //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export function Chart() {
    return <Bar options={options} data={data} />;
}
