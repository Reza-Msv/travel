import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogsPage from "./pages/BlogsPage";
import BlogsDetailPage from "./pages/BlogsDetailPage";
import PlacesRouterPage from "./pages/PlacesRouterPage";
import PageNotFound from "./pages/404";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/travel" element={<HomePage />} />
        <Route path="/travel/about" element={<AboutPage />} />
        <Route path="/travel/blogs" element={<BlogsPage />} />
        <Route path="/travel/blogs/:id" element={<BlogsDetailPage />} />
        <Route path="/travel/places" element={<PlacesRouterPage />} />
        <Route path="/travel/*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
