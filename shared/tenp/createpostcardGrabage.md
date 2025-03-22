// CreatePostCard component
// function CreatePostCard() {
//   const [previewImage, setPreviewImage] = useState<string>("");
//   const [productDescription, setProductDescription] = useState<string>("");
//   const [productName, setProductName] = useState<string>("");
//   const [tags, setTags] = useState<string>("");
//   const [price, setPrice] = useState<number | string>("");
//   const [image, setImage] = useState<File | null>(null);

//   // Get action data to check if form was submitted successfully
//   // const actionData = useActionData<{ success: boolean; message: string }>();
//   const actionData = useActionData<{ success: boolean; message: string }>();
//   console.log("Action data is : ", actionData);

//   // Reset form when submission is successful
//   useEffect(() => {
//     if (actionData?.success) {
//       setPreviewImage("");
//       setProductDescription("");
//       setProductName("");
//       setTags("");
//       setPrice("");
//       setImage(null);

//       // Reset file input DOM element
//       const fileInput = document.getElementById("image-upload") as HTMLInputElement;
//       if (fileInput) fileInput.value = "";
//     }
//   }, [actionData]);

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setPreviewImage(URL.createObjectURL(file));
//       setImage(file);
//     }
//   };

//   return (
//     <Form
//       method="post"
//       encType="multipart/form-data"
//       className="mb-6 bg-white rounded-lg shadow-sm border"
//     >
//       <div className="p-4">
//         {/* {actionData?.success && (
//           <div className="mb-4 p-2 bg-green-100 text-green-700 rounded animate-fade-out">
//             {actionData.message}
//           </div>
//         )} */}

//         <div className="flex items-center gap-4 mb-4">
//           <img
//             src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
//             className="w-12 h-12 rounded-full"
//             alt="User"
//           />
//           <textarea
//             name="Product-Description"
//             placeholder="Share your creation with the community..."
//             className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             rows={3}
//             onChange={(e) => setProductDescription(e.target.value)}
//             value={productDescription}
//           />
//         </div>

//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <input
//             type="text"
//             name="Product-Name"
//             placeholder="Product Name"
//             className="p-2 border rounded"
//             onChange={(e) => setProductName(e.target.value)}
//             value={productName}
//           />
//           <input
//             type="number"
//             name="Price"
//             placeholder="Price ($)"
//             className="p-2 border rounded"
//             step="0.01"
//             onChange={(e) => setPrice(e.target.value)}
//             value={price}
//           />
//           <input
//             type="text"
//             name="Tags"
//             placeholder="Tags (comma separated)"
//             className="p-2 border rounded"
//             onChange={(e) => setTags(e.target.value)}
//             value={tags}
//           />
//           <div className="relative">
//             <input
//               type="file"
//               name="postimage"
//               onChange={handleImageChange}
//               className="absolute opacity-0 w-full h-full cursor-pointer"
//               id="image-upload"
//               accept="image/*"
//             />
//             <label
//               htmlFor="image-upload"
//               className="block p-2 text-center border rounded bg-gray-100 hover:bg-gray-200 cursor-pointer"
//             >
//               Upload Images
//             </label>
//           </div>
//         </div>
//         {previewImage.length > 0 && (
//           <div className="flex gap-2 mb-4">
//             <img
//               src={previewImage}
//               alt="Preview"
//               className="w-20 h-20 object-cover rounded border"
//             />
//           </div>
//         )}

//         <div className="flex justify-end gap-4 pb-4 pr-4">
//         <button
//           type="button"
//           onClick={() => {
//             setPreviewImage("");
//             setProductDescription("");
//             setProductName("");
//             setTags("");
//             setPrice("");
//             setImage(null);
//           }}
//           className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
//         >
//           Clear
//         </button>
//           <Button
//             type="submit"
//            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg shadow-sm hover:shadow-md transition-all"
//           >
//             Post Creation
//           </Button>
//         </div>
//       </div>
//     </Form>
//   );
// }

