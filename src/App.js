// IMPORTING CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import "./styles/style.css";

// IMPORTING ROUTER AND SWITCH
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Payment from "./pages/Payment";

function App() {
	const [mode, setMode] = useState(true);

	// let Lang = localStorage.getItem("Lang");
	// localStorage.setItem("Lang", "EN");

	return (
		<div className={`${(mode && "light") || "dark"}`}>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/users" component={Users} />
				<Route exact path="/payment" component={Payment} />
			</Switch>
		</div>
	);
}

export default App;
