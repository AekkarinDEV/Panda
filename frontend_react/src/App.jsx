import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home"
import Login from "./pages/Login";

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="log_in" element={<Login/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
