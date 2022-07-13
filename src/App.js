import React, { Suspense } from "react";
// import About from './About'
// import Friends from './Friends'
const About = React.lazy(() => import("./About"));
const Friends = React.lazy(() => import("./Friends"));
const App = () => {
  return (
    <div>
      <h1>Lazy Loading !!</h1>

      <Suspense fallback={<div>Plz wait.... About Page is Loading</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div>Plz wait.... Friends Page is Loading</div>}>
        <Friends />
      </Suspense>
    </div>
  );
};

export default App;
