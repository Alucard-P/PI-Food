import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Detail from "./Components/Detail/Detail";
import Home from "./Components/Home/Home";
import Lobby from "./Components/Lobby/Lobby";
import Create from "./Components/Create/Create";
import NavBar from "./Components/NavBar/NavBar";
import Error from "./Components/ErrorPage/Error";
import About from "./Components/About/About";
import axios from "axios";
//Dominio para deploy del back
axios.defaults.baseURL = "https://pi-food-production-8b61.up.railway.app/";
//Dominio para trabajar desde localhost
// axios.defaults.baseURL = "http://localhost:3001/";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Switch>
        {/* {location.pathname === "/" ? null : <NavBar />} */}
        <Route path={"/create"} component={Create} />
        <Route path={"/home"} component={Home} />
        <Route path={"/about"} component={About} />
        <Route exact path={"/"} component={Lobby} />
        <Route path={"/detail/:id"} component={Detail} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
