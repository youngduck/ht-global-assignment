import { Routes, Route } from "react-router-dom";
import Navbar from "./component/layout/navbar/Navbar";
import Banner from "./component/banner/Banner";
import GestureProvider from "./component/provider/GestureProvider";
import Homepage from "./pages/homepage/Homepage";
import Whookpage from "./pages/whookpage/Whookpage";
import EventPage from "./pages/eventpage/EventPage";
import Newspage from "./pages/newspage/Newspage";
import Storepage from "./pages/storepage/Storepage";
import Chargepage from "./pages/chargepage/Chargepage";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <GestureProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/whook" element={<Whookpage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/news" element={<Newspage />} />
          <Route path="/store" element={<Storepage />} />
          <Route path="/charge" element={<Chargepage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </GestureProvider>
    </>
  );
}

export default App;
