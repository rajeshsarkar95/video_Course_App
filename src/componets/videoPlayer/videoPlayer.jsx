import "./videoPlayer.css";
import { CiPause1 } from "react-icons/ci";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { MdPlaylistAdd } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { AiFillSound } from "react-icons/ai";
import { MdOutlineFullscreen } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import { useRef, useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";

function videoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [qulty, setQulty] = useState("780p");
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video) {
      const progressValue = (video.currentTime / video.duration) * 100;
      setProgress(progressValue);
    }
  };

  const handleSeek = (event) => {
    const video = videoRef.current;
    const seekTo = (event.target.value / 100) * video.duration;
    video.currentTime = seekTo;
    setProgress(event.target.value);
  };

  const handleshow = () => {
    setShow(!show)
  }

  const videoSources = {
    "720p": "https://www.w3schools.com/html/mov_bbb.mp4",
    "480p": "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
  };
  const handlequltyChannges = (e) => {
    const selectQulty = e.target.value;
    const wasPlaying = isPlaying;

    selectQulty(selectQulty)

    videoRef.current.src = videoSources[selectQulty]
    videoRef.current.load()

    if (wasPlaying) {
      videoRef.current.play();
    }
  }

  const handleplay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying)
  }

  const handlevolumechansge = (e) => {
    const newVolue = parseFloat(e.target.value)
    videoRef.current.volume = newVolue;
    setVolume(newVolue);
  }

  const handlefullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
    }
  }

  const freeFiles = [
    { name: "Wireframe Shot.psd", size: "12.2 Mb" },
    { name: "Animation template.aep", size: "23.5 Mb" },
    { name: "Dribbble template.pdf", size: "7.2 Mb" },
    { name: "Dribbble template.pdf", size: "7.2 Mb" },
  ];

  const premiumFiles = [
    { name: "Dedicated icon pack.sketch", size: "17.6 Mb", locked: true },
  ];
  return (
    <div className="video-container">
      <div className="video_Player">
        <div className="video_fram">
          <video
            ref={videoRef}
            className="video-player"
            width="100%"
            onTimeUpdate={handleTimeUpdate}

          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"

            />
          </video>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            style={{
              width: '100%',
              appearance: 'none',
              height: '5px',
              backgroundColor: '#ccc',
              borderRadius: '5px',
              outline: 'none',
            }}
          />
          <div className="tools_bar">
            <div className="pusesed_bar  togethar">
              <i className="icon " onClick={handleplay}>

                {isPlaying ? <CiPause1 /> : <FaPlay />}
              </i>
              <i className="icon ">
                <MdSkipPrevious />
              </i>
              <i className="icon ">
                <MdSkipNext />
              </i>
              <i className="icon ">
                <MdPlaylistAdd />
              </i>
            </div>
            <div className="timeing_bar togethar">
              <p className="timeing_show">12:00/6:12</p>
            </div>
            <div className="sound_bar togethar">
              {show &&
                <div className="handle_show">
                  <select value={qulty} onChange={handlequltyChannges}>
                    <option value="720p">720p (High Quality)</option>
                    <option value="480p">480p (Medium Quality)</option>
                  </select>
                </div>
              }
              <i onClick={handleshow}>
                <IoMdSettings className="icon " />
              </i>
              <i>
                <AiFillSound className="icon " />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handlevolumechansge}
                />
              </i>
              <i onClick={handlefullscreen}>
                <MdOutlineFullscreen className="icon " />
              </i>
            </div>
          </div>
        </div>
        <div className="share_conatainer">
          <div className="share_bar">
            <i>
              <IoIosShareAlt />
            </i>
            <h4>SAHARE COURSE</h4>
          </div>
          <div className="chapters_con">
            <button className="previous_button">
              PREVIOUS CHAPTER
            </button>
            <button className="next_button">
              NEXT CHAPTER
            </button>
          </div>

        </div>
        <div className="container">
          <div className="header">
            <h1>Preparing the Artboard</h1>
            <p>
              Nullam rhoncus sapien quam, quis tempus nisi interdum non. Donec et
              turpis ligula. Etiam eget placerat est. Mauris et risus at nunc
              vestibulum cursus eu et velit.
              Nullam rhoncus sapien quam, quis tempus nisi interdum non. Donec et
              turpis ligula. Etiam eget placerat est. Mauris et risus at nunc
              vestibulum cursus eu et velit.
            </p>
          </div>
          <div className="tabs">
            <button className="tab active">Attached Files</button>
            <button className="tab">Comments</button>
            <button className="tab">Critique Reviews</button>
            <button className="tab">Challenges</button>
            <button className="tab">More from Jesse</button>
          </div>
          <div className="files-section">
            <div>
              <h3>Free Downloads</h3>
              {freeFiles.map((file, index) => (
                <div key={index} className="file">
                  <span className="file-name">{file.name}</span>
                  <span className="file-size">{file.size}</span>
                </div>
              ))}
            </div>
            <div>
              <h3>Premium Downloads</h3>
              {premiumFiles.map((file, index) => (
                <div key={index} className="file premium">
                  <span className="file-name">{file.name}</span>
                  <span className="file-size">{file.size}</span>
                  <span className="locked">🔒</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default videoPlayer;
