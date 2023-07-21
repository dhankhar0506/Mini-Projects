import {  useReducer, useState } from "react";
import "./App.css";
import VideoDB from "./Videosdata";
import AddVideos from "./addVideos/AddVideos";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/ThemeContext";
import VideosContext from "./context/VideosContext"
import VideoDispatchContext from "./context/VideoDispatch"
import Counter from "./useState/Counter";

function videoReducer(videos, action) {
  switch (action.type) {
    case "ADD":
      return [...videos, { ...action.payload, id: videos.length + 1 }];
    case "DELETE":
      return videos.filter((item) => item.id !== action.payload);
    case "UPDATE":
      const index = videos.findIndex((v) => v.id === action.payload.id);
      const newvideo = [...videos];
      newvideo.splice(index, 1, action.payload);
      // setEditable(null)
      return newvideo;
    default:
      const defaultset = console.log("data not Available");
      return defaultset + videos;
  }
}

function App() {
  const [videos, dispatch] = useReducer(videoReducer, VideoDB);
  const [editable, setEditable] = useState(null);
  const [mode, setMode] = useState("darkMode");
  // const themeContext=useContext(ThemeContext)
  // const [videos, setVideos] = useState(VideoDB);

  // function set(video) {

  //   // setVideos([...videos, { ...video, id: videos.length + 1 }]);
  // }
  // function deleteVideo(id) {
  //   dispatch({
  //     type: "DELETE",
  //     payload: id,
  //   });
  // const update = videos.filter((item) => item.id !== id);
  // console.log(id);
  // setVideos(update);
  // }
  // function updateVideo(video) {
  //   // console.log(video);
  //   // const index = videos.findIndex((v) => v.id === video.id);
  //   // const newvideo = [...videos];
  //   // newvideo.splice(index, 1, video);
  //   // setVideos(newvideo);
  // }
  function editVideo(id) {
    setEditable(videos.find((item) => item.id === id));
  }

  return (
    <>

    <ThemeContext.Provider value={mode}>
    <VideosContext.Provider value={videos}>
    <VideoDispatchContext.Provider value={dispatch}>
      <div className={`react ${mode}`} >
      <button className="theme-button" onClick={() => setMode(mode==="darkMode"?"lightMode":"darkMode")}>Set-Theme</button>
        <AddVideos editableVideo={editable} />
        <VideoList  editVideo={editVideo} />
    <Counter/>
      </div>
    </VideoDispatchContext.Provider>
    </VideosContext.Provider>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
