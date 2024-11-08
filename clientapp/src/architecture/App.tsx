import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import { Input } from "./frameworks/components/Input";
export const App = () => {
  return <>
  <RouterProvider router={Router}/>
  </>
};

export default App;
