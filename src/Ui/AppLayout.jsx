import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function AppLayout() {
  return (
    <>
      <NavBar />
      <div className="mx-auto max-w-3xl px-3 sm:px-2">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default AppLayout;
