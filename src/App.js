import "./index.css";
import Header from "./components/Header";
import Categories from "./pages/Categories";
import Difficulty from "./pages/Difficulty";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Questions from "./pages/Questions";
import Results from "./pages/Results";
import { useOptions } from "./context/ContextProvider";

function App() {
  const options = useOptions();
  return (
    <div className="antialiased font-sans">
      <Header />
      {JSON.stringify(options)}
      <div className="max-w-4xl m-auto">
        <Routes>
          <Route path="/" element={<Categories />}></Route>
          <Route path="/difficulty" element={<Difficulty />}></Route>
          <Route path="/questions" element={<Questions />}></Route>
          <Route path="/results" element={<Results />} />
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
