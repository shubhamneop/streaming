import React, { useEffect } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import { connect } from "react-redux";

export function getImage(videoid) {
  return `http://localhost:5000/api/playvideo?filename=${videoid}`;
}
function Home(props) {
  const { videos } = props;
  useEffect(() => {
    var url = "http://localhost:5000/api/allassets";
    axios
      .get(url)
      .then((response) => {
        if (response.data?.videos) {
          props.dispatch({
            type: "VIDEOS",
            payload: response.data.videos,
          });
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Carousel />
      <div className="row" key={Math.random().toString()}>
        {videos?.length > 0
          ? videos.map((video) => {
              return (
                <>
                  <div
                    className="card col-md-3"
                    style={{
                      width: "18rem",
                      margin: "1rem",
                      marginLeft: "50px",
                    }}
                    key={Math.random().toString()}
                  >
                    <video key={Math.random().toString()}>
                      <source src={getImage(video)} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    <div className="card-body" key={Math.random().toString()}>
                      <h3 className="card-title" key={Math.random().toString()}>
                        {video.replace(".mp4", "")}
                      </h3>
                      <p className="card-text" key={Math.random().toString()}>
                        <Link
                          to={"/play/" + btoa(video)}
                          key={Math.random().toString()}
                        >
                          <button
                            key={Math.random().toString()}
                            className="btn btn-info"
                          >
                            Play
                          </button>
                        </Link>
                      </p>
                    </div>
                  </div>
                </>
              );
            })
          : "No Data Found"}
      </div>
    </>
  );
}

export default connect(function (state, props) {
  return {
    videos: state?.videos,
  };
})(withRouter(Home));
