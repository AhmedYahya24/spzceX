import "./App.css";
import ModalC from "./components/modal/ModalC";
import Home from "./pages/home";
import { useQueryModal } from "./utils/hooks/useQueryModal";
import { useReactQeury } from "./utils/hooks/useReactQeury";
const App = () => {
  // const d = useQueryModal();
  // const { data, isLoading, error, refetch } = useReactQeury();

  return (
    <div className="app">
      <Home />

      {/* <ModalC /> */}
    </div>
  );
};

export default App;
