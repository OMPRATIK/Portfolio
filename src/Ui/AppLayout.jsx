import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import PageTransition from "../components/PageTransition";

function AppLayout() {
  return (
    <>
      <NavBar />
      <div className="mx-auto max-w-3xl px-3 sm:px-2">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
