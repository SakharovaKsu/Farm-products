import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
// import Order from "/src/components/pages/order/order";
import { Main } from "./styles";
import { Outlet } from "react-router-dom";

// Обёртка для контента страниц
function PageWrapper({ products }) {
  return (
    <>
      <Header />
      <Main>
        {/* <Order products={products} /> */}
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
