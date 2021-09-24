// IMPORTING CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import "./styles/style.css";

// IMPORTING ROUTER AND SWITCH
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Payment from "./pages/Payment";
import Settings from "./pages/Settings";
import Release from "./pages/Release";

function App() {
	const [mode, setMode] = useState(1);

	let localMode = localStorage.getItem("modeLocal");

	useEffect(() => {
		if (!localMode) {
			localStorage.setItem("modeLocal", 1);
			setMode(1);
		} else {
			console.log("object");
		}

		if (!localMode) {
			document.body.style.background = "#f5f6f8";
		} else if (localMode == 1) {
			document.body.style.background = "#f5f6f8";
		} else if (localMode && localMode == 2) {
			document.body.style.background = "#212121";
		}
	}, [localMode, mode]);

	return (
		<div
			className={`${
				(!localMode && "light") || (localMode == 1 && "light") || "dark"
			}`}
		>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route exact path="/dashboard">
					<Dashboard localMode={localMode} />
				</Route>
				<Route exact path="/users" component={Users} />
				<Route exact path="/payment" component={Payment} />
				<Route exact path="/settings">
					<Settings localMode={localMode} mode={mode} setMode={setMode} />
				</Route>
				<Route exact path="/releases" component={Release} />
			</Switch>
		</div>
	);
}

export default App;
