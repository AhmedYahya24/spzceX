import "./App.css";
import Lanches from "./pages/lanches";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Missions from "./pages/Missions/Missions";
import Home from "./pages/home/Home";

const App = () => {
  // const d = useQueryModal();
  // const { data, isLoading, error, refetch } = useReactQeury();

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lunches" element={<Lanches />} />
          <Route path="/missions" element={<Missions />} />
        </Routes>
      </BrowserRouter>
      {/* <ModalC /> */}
    </div>
  );
};

export default App;
