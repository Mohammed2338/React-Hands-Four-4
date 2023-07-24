import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Student from "./Student";
import Contact from "./Contact";
import LinkCompo from "./LinkCompo";
export default function RouteCompo() {
  return (
    <div>
      <BrowserRouter>
        <LinkCompo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
