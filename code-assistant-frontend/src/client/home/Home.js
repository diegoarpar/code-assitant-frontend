import React, { Suspense } from "react";
import FallbackPage from "./FallbackPage";

const HomeModule = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
    import("./HomeModule")
  );
});

const Home = () => {
  return (
    <Suspense fallback={<FallbackPage />}>
      <HomeModule />
    </Suspense>
  );
};
export default Home;