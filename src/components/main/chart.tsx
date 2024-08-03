import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { Line } from 'react-chartjs-2';
import { DiagnosisHistory } from "../../utils/types";

Chart.register(CategoryScale);

export const ChartWidget = ({ history }: { history: DiagnosisHistory[] | undefined }) => {

    return <Line
        height={242}
        width={470}

        data={{
            labels: history?.map(h => `${h.month.substring(0, 3)}, ${h.year}`),
            datasets: [
                {
                    label: "Systolic",
                    data: history?.map(h => h.blood_pressure.systolic.value),
                    borderColor: "#E66FD2",
                    borderWidth: 2,
                    tension: 0.4,
                    pointRadius: 14 / 2,
                    pointBorderColor: '#F4F0FE',
                    pointBorderWidth: 1,
                    pointBackgroundColor: '#E66FD2'
                },
                {
                    label: "Diastolic",
                    data: history?.map(h => h.blood_pressure.diastolic.value),
                    borderColor: "#8C6FE6",
                    borderWidth: 2,
                    tension: 0.4,
                    pointRadius: 14 / 2,
                    pointBorderColor: '#F4F0FE',
                    pointBorderWidth: 1,
                    pointBackgroundColor: '#8C6FE6',
                },
            ]
        }}

        
        options={{
            scales: {
                'x': {
                    grid: {
                        display: false,
                    }
                },
            },
            plugins: {
                title: {
                    display: false,
                },
                legend: {
                    display: false,
                }
            }
        }}
    />;
}