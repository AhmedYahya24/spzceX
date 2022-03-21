import "./App.css";
import Launches from "./pages/Launches";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Missions from "./pages/Missions/Missions";
import Home from "./pages/home/Home";

const App = () => {
  // const d = useQueryModal();
  // const { data, isLoading, error, refetch } = useReactQeury();
  const routes = [
    { path: "/", component: Home },
    { path: "/launches", component: Launches },
    { path: "/missions", component: Missions },
  ];

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, component: Component }, key) => (
            <Route path={path} element={<Component />} key={key} />
          ))}
          {/* <Route path="/" element={<Home />} />
          <Route path="/lunches" element={<Lanches />} />
          <Route path="/missions" element={<Missions />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <ModalC /> */}
    </div>
  );
};

export default App;
