import "./App.css";
import { Route, useLocation } from "react-router-dom";
import Detail from "./Components/Detail/Detail";
import Home from "./Components/Home/Home";
import Lobby from "./Components/Lobby/Lobby";
import Create from "./Components/Create/Create";
import NavBar from "./Components/NavBar/NavBar";
import axios from "axios";
// axios.defaults.baseURL = "https://pi-food-production-8b61.up.railway.app/";
axios.defaults.baseURL = "http://localhost:3001/";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === "/" ? null : <NavBar />}
      <Route path={"/create"} component={Create} />
      <Route path={"/home"} component={Home} />
      <Route exact path={"/"} component={Lobby} />
      <Route path={"/detail/:id"} component={Detail} />
    </div>
  );
}

export default App;
