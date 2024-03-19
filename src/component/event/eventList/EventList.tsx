import useInfinityScroll from "@/hooks/useInfinityScroll";
import Loading from "@/component/loading/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchEventData } from "@/services/api";
import EventItem from "@/component/event/eventItem/EventItem";

const EventList = () => {
  const { dataSource, fetchMoreData, hasMore } =
    useInfinityScroll(fetchEventData);
  return (
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
  );
};

export default EventList;
