import { Route } from "react-router-dom";
import HomePage from './components/HomePage';
import DashBoard from './components/DashBoard';
import Kanban from "./components/kanban";
import Ruff from "./components/ruff";

export default function RoutePatterns() {
    return <switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/dashboard" exact component={DashBoard} />
        <Route path="/kanban" exact component={Kanban} />
    </switch>
}