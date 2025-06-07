import { RouterProvider } from "react-router-dom";
import Router from "./Router";
export function App() {
  console.count("counter")
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
