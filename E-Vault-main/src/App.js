import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAddress } from "@thirdweb-dev/react";
import Connect from "./Pages/Connect/Connect"; //Import the "Connect Wallet" button component
import "./styles/Home.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Help from "./Pages/Help/Help";
import GetDocument from "./Pages/GetDocument/GetDocument";
import IssuedDocument from "./Pages/IssuedDocument/IssuedDocument";
// import Vault from "./Pages/vault/vault";

export default function App() {
  const { address, isConnected } = useAddress() || {};
  const [isWalletConnected, setIsWalletConnected] = useState(isConnected); // Initialize with the Metamask connection status

  useEffect(() => {
    if (isConnected) {
      setIsWalletConnected(true);
      // Define a getBalance function here to retrieve the user's balance
      // Example: const getBalance = () => { ... };
      getBalance();
    }
  }, [isConnected, address]);

  return (
    <main className="main">
    <div className="container">
      <BrowserRouter>
        {isWalletConnected ? (
          <div>
            <Navbar />
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Help" element={<Help />} />
              <Route path="/GetDocument" element={<GetDocument />} />
              <Route path="/IssuedDocument" element={<IssuedDocument />} />
              {/* <Route path="/Vault" element={<Vault />} /> */}

            </Routes>
          </div>
        ) : null} {/* Render nothing when wallet is connected */}
        
        {/* Render the Connect component only when wallet is not connected */}
        {!isWalletConnected && (
          <div>
            <Connect
              onConnect={() => setIsWalletConnected(true)}
            />
          </div>
        )}
      </BrowserRouter>
    </div>
  </main>
    );
}
