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
import axios, { allassets } from "./api";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    var title = "Shubham`s";
    document.title = `${title} Stream App`;
    dispatch({ type: "VIDEO_INIT" });

    axios
      .get(allassets)
      .then((response) => {
        if (response.data?.videos) {
          dispatch({
            type: "VIDEOS",
            payload: response.data.videos,
          });
        } else {
          dispatch({ type: "VIDEO_FAIL" });
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
