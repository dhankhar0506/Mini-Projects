import React, { useContext } from 'react'
import Video from "../components/Video"
import PlayButton from  "../components/PlayButton"
import "./VideoList.css";
import VideosContext from '../context/VideosContext';
import VideoDispatchContext from '../context/VideoDispatch';

const VideoList = ({editVideo}) => {
  const videos = useContext(VideosContext)
  const dispatch = useContext(VideoDispatchContext)
  return (
    <div className="container">
          {videos.map((video, i) => (
          <Video
            key={i}
            id={video.id}
            title={video.title}
            channel={video.channel}
            views={video.views}
            time={video.time}
            verified={video.verified}
            dispatch={dispatch}
            editVideo={editVideo}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <PlayButton
                onplay={() => {
                  console.log("playing...", video.title);
                }}
                onpause={() => {
                  console.log("paused...", video.title);
                }}
              >
                Toggle
              </PlayButton>
            </div>
          </Video>
        ))}
    </div>
  )
}

export default VideoList
