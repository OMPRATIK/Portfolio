import { useContext } from "react";
import { Resize } from "./ResizeScreenProvider";

function useResizeScreen() {
  const context = useContext(Resize);
  if (!context) {
    throw new Error("useResizeScreen must be used within ResizeScreenProvider");
  }
  return context;
}

export default useResizeScreen;
