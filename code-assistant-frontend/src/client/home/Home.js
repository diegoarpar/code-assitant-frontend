import React, { Suspense } from "react";
import FallbackPage from "./FallbackPage";
import Logs from "../logs/Logs";
import About from "../about/About";
import Token from "../token/Token";
import ChatBoard from "../chat/ChatBoard";

const HomeModule = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 1)).then(() =>
    import("./HomeModule")
  );
});

const Home = () => {
  return (
    <Suspense fallback={<FallbackPage />}>
      <HomeModule />
     
      <ChatBoard  />
      <Logs />
      <Token  />
      <About  />
    </Suspense>
  );
};
export default Home;