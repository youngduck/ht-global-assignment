import "./homepage.scss";
import ChartList from "@/component/chart/chartList/ChartList";

const Homepage = () => {
  return (
    <>
      <h1 className="home-header">Top 50</h1>
      <ChartList />
    </>
  );
};

export default Homepage;
