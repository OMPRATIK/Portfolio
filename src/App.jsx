import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import AppLayout from "./Ui/AppLayout";
import Blogs from "./Pages/Blogs";
import Projects from "./Pages/Projects";
import Profile from "./Pages/Profile";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={true}>
      <Routes location={location} key={location.pathname}>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
