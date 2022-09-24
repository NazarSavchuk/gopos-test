// @ts-nocheck
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Edit from "./components/Edit";

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<div>Hello</div>}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/products/edit/:id" element={<Edit />}></Route>
        <Route path="/create" element={<div>Create</div>}></Route>
      </Routes>
    </div>
  );
};

export default App;
