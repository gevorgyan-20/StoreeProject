import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";
import Home from "../Pages/Home/Home";
import { useDispatch } from "react-redux";
import KrasovkiPage from "../Pages/Krasovki/KrasovkiPage";
import BlogPage from "../Pages/Blog/BlogPage";
import Odejda from "../Pages/Odejda/Odejda";
import Accessories from "../Pages/Accesories/Accessories";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import EachProduct from "../Pages/EachProduct/EachProduct";
import Profil from "../Pages/Profil/Profil";
import Orders from "../Pages/Orders/Orders";

function AppRouter() {
  const dispatch = useDispatch();

  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };

  return (
    <div>
      <Routes>
        {ScrollToTop()}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/krasovki" element={<KrasovkiPage />} />
          <Route path="/odejda" element={<Odejda />} />
          <Route path="/accesories" element={<Accessories />} />
          <Route path="/BlogPage" element={<BlogPage />} />
          <Route path="/blog" element />
          <Route path="/each-product" element={<EachProduct/>} />
          <Route path="/profil" element={<Profil/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default AppRouter;
