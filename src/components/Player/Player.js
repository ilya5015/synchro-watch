import ReactPlayer from "react-player";
import styles from "./Player.module.css";

function Player({ url = "https://www.youtube.com/watch?v=ysz5S6PUM-U" }) {
  return (
    <div className={styles.playerWrapper}>
      <ReactPlayer
        url={url}
        controls={true}
        onProgress={(e) => {
          console.log("On play e", e);
        }}
        onSeek
        onPause
        onPlay
      />
      <div className={styles.controlPanel}>
        <button>Stop</button>
        <button>Start</button>
      </div>
      <button className={styles.synchronizeButton}>Synchronize</button>
    </div>
  );
}

export default Player;
