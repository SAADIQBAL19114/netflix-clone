import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlinedIcon />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://youtu.be/HtVLK32p9P4"
      />
    </div>
  );
}
