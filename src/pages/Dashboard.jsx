import React from "react";
import States from "../components/States";
import ChartSec from "../components/ChartSec";
import Layout from "../layout";
import RecentActivity from "../components/RecentActivity";
import RecentTrans from "../components/RecentTrans";

const Dashboard = ({ localMode }) => {
	return (
		<Layout>
			<div className="container-fluid px-4 py-3">
				<div className="bg-white rounded-3 px-4 pt-3 pb-5">
					<h3 className="fw600 f24 mb-1">Hello nitr0!</h3>
					<p className="color3">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
				<div className="upper_states px-4">
					<States />
				</div>

				{/* BOTTOM SECTION */}
				<div className="chart_container_upper mt-4">
					<div className="row gy-4">
						<div className="col-12 col-xl-8 rounded-3">
							<div className="bg-white rounded-3">
								<ChartSec />
							</div>
							<RecentTrans />
						</div>
						<div className="col-12 col-xl-4">
							<RecentActivity localMode={localMode} />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Dashboard;
