import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <NavBar />
      <div className="mx-auto max-w-3xl px-3 sm:px-2">
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
