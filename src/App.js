import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const App = () => (
  <div className="app-container">
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/about" component={About} />
        <NotFound />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
