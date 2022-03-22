import ReactPlayer from "react-player";

const Video = (props) => {
  return (
    <>
      <ReactPlayer
        {...props}
      />
    </>
  );
};

export default Video;


// Usage
// import Video from "./Extras/Video";
{/* <Video
        className="react-player"
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width="100%"
        height="100%"
      ></Video> */}