import React, { useEffect } from "react";
import axios, { allassets, playvideo, mainurl } from "./api";
import { Link, withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import { connect } from "react-redux";
import Spinner from "./Spinner";

export function getImage(videoid) {
  return `${mainurl}${playvideo}${videoid}`;
}
function Home(props) {
  const { videos, loading } = props;
  // useEffect(() => {
  //   axios
  //     .get(allassets)
  //     .then((response) => {
  //       if (response.data?.videos) {
  //         props.dispatch({
  //           type: "VIDEOS",
  //           payload: response.data.videos,
  //         });
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <>
      <Carousel key={Math.random().toString()} />
      {loading ? (
        <Spinner />
      ) : (
        <div style={{ padding: "30px" }}>
          <div className="row" key={Math.random().toString()}>
            {videos?.length > 0
              ? videos.map((video) => {
                  return (
                    <>
                      <div className="col-md-3 mb-3">
                        <div className="card " key={Math.random().toString()}>
                          <video
                            key={Math.random().toString()}
                            style={{ height: "175px", paddingTop: "5px" }}
                          >
                            <source src={getImage(video)} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>

                          <div
                            className="card-body"
                            key={Math.random().toString()}
                          >
                            <h3
                              className="card-title"
                              key={Math.random().toString()}
                            >
                              {video.replace(".mp4", "")}
                            </h3>
                            <p
                              className="card-text"
                              key={Math.random().toString()}
                            >
                              <Link
                                to={"/play/" + btoa(video)}
                                key={Math.random().toString()}
                              >
                                <button
                                  key={Math.random().toString()}
                                  className="btn btn-info form-control"
                                >
                                  Play
                                </button>
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              : "No Data Found"}
          </div>
        </div>
      )}
    </>
  );
}

export default connect(function (state, props) {
  console.log(state);
  return {
    videos: state?.videos,
    loading: state?.loading,
  };
})(withRouter(Home));
