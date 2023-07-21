import React from "react";
import "./Video.css";

const Video = ({
  title,
  channel,
  views,
  time,
  id,
  verified,
  children,
  dispatch,
  editVideo,
}) => {
  return (
    <>
      <div className="video-container">
        <button
          className="close"
          onClick={() =>dispatch({ type: "DELETE", payload: id,})}>❌</button>
        <button className="edit" onClick={() => editVideo(id)}>
          Edit
        </button>
        <img src={`https://picsum.photos/id/${id}/200/300`} alt="random" />
        <div className="title">{title}</div>
        <div className="channel">
          {channel}
          {verified ? "✅" : " "}
        </div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        {children}
      </div>
    </>
  );
};

export default Video;
