import "./newsItem.scss";
import type { INews } from "@/types/types";

const newsItem: React.FC<INews> = ({ title, content }) => {
  return (
    <div className="newsItem-wrapper">
      <p className="newsItem-title">{title}</p>
      <span className="newsItem-content">{content}</span>
    </div>
  );
};

export default newsItem;
