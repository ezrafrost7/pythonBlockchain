import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ExtendChain from "./pages/ExtendChain";
import NoPath from "./pages/NoPath"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/extendchain' element={<ExtendChain />} />
          <Route path="*" element={<NoPath />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}