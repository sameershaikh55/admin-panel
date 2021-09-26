import React from "react";
// import { Line } from "react-chartjs-2";
import {
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Area,
	AreaChart,
} from "recharts";

const data = [
	{
		name: "08:00",
		Sales: 3500,
	},
	{
		name: "09:00",
		Sales: 3300,
	},
	{
		name: "10:00",
		Sales: 3000,
	},
	{
		name: "11:00",
		Sales: 2600,
	},
	{
		name: "12:00",
		Sales: 2000,
	},
	{
		name: "13:00",
		Sales: 1700,
	},
	{
		name: "14:00",
		Sales: 1290,
	},
	{
		name: "15:00",
		Sales: 1110,
	},
	{
		name: "16:00",
		Sales: 1000,
	},
	{
		name: "17:00",
		Sales: 800,
	},
	{
		name: "18:00",
		Sales: 1290,
	},
	{
		name: "19:00",
		Sales: 1190,
	},
	{
		name: "20:00",
		Sales: 2090,
	},
];

const ChartSec = () => {
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
										className={`${bigChartData === "data3" && "active_btn"}`}
										onClick={() => setBgChartData("data3")}
									>
										Monthly
									</button>
									<button
										className={`${bigChartData === "data4" && "active_btn"}`}
										onClick={() => setBgChartData("data4")}
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

						<div className="chart_cont_inner">
							<ResponsiveContainer width="100%" height="100%" aspect={3}>
								<AreaChart
									data={data}
									margin={{ top: 15, right: 0, left: 0, bottom: 0 }}
								>
									<defs>
										<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
											<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
											<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
										</linearGradient>
										<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
											<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
											<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
										</linearGradient>
									</defs>
									<XAxis dataKey="name" stroke="#90A0B7" />
									<CartesianGrid vertical={false} opacity="0.4" />
									<Tooltip
										contentStyle={{
											backgroundColor: "rgba(137, 97, 222, 0.25)",
											boxShadow: " 0px 2px 6px rgba(0, 0, 0, 0.1)",
											borderRadius: "5px",
											border: "1px solid rgba(137, 97, 222, 0.25)",
										}}
										itemStyle={{
											color: "#8884d8",
										}}
										labelStyle={{
											color: "#fff",
										}}
									/>
									<Area
										type="monotone"
										dataKey="Sales"
										stroke="#8884d8"
										fillOpacity={1}
										fill="url(#colorUv)"
										activeDot={{ r: 5 }}
										strokeWidth="2.4px"
									/>
								</AreaChart>
							</ResponsiveContainer>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChartSec;
