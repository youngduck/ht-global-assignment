import useInfinityScroll from "@/hooks/useInfinityScroll";
import Loading from "@/component/loading/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchEventData } from "@/services/api";
import EventItem from "@/component/eventItem/EventItem";
import "./eventPage.scss";

const Eventpage = () => {
  const { dataSource, fetchMoreData, hasMore } =
    useInfinityScroll(fetchEventData);

  return (
    <>
      <h1 className="eventPage-header">Event List</h1>
      <InfiniteScroll
        dataLength={dataSource.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Loading />}
      >
        {dataSource.map((item, idx) => (
          <EventItem key={idx} title={item.title} content={item.content} />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default Eventpage;
