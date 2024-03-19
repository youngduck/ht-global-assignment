import useInfinityScroll from "@/hooks/useInfinityScroll";
import Loading from "@/component/loading/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchNewsData } from "@/services/api";
import NewsItem from "../newsItem/NewsItem";

const NewsList = () => {
  const { dataSource, fetchMoreData, hasMore } =
    useInfinityScroll(fetchNewsData);
  return (
    <InfiniteScroll
      dataLength={dataSource.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<Loading />}
    >
      {dataSource.map((item, idx) => (
        <NewsItem key={idx} title={item.title} content={item.content} />
      ))}
    </InfiniteScroll>
  );
};

export default NewsList;
