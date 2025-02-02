import { Outlet } from "react-router-dom";

import PageTransition from "../components/PageTransition";

function AppLayout() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-2.5 sm:px-2">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </div>
    </>
  );
}

export default AppLayout;
