import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Join />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
