import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AppLayout from "./Ui/AppLayout";
import Blogs from "./Pages/Blogs";
import Projects from "./Pages/Projects";
import Profile from "./Pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
