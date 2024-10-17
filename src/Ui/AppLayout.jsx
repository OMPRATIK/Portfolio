import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import PageTransition from "../components/PageTransition";

function AppLayout() {
  return (
    <>
      <div className="dark mx-auto max-w-3xl px-3 sm:px-2">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
