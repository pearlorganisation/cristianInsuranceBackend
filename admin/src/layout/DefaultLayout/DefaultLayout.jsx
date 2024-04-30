import React, { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SideBar from "../Sidebar/Sidebar";

const DefaultLayout = () => {
  const [login, setLogin] = useState(false);
  return true ? (
    <div>
      <div className="grid lg:grid-cols-[250px_auto]">
        <SideBar />
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  ) : (
    <Main />
  );
};

export default DefaultLayout;
