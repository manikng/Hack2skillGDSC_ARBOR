import { Link, useParams, useLocation } from "react-router";
import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";

import { app } from "shared/database/firebase";
import type { Route } from ".react-router/types/app/routes/+types/users";

export async function loader({ params }: Route.LoaderArgs) {
  return { username: params.username };
}

interface LeftSidebarProps {
  username: string;
  className?: string;
  isCollapsed: boolean;
  onToggle: () => void;
}

export function UniversitySvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-building-bank"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 21l18 0" />
      <path d="M3 10l18 0" />
      <path d="M5 6l7 -3l7 3" />
      <path d="M4 10l0 11" />
      <path d="M20 10l0 11" />
      <path d="M8 14l0 3" />
      <path d="M12 14l0 3" />
      <path d="M16 14l0 3" />
    </svg>
  );
}
export function OpenSidebarSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="icon icon-tabler icons-tabler-filled icon-tabler-layout-sidebar-left-expand"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm0 2h-9v14h9a1 1 0 0 0 .993 -.883l.007 -.117v-12a1 1 0 0 0 -.883 -.993l-.117 -.007zm-4.387 4.21l.094 .083l2 2a1 1 0 0 1 .083 1.32l-.083 .094l-2 2a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.292 -1.293l-1.292 -1.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.32 -.083z" />
    </svg>
  );
}

export function ClosedSidebarSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="icon icon-tabler icons-tabler-filled icon-tabler-layout-sidebar-right-expand"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm-3 2h-9a1 1 0 0 0 -.993 .883l-.007 .117v12a1 1 0 0 0 .883 .993l.117 .007h9v-14zm-3.293 4.293a1 1 0 0 1 .083 1.32l-.083 .094l-1.292 1.293l1.292 1.293a1 1 0 0 1 .083 1.32l-.083 .094a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 -.083 -1.32l.083 -.094l2 -2a1 1 0 0 1 1.414 0z" />
    </svg>
  );
}

function LeftSidebar({
  username,
  className,
  isCollapsed,
  onToggle,
}: LeftSidebarProps) {
  const [userName, setUsername] = useState(username);
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1] || "";

  return (
    <nav
      className={`h-auto  ${className} ${
        isCollapsed ? "w-16" : "w-64"
      } transition-all duration-300 border-r border-amber-100 bg-gradient-to-b from-white to-amber-50 shadow-[2px_0_15px_rgba(212,175,55,0.1)]
        sticky top-0 z-30 h-screen overflow-y-auto
      `}
    >
      <div className="flex flex-col h-full p-6">
        <button
          onClick={onToggle}
          className="self-end mb-4 hover:scale-110 transition-transform"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <OpenSidebarSvg /> : <ClosedSidebarSvg />}
        </button>

        {!isCollapsed ? (
          <div className="">
            <div className="flex flex-col items-center mb-8">
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300 to-purple-500 animate-spin-slow opacity-80 blur-md group-hover:opacity-100 transition-opacity" />
                <div className="relative   h-24 w-24 rounded-full border-2 border-amber-200 overflow-hidden shadow-inner transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="https://github.com/shadcn.png"
                    alt="User avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              {username && (
                <div className="mt-4 text-center">
                  <span className="text-amber-500 font-medium">Welcome,</span>
                  <h2 className="text-xl font-bold text-gray-800 tracking-tight">
                    {username}
                  </h2>
                </div>
              )}
            </div>

            <div className="space-y-2 sticky top-0  ">
              <h3 className="text-sm uppercase text-gray-500 font-semibold tracking-wider pl-2 mb-3">
                My Branches
              </h3>
              <nav className="flex flex-col space-y-1">
                {[
                  { name: "FastBuySell", icon: "🛒" },
                  { name: "NaturaLoop", icon: "🌱" },
                  { name: "Transport & Logistics", icon: "🚚" },
                  { name: "University", icon: <UniversitySvg /> },
                  { name: "More", icon: "➕" },
                ].map((branch) => (
                  <Link
                    key={branch.name}
                    to={`/${branch.name.replace(/ & /g, "")}`}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                      currentPath === branch.name.replace(/ & /g, "")
                        ? "bg-gradient-to-r from-amber-100 to-amber-50 text-amber-900 border border-amber-200 shadow-sm"
                        : "text-gray-700 hover:bg-amber-50 hover:text-amber-800"
                    }`}
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">
                      {branch.icon}
                    </span>
                    <span className="font-medium">{branch.name}</span>
                    {currentPath === branch.name.replace(/ & /g, "") && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-500" />
                    )}
                  </Link>
                ))}
              </nav>
            <div className="mt-auto pt-6 border-t border-amber-100">
              <Link
                to="/settings"
                className="flex items-center gap-2 text-gray-500 hover:text-amber-700 transition-colors text-sm py-2"
              >
                <span>⚙️</span>
                <span>Account Settings</span>
              </Link>
            </div>
            </div>

          </div>
        ) : (
          <nav className="flex flex-col space-y-4 items-center">
            {[
              { name: "FastBuySell", icon: "🛒" },
              { name: "NaturaLoop", icon: "🌱" },
              { name: "Transport & Logistics", icon: "🚚" },
              { name: "University", icon: <UniversitySvg /> },
              { name: "More", icon: "➕" },
            ].map((branch) => (
              <Link
                key={branch.name}
                to={`/${branch.name.replace(/ & /g, "")}`}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  currentPath === branch.name.replace(/ & /g, "")
                    ? "bg-gradient-to-r from-amber-100 to-amber-50 text-amber-900 border border-amber-200 shadow-sm"
                    : "text-gray-700 hover:bg-amber-50 hover:text-amber-800"
                }`}
                title={branch.name}
              >
                <span className="text-lg">{branch.icon}</span>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </nav>
  );
}

