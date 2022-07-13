import React from "react";
// import About from './About'
// import Friends from './Friends'
const About = React.lazy(() => import("./About"));
const Friends = React.lazy(() => import("./Friends"));
const App = () => {
  return (
    <div>
      <About />
      <Friends />
    </div>
  );
};

export default App;
