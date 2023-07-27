import { memo } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components/layouts";

const index = memo((): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
});

export default index;
