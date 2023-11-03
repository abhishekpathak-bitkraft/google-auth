import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";


function App() {
  const [user, setUser] = useState<any>(null);

  return (
    <>
      <BrowserRouter>
        <h1>Header</h1>

        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/login" element={<Login setUser={setUser} />} />
          <Route index path="/register" element={<Register />} />
          <Route index path="/dashboard" element={<Dashboard user={user}/>} />
        </Routes>
        <h1>Footer</h1>
      </BrowserRouter>
    </>
  );
}

export default App;
