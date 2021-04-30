import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Aside from  "./components/Aside";
import Dashboard from  "./components/Dashboard";
export const headerLinks = [
  {
    "id": 1,
    "title": "Dashboard",
    "link": "/",
  },
  {
    "id": 2,
    "title": "Profile",
    "link": "/profile"
  },
  {
    "id": 3,
    "title": "Utilities",
    "link": "/utilities"
  },
  {
    "id": 4,
    "title": "Settings",
    "link": "/settings"
  },
  {
    "id": 4,
    "title": "Messages",
    "link": "/messages"
  },
  {
    "id": 4,
    "title": "Analytics",
    "link": "/analytics"
  },
  {
    "id": 4,
    "title": "Integrations",
    "link": "/ıntegrations"
  }
]


function App() {
  return (
    <Router>
      <Aside headers={headerLinks}/>
      <main>
        <Switch>
            <Route>
              <Dashboard />
            </Route>
          </Switch>
      </main>
        
    </Router>
  );
}

export default App;
