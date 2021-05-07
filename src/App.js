import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// components
import Aside from  "./components/Aside";
import Dashboard from  "./components/Dashboard";

export const headerLinks = [
  {
    "id": 1,
    "title": "Dashboard",
    "link": "/",
    "icon":"line_style"
  },
  {
    "id": 2,
    "title": "Profile",
    "link": "/profile",
    "icon":"person"
  },
  {
    "id": 3,
    "title": "Utilities",
    "link": "/utilities",
    "icon":"business_center"
  },
  {
    "id": 4,
    "title": "Settings",
    "link": "/settings",
    "icon":"settings"
  },
  {
    "id": 4,
    "title": "Messages",
    "link": "/messages",
    "icon":"mail",
  
  },
  {
    "id": 4,
    "title": "Analytics",
    "link": "/analytics",
    "icon":"pie_chart"
  },
  {
    "id": 4,
    "title": "Integrations",
    "link": "/ıntegrations",
    "icon":"integration_instructions"
  }
]



function App() {

  return (
    <Router>
      <Aside headers={headerLinks}/>
      <main>
        <Switch>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
      </main>
        
    </Router>
  );
}

export default App;
