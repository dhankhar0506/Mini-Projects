import React, { useState } from "react";
import "./PlayButton.css";

const PlayButton = ({ onplay, onpause, children }) => {
  const [playing, setPlaying] = useState(true);

  function handleClick(e) {
    e.stopPropagation()
    if (playing) onplay();
    else onpause();
    setPlaying(!playing);
  }
  
  return (
    <div className="button-container">
      <button onClick={handleClick} className="play-button">
        {children}
        {"  "}
        {playing ? "⏯" : "⏸"}
      </button>
    </div>
  );
};

export default PlayButton;



// Without using State hook = useState..........>
// Donot used this approach always used useState for handling the State.............................>
//   let playing = true;
// if (playing) {
//   onplay();
// } else {
//   onpause();
// }
// playing = !playing;