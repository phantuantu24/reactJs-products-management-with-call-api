import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import routes from './routes'

function App() {

  const showContent = (routes) => {
    var result = null
    if (routes.length > 0) {
      result = routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))
    }
    return <Switch>{result}</Switch>
  }

  return (
    <Router>
      <Menu />
      <div className="container">
        <div className="row">
          {showContent(routes)}
        </div>
      </div>
    </Router>
  );
}

export default App;
