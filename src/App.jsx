import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import AppLayout from "./Ui/AppLayout";
import Blogs from "./Pages/Blogs";
import Projects from "./Pages/Projects";
import Profile from "./Pages/Profile";
import NavBar from "./Ui/NavBar";
import ResizeScreenProvider from "./hooks/resizeScreen/ResizeScreenProvider";
import { Toaster } from "react-hot-toast";

function App() {
  const location = useLocation();

  return (
    <>
      <ResizeScreenProvider>
        <NavBar />
        <Routes location={location} key={location.pathname}>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </ResizeScreenProvider>
      <Toaster position="top-center" />
    </>
  );
}

export default App;
