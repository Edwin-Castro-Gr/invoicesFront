import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/Navbar";
import FormClient from "../pages/FormClient";
import FormProject from "../pages/FormProject";
import Home from "../pages/Home";
import Login from "../pages/Login";
import TableClient from "../pages/TableClient";
import TableProject from "../pages/TableProject";
import TableInvoices from "../pages/TableInvoices";
import { PrivateRoute } from "./PrivateRoute";
import { Register } from "../pages/registerPage";



export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<Register />} />
        <Route index element={<Home />} />
        <Route path="/" element={<NavBar />}>
        {/* <Route path="/FormClient" element={<FormClient />} /> */}
        
        <Route path="TableClient" element={
          <PrivateRoute>
            <TableClient />
          </PrivateRoute>} />
        
        <Route path="FormProject" element={
          <PrivateRoute>
            <FormProject />
          </PrivateRoute>} />
        
        <Route path="TableProject" element={
          <PrivateRoute>
            <TableProject />
          </PrivateRoute>} />
        
        <Route path="FormClient" element={
          <PrivateRoute>
            <FormClient />
          </PrivateRoute>} />

          <Route path="TableInvoices" element={
          <PrivateRoute>
            <TableInvoices/>
          </PrivateRoute>} />
        
        </Route>
      </Routes>
    </>
  )
}