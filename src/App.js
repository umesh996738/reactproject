import React from "react";
import Resturant from "./component/Basics/Resturant";
import UseState from "./component/Hooks/useState";
import UseEffect from "./component/Hooks/useEffect";
//import UseReducer from "./component/Hooks/useReducer";

const App = () => {
  return (
  // <UseReducer />;
  <>
        <Resturant/>
        <UseState/>
        <UseEffect/>
  </>
  )
};

export default App;
