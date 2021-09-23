import React from "react";
import Layout from "../layout";
import { RiDeleteBinFill } from "react-icons/ri";
import { HiPencil } from "react-icons/hi";
import check from "../assets/check.svg";

const Users = () => {
	return (
		<Layout>
			<div className="container-fluid px-4 py-3">
				<div className="d-flex align-items-center bg-white rounded-3 px-4 py-4">
					<h3 className="fw600 f24 mb-1">Users</h3>
					<button className="ms-4 bg-purple-light border-0 px-3 py-1 rounded-3 color1 fw600">
						786 Users
					</button>
				</div>

				{/* BOTTOM SECTION */}
				<div className="user_container_upper mt-4">
					<div className="row gy-4">
						<div className="col-12 rounded-3">
							<div className="bg-white rounded-3">
								<div className="user_table">
									<table class="table">
										<thead>
											<tr>
												<th className="color2 ps-4 fw500">License Key</th>
												<th className="color2 fw500">Email</th>
												<th className="color2 fw500">Key Type</th>
												<th className="color2 fw500">Binded?</th>
												<th className="color2 fw500">Discord ID</th>
												<th className="color2 fw500">Renewal Date</th>
												<th className="color2 text-end pe-4 fw500">Actions</th>
											</tr>
										</thead>
										<tbody>
											{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
												return (
													<tr>
														<td className="color3 ps-4 fw400">
															**** **** **** JNSZ
														</td>
														<td className="color3 fw400">
															nitrocooks@gmail.com
														</td>
														<td className="color3 fw400">Lifetime</td>
														<td className="color3 fw400">
															<img src={check} alt="" />
														</td>
														<td className="color3 fw400">463026039119937537</td>
														<td className="color3 fw400">22/11/2021</td>
														<td className="color3 text-end pe-4 fw400">
															<HiPencil
																fontSize="1.2rem"
																color="#8961de"
																className="pointer"
															/>
															<RiDeleteBinFill
																className="ms-2 pointer"
																fontSize="1.2rem"
																color="#8961de"
															/>
														</td>
													</tr>
												);
											})}
										</tbody>
									</table>
								</div>
								<div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center px-4 pb-3">
									<p className="mb-0 color2">Page 1 of 37</p>
									<div className="user_btn_container">
										<button className="border-0 color2">Previous</button>
										<button className="ms-3 border-0 text-white mt-3 mt-md-0">
											Next
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Users;
