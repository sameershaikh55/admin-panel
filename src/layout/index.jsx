import React from "react";
import Sidebar from "../components/Sidebar";
import avt from "../assets/avt.svg";
import { AiOutlineSearch } from "react-icons/ai";
import exit from "../assets/exit.svg";

const Layout = ({ children }) => {
	return (
		<div className="layout_container d-flex">
			<Sidebar />
			<div className="w-100">
				<div className="header_container shadow-sm d-flex justify-content-between align-items-center px-4 w-100">
					<div className="position-relative">
						<AiOutlineSearch
							className="search_container me-3"
							color="#90A0B7"
							fontSize="1.5rem"
						/>
						<input
							type="text"
							name=""
							id=""
							placeholder="Search Users..."
							className="f18 border-0"
						/>
					</div>
					<div className="d-flex align-items-center">
						<div className="top_side d-flex align-items-center ps-4">
							<img src={avt} alt="" />
							<div className="d-flex flex-column">
								<p className="mb-0 ms-3 fw600 color3">nitr0</p>
								<p className="mb-0 ms-3 fw400 color3">Owner</p>
							</div>
						</div>
						<img className="ms-5" src={exit} alt="exit" />
					</div>
				</div>
				{/* CHILDREN */}
				{children}
			</div>
		</div>
	);
};

export default Layout;
