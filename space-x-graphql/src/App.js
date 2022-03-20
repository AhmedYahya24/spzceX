import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Missions from "./pages/Missions/Missions";

const App = () => {
  // const d = useQueryModal();
  // const { data, isLoading, error, refetch } = useReactQeury();

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/lunches" element={<Home />} />
          <Route path="/missions" element={<Missions />} />
        </Routes>
      </BrowserRouter>
      {/* <ModalC /> */}
    </div>
  );
};

export default App;
