import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './../src/styles/scss/Main.scss'
import Dashboard from './pages/dashboard';


function App() {
  return (
        <Router>         
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </Router> 
  );
}

export default App;
