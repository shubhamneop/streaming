import React, { useEffect, useState } from "react";
import { useParams, withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getImage } from "./Home";
import { playvideo, mainurl } from "./api";

function Play(props) {
  let params = useParams();

  const videoid = atob(params.videoid);

  const videourl = `${mainurl}${playvideo}${videoid}`;

  const [randomVideo, setrandomVideo] = useState([]);

  useEffect(() => {
    var shuffled = props.videos.sort(function () {
      return 0.5 - Math.random();
    });

    var random = shuffled.slice(0, 4);
    setrandomVideo(random);
  }, [props.videos, videoid]);
  const onEnd = () => {
    if (randomVideo && randomVideo[0]) {
      props.history.push(`/play/${btoa(randomVideo[0])}`);
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-md-8" key={Math.random().toString()}>
          <div className="video-border" key={Math.random().toString()}>
            <video
              className="video-cust"
              controls
              autoPlay="true"
              onEnded={onEnd}
              key={Math.random().toString()}
            >
              <source src={videourl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h2
              style={{ display: "flex", justifyContent: "space-around" }}
              key={Math.random().toString()}
            >
              {videoid.replace(".mp4", "")}
            </h2>
          </div>
        </div>
        <div
          className="col-md-4"
          style={{ marginTop: "10px" }}
          key={Math.random().toString()}
        >
          {randomVideo?.length > 0 &&
            randomVideo.map((video) => {
              return (
                <Link to={"/play/" + btoa(video)}>
                  <div className="play-other">
                    <video
                      style={{ width: "400px", height: "200px" }}
                      key={Math.random().toString()}
                    >
                      <source
                        src={getImage(video)}
                        type="video/mp4"
                        key={Math.random().toString()}
                      />
                      Your browser does not support the video tag.
                    </video>
                    <h4
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      {video.replace(".mp4", "")}
                    </h4>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default connect(function (state, props) {
  return {
    videos: state?.videos,
  };
})(withRouter(Play));
