import React from "react";
import { Line } from "react-chartjs-2";

const ChartSec = () => {
	let chart1_2_options = {
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false,
			},
		},
		tooltips: {
			backgroundColor: "#f5f5f5",
			titleFontColor: "#333",
			bodyFontColor: "#666",
			bodySpacing: 4,
			xPadding: 12,
			mode: "nearest",
			intersect: 0,
			position: "nearest",
		},
		responsive: true,
		scales: {
			yAxes: [
				{
					barPercentage: 1.6,
					gridLines: {
						drawBorder: false,
						color: "rgba(29,140,248,0.0)",
						zeroLineColor: "transparent",
					},
					ticks: {
						suggestedMin: 60,
						suggestedMax: 125,
						padding: 20,
						fontColor: "#9a9a9a",
					},
				},
			],
			xAxes: [
				{
					barPercentage: 1.6,
					gridLines: {
						drawBorder: false,
						color: "rgba(29,140,248,0.1)",
						zeroLineColor: "transparent",
					},
					ticks: {
						padding: 20,
						fontColor: "#9a9a9a",
					},
				},
			],
		},
	};

	let chartExample1 = {
		data1: (canvas) => {
			let ctx = canvas.getContext("2d");

			let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

			gradientStroke.addColorStop(1, "rgba(66, 78, 222,0.4)");
			gradientStroke.addColorStop(0.4, "rgba(66, 78, 222,0.15)");
			gradientStroke.addColorStop(0, "rgba(66, 78, 222,0.08)"); //blue colors

			return {
				labels: [
					"JAN",
					"FEB",
					"MAR",
					"APR",
					"MAY",
					"JUN",
					"JUL",
					"AUG",
					"SEP",
					"OCT",
					"NOV",
					"DEC",
				],
				datasets: [
					{
						label: "Dataset No 1",
						fill: true,
						backgroundColor: gradientStroke,
						borderColor: "#424ede",
						borderWidth: 2.5,
						borderDash: [],
						borderDashOffset: 0.0,
						pointBackgroundColor: "#222870",
						pointBorderColor: "rgba(66, 78, 222,0)",
						pointHoverBackgroundColor: "#6e76e5",
						pointBorderWidth: 20,
						pointHoverRadius: 4,
						pointHoverBorderWidth: 15,
						pointRadius: 4,
						data: [
							100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100, 66, 78, 20,
						],
					},
				],
			};
		},
		data2: (canvas) => {
			let ctx = canvas.getContext("2d");

			let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

			gradientStroke.addColorStop(1, "rgba(66, 78, 222,0.5)");
			gradientStroke.addColorStop(0.4, "rgba(66, 78, 222,0.2)");
			gradientStroke.addColorStop(0, "rgba(66, 78, 222,0.1)"); //blue colors

			return {
				labels: [
					"JAN",
					"FEB",
					"MAR",
					"APR",
					"MAY",
					"JUN",
					"JUL",
					"AUG",
					"SEP",
					"OCT",
					"NOV",
					"DEC",
				],
				datasets: [
					{
						label: "Dataset No 2",
						fill: true,
						backgroundColor: gradientStroke,
						borderColor: "#424ede",
						borderWidth: 2.5,
						borderDash: [],
						borderDashOffset: 0.0,
						pointBackgroundColor: "#222870",
						pointBorderColor: "rgba(66, 78, 222,0)",
						pointHoverBackgroundColor: "#6e76e5",
						pointBorderWidth: 20,
						pointHoverRadius: 4,
						pointHoverBorderWidth: 15,
						pointRadius: 4,
						data: [
							80, 120, 105, 110, 95, 105, 66, 78, 22, 90, 100, 80, 95, 70, 120,
						],
					},
				],
			};
		},
		data3: (canvas) => {
			let ctx = canvas.getContext("2d");

			let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

			gradientStroke.addColorStop(1, "rgba(66, 78, 222,0.5)");
			gradientStroke.addColorStop(0.4, "rgba(66, 78, 222,0.2)");
			gradientStroke.addColorStop(0, "rgba(66, 78, 222,0.1)"); //blue colors

			return {
				labels: [
					"JAN",
					"FEB",
					"MAR",
					"APR",
					"MAY",
					"JUN",
					"JUL",
					"AUG",
					"SEP",
					"OCT",
					"NOV",
					"DEC",
				],
				datasets: [
					{
						label: "Dataset No 3",
						fill: true,
						backgroundColor: gradientStroke,
						borderColor: "#424ede",
						borderWidth: 2.5,
						borderDash: [],
						borderDashOffset: 0.0,
						pointBackgroundColor: "#222870",
						pointBorderColor: "rgba(66, 78, 222,0)",
						pointHoverBackgroundColor: "#6e76e5",
						pointBorderWidth: 20,
						pointHoverRadius: 4,
						pointHoverBorderWidth: 15,
						pointRadius: 4,
						data: [
							60, 80, 65, 130, 80, 66, 78, 22, 105, 90, 130, 70, 115, 60, 130,
						],
					},
				],
			};
		},
		options: chart1_2_options,
	};

	const [bigChartData, setbigChartData] = React.useState("data1");
	const setBgChartData = (name) => {
		setbigChartData(name);
	};

	return (
		<div className="chart_container bg-white">
			<div className="page_container">
				<div className="container-fluid">
					<div className="charts bg-white">
						<div className="charts_btn w-100">
							<div className="d-flex flex-column flex-md-row justify-content-between align-md-items-center pt-1 w-100">
								<div>
									<h6 className="mb-0 color2 f16">Sales Analytics</h6>
								</div>
								<div className="btn_container mt-3 mt-md-0 d-flex align-self-center">
									<button
										className={`${bigChartData === "data1" && "active_btn"}`}
										onClick={() => setBgChartData("data1")}
									>
										Today
									</button>
									<button
										className={`${bigChartData === "data2" && "active_btn"}`}
										onClick={() => setBgChartData("data2")}
									>
										Weekly
									</button>
									<button
										className={`${bigChartData === "data2" && "active_btn"}`}
										onClick={() => setBgChartData("data2")}
									>
										Monthly
									</button>
									<button
										className={`${bigChartData === "data2" && "active_btn"}`}
										onClick={() => setBgChartData("data2")}
									>
										Yearly
									</button>
								</div>
							</div>
						</div>
						<hr className="mt-0" />
						<div className="d-flex">
							<div>
								<h6 className="f18 mb-1 fw600">$4,798.21</h6>
								<p className="mb-0 color1 f14">Revenue</p>
							</div>
							<div className="ms-5">
								<h6 className="f18 mb-1 fw600">88</h6>
								<p className="mb-0 color1 f14">Sales</p>
							</div>
						</div>
						<hr />
						chart in development
						{/* <Line
							data={chartExample1[bigChartData]}
							options={chartExample1.options}
						/> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChartSec;
