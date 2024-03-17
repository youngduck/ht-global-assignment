import { Routes, Route } from "react-router-dom";
import Navbar from "./component/layout/navbar/Navbar";
import Banner from "./component/banner/Banner";
import Homepage from "./pages/homepage/Homepage";
import Whookpage from "./pages/whook/Whookpage";
import EventPage from "./pages/event/EventPage";
import Newspage from "./pages/news/Newspage";
import Storepage from "./pages/store/Storepage";
import Chargepage from "./pages/charge/Chargepage";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/whook" element={<Whookpage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/news" element={<Newspage />} />
        <Route path="/store" element={<Storepage />} />
        <Route path="/charge" element={<Chargepage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
