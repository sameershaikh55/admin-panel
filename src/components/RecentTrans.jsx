import React from "react";

const RecentTrans = () => {
	return (
		<div className="mt-4 bg-white rounded-3">
			<h5 className="fw600 px-4 py-3 mb-0">Recent Transactions</h5>

			<div className="recent_table px-4">
				<table class="styled-table">
					<thead>
						<tr>
							<th>Order ID</th>
							<th>Product</th>
							<th>Release</th>
							<th>Name</th>
							<th>Email</th>
							<th>Status</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Dom</td>
							<td>6000</td>
						</tr>
						<tr class="active-row">
							<td>Melissa</td>
							<td>5150</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default RecentTrans;
