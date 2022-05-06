import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Mainpage from "./components/mainpage/Mainpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Mainpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
