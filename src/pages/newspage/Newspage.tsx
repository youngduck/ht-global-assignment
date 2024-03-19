import "./newspage.scss";
import NewsList from "@/component/news/newsList/NewsList";

const Newspage = () => {
  return (
    <>
      <h1 className="newsPage-header">News List</h1>
      <NewsList />
    </>
  );
};

export default Newspage;
