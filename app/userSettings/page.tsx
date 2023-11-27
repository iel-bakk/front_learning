import React from "react";
import Navbar from "../components/Navbar";
import UserSettings from "./userSettings";

export default function SettingsForUser() {
  
    return (
        <div className="flex flex-col text-slate-100 min-h-screen w-full">
                <div className="h-16 mb-7 w-full Large:h-24 truncate"><Navbar pageName="USER SETTINGS" /></div>
                <div className=" h-screen"><UserSettings/></div>
        </div>
      )
    }
    
// import React from "react";
// import Navbar from "../components/Navbar";
// import UserSettings from "./userSettings";


// export default function Home() {

//   return (
    
//     <div className="flex flex-col text-slate-100 min-h-screen w-full">
//         <div className=""><Navbar pageName="User Settings"/></div>
//         <div className="h-[87%] m-2 "><UserSettings/></div>
//     </div>
//   )
// }