export default LeftSidebar;

// import { Link, useParams, useLocation } from "react-router";
// import React, { useEffect, useState } from "react";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { getDatabase, ref, get } from "firebase/database";

// import { app } from "shared/database/firebase";
// import type { Route } from ".react-router/types/app/routes/+types/users";

// export async function loader({ params }: Route.LoaderArgs) {
//   return { username: params.username };
// }

// interface LeftSidebarProps {
//   username: string;
//   className?: string;
// }

// export function UniversitySvg() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="icon icon-tabler icons-tabler-outline icon-tabler-building-bank"
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M3 21l18 0" />
//       <path d="M3 10l18 0" />
//       <path d="M5 6l7 -3l7 3" />
//       <path d="M4 10l0 11" />
//       <path d="M20 10l0 11" />
//       <path d="M8 14l0 3" />
//       <path d="M12 14l0 3" />
//       <path d="M16 14l0 3" />
//     </svg>
//   );
// }
// export function OpenSidebarSvg() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className="icon icon-tabler icons-tabler-filled icon-tabler-layout-sidebar-left-expand"
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm0 2h-9v14h9a1 1 0 0 0 .993 -.883l.007 -.117v-12a1 1 0 0 0 -.883 -.993l-.117 -.007zm-4.387 4.21l.094 .083l2 2a1 1 0 0 1 .083 1.32l-.083 .094l-2 2a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.292 -1.293l-1.292 -1.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.32 -.083z" />
//     </svg>
//   );
// }

// export function ClosedSidebarSvg() {
//   return (
//     <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-layout-sidebar-right-expand"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm-3 2h-9a1 1 0 0 0 -.993 .883l-.007 .117v12a1 1 0 0 0 .883 .993l.117 .007h9v-14zm-3.293 4.293a1 1 0 0 1 .083 1.32l-.083 .094l-1.292 1.293l1.292 1.293a1 1 0 0 1 .083 1.32l-.083 .094a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 -.083 -1.32l.083 -.094l2 -2a1 1 0 0 1 1.414 0z" /></svg>
//   )
// }

// function LeftSidebar({ username, className }: LeftSidebarProps) {
//   const [userName, setUsername] = useState(username);
//   const location = useLocation();
//   const currentPath = location.pathname.split("/")[1] || "";

//   return (
//     <div
//       className={`h-auto ${className} w-64 border-r border-amber-100 bg-gradient-to-b from-white to-amber-50 shadow-[2px_0_15px_rgba(212,175,55,0.1)]`}
//     >
//       <div className="flex flex-col h-full p-6">
//         {/* Profile Section */}
//         <div className="flex flex-col items-center mb-8">
//           <div className="relative group">
//             <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300 to-purple-500 animate-spin-slow opacity-80 blur-md group-hover:opacity-100 transition-opacity"></div>
//             <div className="relative h-24 w-24 rounded-full border-2 border-amber-200 overflow-hidden shadow-inner transition-transform duration-300 group-hover:scale-105">
//               <img
//                 src="https://github.com/shadcn.png"
//                 alt="User avatar"
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           </div>

//           {userName && (
//             <div className="mt-4 text-center">
//               <span className="text-amber-500 font-medium">Welcome,</span>
//               <h2 className="text-xl font-bold text-gray-800 tracking-tight">
//                 {userName}
//               </h2>
//             </div>
//           )}
//         </div>

//         {/* Navigation Section */}
//         <div className="space-y-2">
//           <h3 className="text-sm uppercase text-gray-500 font-semibold tracking-wider pl-2 mb-3">
//             My Branches
//           </h3>

//           <nav className="flex flex-col space-y-1">
//             {[
//               { name: "FastBuySell", icon: "🛒" },
//               { name: "NaturaLoop", icon: "🌱" },
//               { name: "Transport & Logistics", icon: "🚚" },
//               { name: "University", icon: <UniversitySvg /> },
//               { name: "More", icon: "➕" },
//             ].map((branch) => (
//               <Link
//                 key={branch.name}
//                 to={`/${branch.name.replace(/ & /g, "")}`}
//                 className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
//                   currentPath === branch.name.replace(/ & /g, "")
//                     ? "bg-gradient-to-r from-amber-100 to-amber-50 text-amber-900 border border-amber-200 shadow-sm"
//                     : "text-gray-700 hover:bg-amber-50 hover:text-amber-800"
//                 }`}
//               >
//                 <span className="text-lg group-hover:scale-110 transition-transform">
//                   {branch.icon}
//                 </span>
//                 <span className="font-medium">{branch.name}</span>

