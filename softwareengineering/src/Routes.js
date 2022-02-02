import { Route } from "react-router-dom";
import HomePage from './components/HomePage';
import DashBoard from './components/DashBoard';

export default function RoutePatterns() {
    return <switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/dashboard" exact component={DashBoard} />
    </switch>
}