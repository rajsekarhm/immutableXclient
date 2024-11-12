import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import ResponsiveGrid from "./frameworks/components/Grid";
export const App = () => {
  return <>
  {/* <ResponsiveGrid/> */}
  <RouterProvider router={Router}/>
  </>
};

export default App;
