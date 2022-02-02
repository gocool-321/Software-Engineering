import './App.css';
import Homepage from './pages/homePage';
import Page from './pages/page';
import { useAuth0 } from "@auth0/auth0-react"
import Dashboard from './pages/DashBoard';
function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  return (
    <Page>
      {isLoading ? <Homepage /> : <div>
        {isAuthenticated ? <Dashboard /> : <Homepage />}</div>}
    </Page>
  );
}

export default App;
