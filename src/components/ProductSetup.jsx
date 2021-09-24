import React from "react";

const ProductSetup = () => {
	return (
		<div className="product_setup pb-3 bg-white rounded-3">
			<h6 className="px-4 pt-3 color2 fw500">Product Setup</h6>
			<hr />
			<div className="px-4">
				<label htmlFor="Name">Name</label>
				<br />
				<input type="text" placeholder="MoloAIO Renewal Subscription" />
				<br />
				<br />
				<label htmlFor="Description">Description</label>
				<br />
				<textarea
					name=""
					id=""
					cols="30"
					rows="6"
					placeholder="This is a subscription for MoloAIO!"
				></textarea>
				<br />
				<br />
				<label htmlFor="Type">Type</label>
				<br />
				<select name="" id="">
					<option value="Recurring">Recurring</option>
					<option value="Recurring">Recurring</option>
				</select>
				<br />
				<br />
				<div className="row gx-3">
					<div className="col-6">
						<label htmlFor="Initial Fee">Initial Fee</label>
						<br />
						<input
							className="w-100"
							type="text"
							name=""
							id=""
							placeholder="$50.00"
						/>
					</div>
					<div className="col-6">
						<label htmlFor="Trial Days">Trial Days</label>
						<br />
						<input className="w-100" type="text" name="" id="" />
					</div>
				</div>
				<br />
				<div className="row gy-4 gx-3">
					<div className="col-5 col-lg-12 col-xl-5">
						<label htmlFor="Price">Price</label>
						<br />
						<input
							className="w-100"
							type="text"
							name=""
							id=""
							placeholder="$30.00"
						/>
					</div>
					<div className="col-7 col-lg-12 col-xl-7">
						<label htmlFor="Frequency">Frequency</label>
						<div className="d-flex w-100">
							<div className="d-flex w-100">
								<input className="w-50 inp1" type="text" name="" id="" />
								<select className="w-100 inp2" name="" id="">
									<option value="month">month</option>
									<option value="month">month</option>
								</select>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div>
					<button className="border-0 text-white w-100">Create</button>
				</div>
			</div>
		</div>
	);
};

export default ProductSetup;
