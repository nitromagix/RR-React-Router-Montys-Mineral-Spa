//
import {
   BrowserRouter as Router,
   Link,
   Route,
   Routes,
   useLocation,
} from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Packages from "./components/Packages";
import PackageCrystal from "./components/PackageCrystal";

function useQuery() {
   return new URLSearchParams(useLocation().search);
}

function QueryScreen() {
   let query = useQuery();
   return (
     <div></div>
   )
}

function App() {
   // let query = useQuery();

   const packages = [
      { name: "Activate your Crystals", link: "crystals" },
      { name: "Monkey Meditation", link: "meditation" },
      { name: "Soak in the Hotsprings", link: "hotsprings" },
      { name: "Hypnotherapy", link: "hypnotherapy" },
      { name: "Mineral Bath", link: "mineralbath" },
   ];

   // const [searchParams] = useSearchParams();
   // console.log(searchParams);

   return (
      <div className="App">
         <Router>
            <header>
               <h1 className="title">Welcome to Monty's Mineral SPA</h1>
               <div className="navBar">
                  <ul>
                     <li>
                        <Link to="/">Home</Link>
                     </li>
                     <li>
                        <Link to="/about">About Us</Link>
                     </li>
                     <li>
                        <Link to="/packages">Our Packages</Link>
                     </li>
                  </ul>
               </div>
            </header>
            <div className="display">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route
                     path="/packages"
                     element={
                        <Packages
                           packages={packages}
                        />
                     }
                  />
               </Routes>
            </div>
         </Router>
      </div>
   );
}

export default App;
