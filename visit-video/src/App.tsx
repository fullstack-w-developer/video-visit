import { useEffect, useState } from "react";
import { ModalStateProvider } from "./context/ModalState";
import Modal from "react-modal";
import { FullScreenProvider } from "./context/FullScreen";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import io from "socket.io-client";
Modal.setAppElement("*");

function App() {

  return (
    <ModalStateProvider>
      <FullScreenProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/video-visit" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </FullScreenProvider>
    </ModalStateProvider>
  );
}

export default App;
