import React from "react";
import "./eventItem.scss";
import type { IEvent } from "@/types/types";

const EventItem: React.FC<IEvent> = ({ title, content }) => {
  return (
    <div className="eventItem-wrapper">
      <p className="eventItem-title">{title}</p>
      <span className="eventItem-content">{content}</span>
    </div>
  );
};

export default EventItem;
