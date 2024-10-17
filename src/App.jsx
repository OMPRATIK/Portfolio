import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import AppLayout from "./Ui/AppLayout";
import Blogs from "./Pages/Blogs";
import Projects from "./Pages/Projects";
import Profile from "./Pages/Profile";
import NavBar from "./Ui/NavBar";

function App() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <Routes location={location} key={location.pathname}>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
