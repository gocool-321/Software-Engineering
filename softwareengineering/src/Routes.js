import { Route } from "react-router-dom";
import HomePage from './components/HomePage';
import DashBoard from './components/DashBoard';
import Kanban from "./components/kanban";
import Page404 from "./components/404Page"
import Ruff from "./components/ruff";

export default function RoutePatterns() {
    return <switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/dashboard" exact component={DashBoard} />
        <Route path="/kanban/:id/:name" exact render={(vals) => <Kanban vals={vals} />} />
        <Route path="/404" exact component={Page404} />
    </switch>
}