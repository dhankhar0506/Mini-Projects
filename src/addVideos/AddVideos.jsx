import React, { useContext, useEffect, useRef, useState } from "react";
import "./AddVideos.css";
import ThemeContext from "../context/ThemeContext";
import VideoDispatchContext from "../context/VideoDispatch";

const initalState = {
  channel: "Coder-Boom",
  verified: true,
  title: " ",
  views: " ",
  time: " ",
};

const AddVideos = ({  editableVideo}) => {
  const [video, setVideo] = useState(initalState);
  const themeContext = useContext(ThemeContext)
  const dispatch = useContext(VideoDispatchContext)
  const inputRef= useRef(null)


  function handleClick(e) {
    e.preventDefault();
    if (editableVideo) {
      dispatch({
        type: "UPDATE",
        payload: video,
      });
    } else {
      dispatch({
        type: "ADD",
        payload: video,
      });;
    }     
    setVideo(initalState);
  }

  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value })
  }
  
  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
    // inputRef.current.value="demo";
    // inputRef.current.focus()
    inputRef.current.value= " "
    "Enter Title".split("").forEach((char,i)=>{
      setTimeout(()=>{
        console.log(char)
        inputRef.current.value = inputRef.current.value+char
      },100*i)
    })
  }, [editableVideo]);

  return (
    <>
      <form className="form-input">
        <input
        ref={inputRef}
        className={themeContext}
          type="text"
          placeholder="Enter title"
          name="title"
          value={video.title}
          onChange={handleChange}
        />
        <input
        className={themeContext}
          type="text"
          placeholder="Enter views"
          name="views"
          value={video.views}
          onChange={handleChange}
        />
        <input
        className={themeContext}
          type="text"
          placeholder="Enter time"
          name="time"
          value={video.time}
          onChange={handleChange}
        />

        <button onClick={handleClick} className="play-button">
          {editableVideo ? "edit" : "Add"} Video
        </button>
      </form>
    </>
  );
};

export default AddVideos;
