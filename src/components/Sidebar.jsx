import React from "react";
import { NavLink } from "react-router-dom";
import avt from "../assets/avt.svg";

const Sidebar = () => {
	return (
		<div className="sidebar_container">
			<div className="top_side d-flex align-items-center ps-4">
				<img src={avt} alt="" />
				<p className="mb-0 ms-3 fw600 color3">MoloAIO</p>
			</div>
			<div className="home_side px-3 pt-3 pb-1">
				<p className="fw600 color2 ps-3 mb-3">Home</p>
				<NavLink to="/dashboard" activeClassName="activeNav">
					<div className="d-flex align-items-center position-relative">
						<div className="img1"></div>
						<p className="mb-0">Overview</p>
					</div>
				</NavLink>
			</div>
			<hr />
			<div className="manage_side px-3 pt-2 pb-1">
				<p className="fw600 color2 ps-3 mb-3">Manage</p>
				<NavLink to="/users" activeClassName="activeNav">
					<div className="d-flex align-items-center position-relative">
						<div className="img2"></div>
						<p className="mb-0">Users</p>
					</div>
				</NavLink>
				<NavLink to="/payment" activeClassName="activeNav">
					<div className="mt-1 d-flex align-items-center position-relative">
						<div className="img3"></div>
						<p className="mb-0">Payment Plans</p>
					</div>
				</NavLink>
				<NavLink to="/payment" activeClassName="activeNav">
					<div className="mt-1 d-flex align-items-center position-relative">
						<div className="img4"></div>
						<p className="mb-0">Releases</p>
					</div>
				</NavLink>
			</div>
			<hr />
			<div className="maintenence_side px-3 pt-2 pb-1">
				<p className="fw600 color2 ps-3 mb-3">Maintenence</p>
				<NavLink to="/users" activeClassName="activeNav">
					<div className="d-flex align-items-center position-relative">
						<div className="img5"></div>
						<p className="mb-0">Settings</p>
					</div>
				</NavLink>
			</div>
			<hr />
		</div>
	);
};

export default Sidebar;
