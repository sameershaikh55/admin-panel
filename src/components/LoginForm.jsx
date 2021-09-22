import React from "react";
import { MdRemoveRedEye } from "react-icons/md";

const LoginForm = () => {
	return (
		<div className="login_form pb-3">
			<div className="container-fluid">
				<div className="px-4">
					<h4 className="f24 pt-4 fw600">Sign in</h4>
					<p className="color2">Login to MoloDash</p>
				</div>
				<hr />

				<form>
					<div className="px-4">
						<label htmlFor="Email">Email</label>
						<br />
						<input
							className="w-100 px-3 mt-1 f14"
							type="email"
							placeholder="johndoe@gmail.com"
						/>
						<br />
						<br />
						<label htmlFor="Password">Password</label>
						<br />
						<div className="position-relative">
							<input
								className="w-100 px-3 mt-1 f14"
								type="text"
								placeholder="Password"
							/>

							<MdRemoveRedEye className="eye pointer" fontSize="1.1rem" />
						</div>
					</div>
					<hr />

					<div className="px-4">
						<button className="w-100 border-0 text-white f14">Create</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
