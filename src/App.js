import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import Catalog from "./pages/Catalog";
import Editor from "./pages/Editor";
import DeepLearning from "./pages/DeepLearning";
import About from "./pages/About";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="editor" element={<Editor />} />
          <Route path="ml" element={<DeepLearning />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
