import "./chartItem.scss";
import albumCover from "@assets/images/chart/albumCover/duck.png";
import albumCover2 from "@assets/images/chart/albumCover/polarBear.png";
import icons from "@/assets/icons";
import { useState } from "react";

interface IChartItem {
  singer: string;
  title: string;
  rank: number;
}

const ChartItem: React.FC<IChartItem> = ({ singer, title, rank }) => {
  const [check, setCheck] = useState(false);
  const handleHeartClick = () => {
    setCheck(!check);
  };
  return (
    <div className="chartItem-wrapper">
      <img
        src={rank % 2 === 0 ? albumCover : albumCover2}
        alt="albumCover"
        className="chartItem-img"
      />
      <div className="chartItem-rank">
        <span className="chartItem-rank-num">{rank}</span>
        <span className="chartItem-rank-change">{icons.dash}</span>
      </div>
      <div className="chartItem-song">
        <span className="chartItem-title">{title}</span>
        <span className="chartItem-singer">{singer}</span>
      </div>
      <button className="chartItem-heart" onClick={handleHeartClick}>
        {check ? icons.fillHeart : icons.unfillHeart}
      </button>
    </div>
  );
};

export default ChartItem;
