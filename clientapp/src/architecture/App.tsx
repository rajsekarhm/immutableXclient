import { RouterProvider } from "react-router-dom";
import user from "./UserExample";
import Router from "./Router";
console.log(user)
Router
export const App = () => {
  return <>
  <RouterProvider router={Router}/>
  </>
};

export default App;
