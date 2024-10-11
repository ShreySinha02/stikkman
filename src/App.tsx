
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

import Page3 from "./pages/Page3";

function App() {
  
  return (
    <div>
    <section className="h-screen snap-always snap-center ">
      <Home/>
    </section>
    <section className="h-screen snap-always snap-center ">
      <Page1/>
    </section>
    <section className="h-screen snap-always snap-center">
      <Page2/>
    </section>
    <section className="h-screen snap-always snap-center">
     <Page3/>
    </section>
  </div>
  
  );
}

export default App;
