import React from "react";


import { useAuth0 } from "@auth0/auth0-react";

// styles
import "./App.css";

import Game from "./components/Game";



const App = () => {
  const { error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }



  return (
    <>

      <Game />

    </>
  );
};

export default App;
