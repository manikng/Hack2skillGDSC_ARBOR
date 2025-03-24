
//-------------preve
// import { Link, useParams } from "react-router";
// import React, { useEffect, useState } from "react";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { getDatabase, ref, get } from "firebase/database";

// import { app } from "shared/database/firebase";
// import type { Route } from ".react-router/types/app/routes/+types/users";

// export async function loader( {params}: Route.LoaderArgs) {
//   console.log("params",params.username);
//   const username =  params.username;
//   console.log("username",username);
//   return {username};
// }

// interface LeftSidebarProps {
//   username:  string ;
// }

// function LeftSidebar({username}:LeftSidebarProps) {
//   // const userName  = username
//   const  [userName, setUsername] = useState(username);

//   // console.log("lod is ",loaderData);
// // const username = "hi";
// console.log("username from users.tsx",userName);
//   // const [username, setUsername] = useState(loaderData.username);
//   // console.log("username",username);

//   // useEffect(() => {
//   //   const auth = getAuth(app);
//   //   const db = getDatabase(app);
//   //   onAuthStateChanged(auth, (user) => {
//   //     if (user) {
//   //       const userRef = ref(db, `users/${user.uid}`);
//   //       get(userRef).then((snapshot) => {
//   //         if (snapshot.exists()) {
//   //           setUsername(snapshot.val().name);
//   //         }
//   //       });
//   //     }
//   //   });
//   // }, []);

//   return (
//     <>
//       <div className=".leftside flex h-screen ">
//         {/* Main Content */}
//         <div className="flex-1 flex flex-col items-center p-4">
//           {/* Avatar Section */}
//           <div className="flex flex-col items-center justify-center shadow-lg rounded-full h-32 w-32 overflow-hidden bg-gray-800">
//             <img
//               src="https://github.com/shadcn.png"
//               alt="Avatar"
//               className="object-cover h-full w-full"
//             />

//             {/* Display logged user name */}
//             <div className="text-white mt-2"> </div>
//           </div>
//           {/* Branches Title */}
//           <div className="mt-8">
//           {username !="" ?  <div className="font-bold text-2xl text-blue-950">
//              <span className="text-orange-400">HI </span> {userName}
//             </div> : null}
//             <span className="font-bold text-2xl text-gray-700">Branches</span>
//           </div>
//           {/* Branches Links */}
//           <div className="flex flex-col items-stretch mt-4 w-full max-w-md">
//             <Link
//               to={`/FastBuySell`}
//               className="shadow-md rounded-md p-4 mb-2 bg-white hover:bg-gray-50 transition duration-300"
//             >
//               <div className="flex items-center justify-center gap-2">
//                 <span className="font-semibold text-xl text-gray-800">
//                   FastBuySell
//                 </span>
//               </div>
//             </Link>
//             <Link
//               to={`/NaturaLoop`}
//               className="shadow-md rounded-md p-4 mb-2 bg-white hover:bg-gray-50 transition duration-300"
//             >
//               <div className="flex items-center justify-center gap-2">
//                 <span className="font-semibold text-xl text-gray-800">
//                   NaturaLoop
//                 </span>
//               </div>
//             </Link>
//             <Link
//               to={`/Transport & Logistics`}
//               className="shadow-md rounded-md p-4 mb-2 bg-white hover:bg-gray-50 transition duration-300"
//             >
//               <div className="flex items-center justify-center gap-2">
//                 <span className="font-semibold text-xl text-gray-800">
//                   Transport & Logistics
//                 </span>
//               </div>
//             </Link>
//             <Link
//               to={`/More`}
//               className="shadow-md rounded-md p-4 bg-white hover:bg-gray-50 transition duration-300"
//             >
//               <div className="flex items-center justify-center gap-2">
//                 <span className="font-semibold text-xl text-gray-800">
//                   More
//                 </span>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default LeftSidebar;
