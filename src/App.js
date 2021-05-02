import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Play from "./Play";
import Home from "./Home";
import Navbar from "./Navbar";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    var url = "http://localhost:5000/api/allassets";
    axios
      .get(url)
      .then((response) => {
        if (response.data?.videos) {
          dispatch({
            type: "VIDEOS",
            payload: response.data.videos,
          });
        }
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/play/:videoid" exact component={Play} />
          <Route path="/*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
