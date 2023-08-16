// import { useState } from 'react'
import "./App.css";
import { Greet } from "./components/greet";
import { AuthContextProvider } from "./contexts/authContext";

function App() {
  return (
    <AuthContextProvider>
      <Greet name="Cherish" count={11} isLoggedIn={true} />
    </AuthContextProvider>
  );
}

export default App;
