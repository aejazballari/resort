import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/rooms" component={Rooms} exact />
        <Route path="/rooms/:slug" exact component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
