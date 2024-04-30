import React, { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const DefaultLayout = () => {
  const [login, setLogin] = useState(false);
  return login ? (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  ) : (
    <Main />
  );
};

export default DefaultLayout;
