import EventList from "@/component/event/eventList/EventList";
import "./eventPage.scss";

const Eventpage = () => {
  return (
    <>
      <h1 className="eventPage-header">Event List</h1>
      <EventList />
    </>
  );
};

export default Eventpage;