//                 {currentPath === branch.name.replace(/ & /g, "") && (
//                   <span className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-500"></span>
//                 )}
//               </Link>
//             ))}
//           </nav>
//         </div>

//         {/* Footer Section */}
//         <div className="mt-auto pt-6 border-t border-amber-100">
//           <Link
//             to="/settings"
//             className="flex items-center gap-2 text-gray-500 hover:text-amber-700 transition-colors text-sm py-2"
//           >
//             <span>⚙️</span>
//             <span>Account Settings</span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LeftSidebar;

// //-------------preve
// // import { Link, useParams } from "react-router";
// // import React, { useEffect, useState } from "react";
// // import { getAuth, onAuthStateChanged } from "firebase/auth";
// // import { getDatabase, ref, get } from "firebase/database";

// // import { app } from "shared/database/firebase";
// // import type { Route } from ".react-router/types/app/routes/+types/users";

// // export async function loader( {params}: Route.LoaderArgs) {
// //   console.log("params",params.username);
// //   const username =  params.username;
// //   console.log("username",username);
// //   return {username};
// // }

// // interface LeftSidebarProps {
// //   username:  string ;
// // }

// // function LeftSidebar({username}:LeftSidebarProps) {
// //   // const userName  = username
// //   const  [userName, setUsername] = useState(username);

// //   // console.log("lod is ",loaderData);
// // // const username = "hi";
// // console.log("username from users.tsx",userName);
// //   // const [username, setUsername] = useState(loaderData.username);
// //   // console.log("username",username);

// //   // useEffect(() => {
// //   //   const auth = getAuth(app);
// //   //   const db = getDatabase(app);
// //   //   onAuthStateChanged(auth, (user) => {
// //   //     if (user) {
// //   //       const userRef = ref(db, `users/${user.uid}`);
// //   //       get(userRef).then((snapshot) => {
// //   //         if (snapshot.exists()) {
// //   //           setUsername(snapshot.val().name);
// //   //         }
// //   //       });
// //   //     }
// //   //   });
// //   // }, []);

// //   return (
// //     <>
// //       <div className=".leftside flex h-screen ">
// //         {/* Main Content */}
// //         <div className="flex-1 flex flex-col items-center p-4">
// //           {/* Avatar Section */}
// //           <div className="flex flex-col items-center justify-center shadow-lg rounded-full h-32 w-32 overflow-hidden bg-gray-800">
// //             <img
// //               src="https://github.com/shadcn.png"
// //               alt="Avatar"
// //               className="object-cover h-full w-full"
// //             />

// //             {/* Display logged user name */}
// //             <div className="text-white mt-2"> </div>
// //           </div>
// //           {/* Branches Title */}
// //           <div className="mt-8">
// //           {username !="" ?  <div className="font-bold text-2xl text-blue-950">
// //              <span className="text-orange-400">HI </span> {userName}
// //             </div> : null}
// //             <span className="font-bold text-2xl text-gray-700">Branches</span>
// //           </div>
// //           {/* Branches Links */}
// //           <div className="flex flex-col items-stretch mt-4 w-full max-w-md">
// //             <Link
// //               to={`/FastBuySell`}
// //               className="shadow-md rounded-md p-4 mb-2 bg-white hover:bg-gray-50 transition duration-300"
// //             >
// //               <div className="flex items-center justify-center gap-2">
// //                 <span className="font-semibold text-xl text-gray-800">
// //                   FastBuySell
// //                 </span>
// //               </div>
// //             </Link>
// //             <Link
// //               to={`/NaturaLoop`}
// //               className="shadow-md rounded-md p-4 mb-2 bg-white hover:bg-gray-50 transition duration-300"
// //             >
// //               <div className="flex items-center justify-center gap-2">
// //                 <span className="font-semibold text-xl text-gray-800">
// //                   NaturaLoop
// //                 </span>
// //               </div>
// //             </Link>
// //             <Link
// //               to={`/Transport & Logistics`}
// //               className="shadow-md rounded-md p-4 mb-2 bg-white hover:bg-gray-50 transition duration-300"
// //             >
// //               <div className="flex items-center justify-center gap-2">
// //                 <span className="font-semibold text-xl text-gray-800">
// //                   Transport & Logistics
// //                 </span>
// //               </div>
// //             </Link>
// //             <Link
// //               to={`/More`}
// //               className="shadow-md rounded-md p-4 bg-white hover:bg-gray-50 transition duration-300"
// //             >
// //               <div className="flex items-center justify-center gap-2">
// //                 <span className="font-semibold text-xl text-gray-800">
// //                   More
// //                 </span>
// //               </div>
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default LeftSidebar;