/////////////////fEED FEED POST TSX
{/* {renderComments && (
          <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200 shadow-inner">
            <div className="flex items-center border shadow-md p-2 border-amber-300 rounded-2xl  mt-3">
              <img src={localPost.avatarUrl} alt="avatar" 
              className="w-14 h-14 rounded-full border-2 border-purple-300 shadow-inner"
              />
            <input type="text" name="comment" placeholder="i like this product " id="commentid" className="w-full outline-none px-4 "
            onChange={(e)=>setCommentValue(e.target.value)}
            />
            <svg
                onClick={handleCommentClick}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-upload hover:text-purple-700 "
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                <path d="M7 9l5 -5l5 5" />
                <path d="M12 4l0 12" />
              </svg>
          </div>
          {commentValue && <p>{commentValue}</p>}
          </div>
          // <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200 shadow-inner">
          //   <div className="flex items-center justify-end border shadow-md mt-4 max-w-md mx-auto outline-amber-500  border-accent-foreground rounded-2xl p-2">
          //     <input
          //       type="text"
          //       name="comment"
          //       id="comment"
          //       value={commentValue}
          //       onChange={(e) => setCommentValue(e.target.value)}
          //       className=""
          //     />
              // <svg
              //   onClick={handleCommentClick}
              //   xmlns="http://www.w3.org/2000/svg"
              //   width="24"
              //   height="24"
              //   viewBox="0 0 24 24"
              //   fill="none"
              //   stroke="currentColor"
              //   strokeWidth="2"
              //   strokeLinecap="round"
              //   strokeLinejoin="round"
              //   className="icon icon-tabler icons-tabler-outline icon-tabler-upload"
              // >
              //   <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              //   <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
              //   <path d="M7 9l5 -5l5 5" />
              //   <path d="M12 4l0 12" />
              // </svg>
          //     {commentValue && <p>{commentValue}</p>}
          //   </div>

          //   <p className="text-sm text-purple-900 leading-relaxed">
          //     Comments section coming soon...
          //   </p>
          // </div>
        )} */}


//HANDLE CLICK

  // function handleCommentClick() {
  //   const docRef = doc(db, "posts", localPost.id);
  //   // Get existing comments or initialize as empty array
  //   const existingComments = localPost?.userComments || [];
  //   // Create new flat array with the new comment
  //   const updatedComments = [...existingComments, commentValue];

  //   console.log("the user comments are : ", updatedComments);

  //   setDoc(docRef, {
  //     ...localPost,
  //     comments: localPost.comments + 1,
  //     userComments: updatedComments
  //   }, {merge:true}).then((res)=>{
  //     console.log("Document written with ID: ", localPost.id);
  //     console.log("the response is : ", res);
  //     // Update local state to reflect changes
  //     setLocalPost(prev => ({
  //       ...prev,
  //       comments: prev.comments + 1,
  //       userComments: updatedComments
  //     }));
  //   }).catch((error)=>{
  //     console.error("Error adding document: ", error);
  //   });
  //   console.log("the comment is : ", commentValue);
  //   setCommentValue("");

  // }
  // Update your handleCommentClick function
---------------

    // update(docRef, { isliked: !localPost.isliked ,
    //   likes: localPost.likes + (localPost.isliked ? -1 : 1)
    // }).then(()=>{
    //   console.log("Document updated with new like status");
    // }).catch((error)=>{
    //   console.error("Error updating document: ", error);
    // });

--------------------------
  // const HandleAiDescriptionClick = async () => {
  //   if (showAIDescription) {
  //     setGeneratingAiDescription(true)
  //     setShowAIDescription((prev)=> !prev);
  //   } else {
  //     // const response = await getresponsefromgeminiapi(localPost.productName);
  //     // console.log("the response is : ", response);
  //     // setShowAIDescription(true);
  //     setGeneratingAiDescription(true);
  //     const curpost = JSON.stringify(localPost);
  //     console.log("the local post is : ", curpost);
  //     const response = await getresponsefromgeminiapi(curpost);
  //     try {
  //       if(response){
  //         setAiDescription(response);
  //         setGeneratingAiDescription(false);
  //         setShowAIDescription(true);

  //     }} catch (error) {
  //       console.log("error getting response", error);

  //     }

  //   }
  // };
