// import React, { useState } from "react";
// import { Form, useActionData } from "react-router";
// import type { Route } from ".react-router/types/app/routes/+types/home";


// // upload data npm imjackson must installed for remix
// import {
//   type FileUpload,
//   parseFormData,
// } from "@mjackson/form-data-parser";



// import { Avatar, AvatarImage } from "~/components/ui/avatar";
// import { Button } from "~/components/ui/button";
// import postDetails from './../../database/TEMPData/PostData';



// // function CreatePostCard() {
// //   // const [post ,setPost] =  useState(postDetails)
// //   // const [postDescription, setPostDescription] = useState("");
// //   // const [postTags, setPostTags] = useState([""]);
// //   // const [postPrice, setPostPrice] = useState(0);
// //   // const [productName, setProductName] = useState("");
// //   // const [postImg, setPostImg] = useState<File | null>(null);
  

// //   return (
// //     <Form method="post"  encType="multipart/form-data">
// //       <div className="rounded-sm shadow-md border-b-4 border-t-4  min-h-[200px]">
// //         <div className="productInput flex items-center  mx-2 gap-4">
// //           <div className="h-22 w-20 rounded-full overflow-hidden">
// //             <img
// //               src="https://www.gravatar.com/avatar/
// // 205e460b479e2e5b48aec07710c08d50"
// //               className="object-cover h-full w-full "
// //             />
// //           </div>

// //           <label htmlFor="Product-Description" className="flex w-full ">
// //             <textarea
// //               name="Product-Description"
// //               id="Product-Description"
// //               placeholder="I have Buga Luga awesome under 5$ just for you"
// //               aria-label="Product-Description"
// //               value={postDescription}
// //               onChange={(e) => setPostDescription(e.target.value)}
// //               className="border-4 text-2xl font-mono  shadow-lg rounded-2xl w-full"
// //             ></textarea>
// //           </label>
// //         </div>
// //         <div className="productDetail flex justify-evenly items-center mb-2">
// //           <label htmlFor="Tags" className="flex items-center">
// //             <Button size="sm" className="font-mono">
// //               Tags
// //             </Button>
// //             {/* <p className="font-medium text-xl pr-1">Tags</p> */}
// //             <input
// //               type="text"
// //               name="Tags"
// //               id="Tags"
// //               placeholder="Tags"
// //               value={postTags}
// //               onChange={(e)=> setPostTags(e.target.value.split(','))}
// //               className="border-4 shadow-lg rounded-2xl w-22"
// //             />
// //             <input
// //               type="text"
// //               placeholder="Price$"
// //               name="Price"
// //               value={postPrice}
// //               onChange={(e)=>setPostPrice(parseInt(e.target.value))}
// //               className="border-4 shadow-lg rounded-2xl w-22"
// //             />
// //           </label>
// //           <input
// //             type="text"
// //             placeholder="Product Name"
// //             name="Product-Name"
// //             id="Product-Name"
// //             value={productName}
// //             onChange={(e)=>setProductName(e.target.value)}
// //             className="border-4 shadow-lg rounded-2xl w-32"
// //           />
// //           <Button className="font-mono">Ai description</Button>
// //         </div>
// //         <div className="flex justify-between mx-4 items-center">
// //           <div className="flex  items-center gap-2">
// //             <Button className="font-mono ">
// //             <div style={{display:"none"}} >
// //             <input 
// //             type="file" 
// //             id="file"
// //             accept=".png,jpeg,.jpg"
// //             onChange={(e) => {
// //               if (e.target.files && e.target.files.length > 0) {
// //                 setPostImg(e.target.files[0]);
// //               }
// //             }}
// //              />
// //           </div>
// //               Img
              
// //             </Button>
// //             <Button className="font-mono  ">GIf</Button>
// //           </div>
// //           <Button className="font-mono" type="submit" > Create Post</Button>
// //         </div>
// //       </div>
// //     </Form>
// //   );
// // }
// async function action ({request,}: Route.ActionArgs){
//   const formData = await request.formData();
//   console.log(formData);
//   return {success:true, message:"Post created successfully"};
// }


// function CreatePostCard() {
//   const actionData = useActionData<typeof action>();
//   {/* // useActionData<typeof action>() */}

//   return (
//     <Form method="post" encType="multipart/form-data">
//       <div className="rounded-sm shadow-md border-b-4 border-t-4 min-h-[200px]">
//         <div className="productInput flex items-center mx-2 gap-4">
//           <div className="h-22 w-20 rounded-full overflow-hidden">
//             <img
//               src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
//               className="object-cover h-full w-full"
//               alt="User avatar"
//             />
//           </div>

//           <label htmlFor="Product-Description" className="flex w-full">
//             <textarea
//               name="Product-Description"
//               id="Product-Description"
//               placeholder="I have Buga Luga awesome under 5$ just for you"
//               aria-label="Product-Description"
//               className="border-4 text-2xl font-mono shadow-lg rounded-2xl w-full"
//             ></textarea>
//           </label>
//         </div>
//         <div className="productDetail flex justify-evenly items-center mb-2">
//           <label htmlFor="Tags" className="flex items-center">
//             <Button size="sm" className="font-mono">
//               Tags
//             </Button>
//             <input
//               type="text"
//               name="Tags"
//               id="Tags"
//               placeholder="Tags"
//               className="border-4 shadow-lg rounded-2xl w-22"
//             />
//             <input
//               type="number"
//               placeholder="Price$"
//               name="Price"
//               className="border-4 shadow-lg rounded-2xl w-22"
//             />
//           </label>
//           <input
//             type="text"
//             placeholder="Product Name"
//             name="Product-Name"
//             id="Product-Name"
//             className="border-4 shadow-lg rounded-2xl w-32"
//           />
//           <Button className="font-mono">Ai description</Button>
//         </div>
//         <div className="flex justify-between mx-4 items-center">
//           <div className="flex items-center gap-2">
//             <Button className="font-mono">
//               <label htmlFor="fileUpload">
//                 <input type="file" accept="image/*" name="postImg" id="fileUpload"  />
//                 Img
//               </label>
//             </Button>
//             <Button className="font-mono">GIf</Button>
//           </div>
//           <Button className="font-mono" type="submit">Create Post</Button>
//         </div>
//       </div>
//       {actionData?.success && <p>{actionData.message}</p>}
//     </Form>
//   );
// }


// export default CreatePostCard;
