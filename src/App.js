import "./index.css";
import Header from "./components/Header";
import Categories from "./pages/Categories";
import Difficulty from "./pages/Difficulty";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Questions from "./pages/Questions";
import Results from "./pages/Results";
import Footer from "./components/Footer";
import About from "./pages/About";
import Instructions from "./pages/Instructions";

function App() {
  return (
    <div className="antialiased font-sans bg-slate-200 dark:bg-slate-900">
      <Header />
      <div className="max-w-4xl m-auto">
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/difficulty" element={<Difficulty />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/results" element={<Results />} />
          <Route path="/about" element={<About />} />
          <Route path="/instructions" element={<Instructions />} />

          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
