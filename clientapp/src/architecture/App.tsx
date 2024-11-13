import { RouterProvider } from "react-router-dom";
import Router from "./Router";
// import { DropdownMenuDefault } from "./frameworks/components/DropMenu";

export const App = () => {
  return (
    <>
    {/* <DropdownMenuDefault/> */}
      <RouterProvider router={Router}/>
    </>
  );
};

export default App;
