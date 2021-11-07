import { useState, useEffect } from "react";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/profile";
import Privateroutes from "./routes/Privateroutes";
import Signup from "./components/Forms/Register";
import Login from "./components/Forms/Login";
function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {}, [isAuth]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/signup" render={(props) => <Signup />} />

          <Route
            exact
            path="/login"
            render={(props) => <Login isAuth={isAuth} setIsAuth={setIsAuth} />}
          />
          <Privateroutes exact path="/" component={Home} isAuth={isAuth} />
        </Switch>
        <Privateroutes path="/profile" component={Profile} isAuth={isAuth} />
      </div>
    </Router>
  );
}

export default App;
