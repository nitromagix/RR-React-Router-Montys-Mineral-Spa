//

import { Link, useLocation } from "react-router-dom";
import Package from "./Package";
import PackageCrystal from "./PackageCrystal";
import PackageHotspring from "./PackageHotspring";
import PackageHypnotherapy from "./PackageHypnotherapy";
import PackageMineralBath from "./PackageMineralBath";
import PackageMonkeyMeditation from "./PackageCrystal";

function useQuery() {
   return new URLSearchParams(useLocation().search);
}

function QueryScreen() {
   const query = useQuery();
   const p = query.get("p");
   console.log(p);
   return (
      <div>
         {p ? <Package package={p} /> : ''}
      </div>
   );
}

export default function Packages(props) {
   const displayPackages = props.packages.map((eachPackage, i) => (
      <li key={i}>
         <Link to={"?p=" + eachPackage.link}>{eachPackage.name}</Link>
      </li>
   ));

   return (
      <div>
         <div className="packages">
            <div className="packagesHeader">
               <h1>Our Packages</h1>
            </div>
            <ul>{displayPackages}</ul>
         </div>
         <div className="display">
            <QueryScreen />
         </div>
      </div>
   );
}
