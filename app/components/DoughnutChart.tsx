"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register only required components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
	const data = {
		labels: ["Bank 1", "Bank 2", "Bank 3"],
		datasets: [
			{
				label: "Bank",
				data: [1200, 1300, 1400.58],
				backgroundColor: [
					"#FF6384",
					"#36A2EB",
					"#FFCE56",
				],
				hoverOffset: 10,
			},
		],
	};
	const options = {
		responsive: true,
		plugins: {
			legend: {
				// position: "bottom" as const, // Show labels below chart
				display: false
			},
			tooltip: {
				enabled: true,
			},
		},
	};

	return <Doughnut data={data} options={options}/>;
};

export default DoughnutChart;
