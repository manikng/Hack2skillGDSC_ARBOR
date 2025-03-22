import type { Route } from "./+types/home";
import Header from "./Header/Header";
import React, { useEffect, useState } from "react";
import NAVBAR from "../../shared/components/nav/NAVBAR";
import { useFetcher } from "react-router";

export function meta() {
  return [
    { title: "Arbor -The Social Marketplace" },
    { name: "description", content: "Connect and create with community" },
  ];
}

import { Form, useLoaderData, useActionData } from "react-router";
import { Button } from "~/components/ui/button";

import { CloudinaryUpload } from "./cloudUpload";
import postDetails from "./../../shared/database/TEMPData/PostData";

import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";
import { db } from "shared/database/firebase";

// //fixed sidebars
import LeftSidebar from "../../shared/components/fixedsidebar/Leftsidebar/LeftSidebar";
import MiddleSidebar from "../../shared/components/fixedsidebar/Middleside/MiddlwSidebar";
import RightSidebar from "../../shared/components/fixedsidebar/RightSide/RightSidebar";
import { CheckCircleIcon, UploadIcon, XIcon } from "lucide-react";
import type { Post } from "shared/types/post";

// const User_Avatar_image = ()=> RandomAvatar();
const User_Avatar_image =
  "https://res.cloudinary.com/dkxicfpye/image/upload/v1742461554/ifwnkigstnfx5vwdu8la.jpg";
console.log("User Avatar image is : ", User_Avatar_image);

export async function loader() {
  //and when load it using loader then fetch its dbid and post data

  const querySnapshotPostData = await getDocs(collection(db, "posts"));

  const AllPosts = querySnapshotPostData.docs.map((doc) => {
    const fetchedData = { dbid: doc.id, PostData: doc.data() };
    const postdata = { ...fetchedData.PostData, id: doc.id };

    return postdata;
  });
  console.log("All posts are : ", AllPosts);
  return { posts: AllPosts };
}

export default function Home() {
  let posts = useLoaderData() as { posts: Post[] };
  console.log("Data in home is : ", posts);

  return (
    <div className="h-auto  w-full mb-4">
      <Header />
      <NAVBAR />

      <div className="flex w-full mt-10 min-h-screen">
        <LeftSidebar username="" className="flex-shrink-0" />
        <MiddleSidebar posts={posts.posts} className="flex-grow" />
        <RightSidebar className="flex-shrink-0" />
      </div>
    </div>
  );
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  //when inserting into the db no dbid is present as it only generate after the data pushed into the db
  //so when user post a  img just take sample id and put  dbid as empty string
  //and when load it using loader then fetch its dbid and post data

  let data = await request.formData();

  let imageUrlfromCloudinary = await CloudinaryUpload(data);
  console.log("Image URL in cloudinary is :", imageUrlfromCloudinary);
  // const imgResponse = await fetch(avturlapi);
  //       const imgBlob = await imgResponse.blob();
  //   const User_Avatar_image = await Cloudinary_Avatar_Upload(imgBlob);
  let user_avatar_url = User_Avatar_image;
  let newPost = {
    dbid: "",
    id: postDetails.length + 1,
    avatarUrl: user_avatar_url,
    description:
      data.get("Product-Description")?.toString() || "No description",
    tags: (data.get("Tags")?.toString() || "").split(",").map((t) => t.trim()),
    price: `${data.get("Price")?.toString() || "0"}`,
    productName: data.get("Product-Name")?.toString() || "Unnamed Product",
    imageUrl: imageUrlfromCloudinary,
    isliked: false,
    likes: 0,
    comments: 0,
  };

  try {
    let docRef = await addDoc(collection(db, "posts"), newPost);
    console.log("Document written with ID: ", docRef.id);

    postDetails.push(newPost);

    // Return success instead of redirecting
    return {
      success: true,
      message: "Post created successfully!",
    };
  } catch (error) {
    console.error("Error adding document: ", error);
    return {
      success: false,
      message: "Failed to create post",
    };
  }
}

function CreatePostCard() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [productDescription, setProductDescription] = useState<string>("");
  const [productName, setProductName] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [price, setPrice] = useState<number | string>("");
  const [image, setImage] = useState<File | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string>(User_Avatar_image); // Add state for avatar URL

  // Get action data to check if form was submitted successfully
  const actionData = useActionData<{ success: boolean; message: string }>();
  console.log("Action data is : ", actionData);
  let fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  useEffect(() => {
    if (fetcher.data?.success) {
      setPreviewImage(null);
      setProductDescription("");
      setProductName("");
      setTags("");
      setPrice("");
      setImage(null);
      const fileInput = document.getElementById(
        "image-upload"
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    }
  }, [fetcher.data]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setImage(file);
    }
  };

  return (
    <fetcher.Form
      method="post"
      encType="multipart/form-data"
      className="mb-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-200"
    >
      <div className="p-6">
        {/* Status Messages */}
        {fetcher.data?.message && (
          <div
            className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
              fetcher.data.success
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            <span>{fetcher.data.message}</span>
          </div>
        )}

        {/* Author Section */}
        <div className="flex items-center gap-4 mb-6 p-4 bg-purple-50 rounded-xl">
          <img
            // src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            src={avatarUrl ?? ""} // Use the avatarUrl state with fallback
            className="w-14 h-14 rounded-full border-2 border-purple-200"
            alt="User"
          />
          <textarea
            name="Product-Description"
            placeholder="Share your creation with the community..."
            className="flex-1 p-3 text-lg bg-transparent focus:outline-none placeholder-gray-400 resize-none"
            rows={2}
            onChange={(e) => setProductDescription(e.target.value)}
            value={productDescription}
          />
        </div>

        {/* Form Grid */}
        <div className="space-y-4 mb-6">
          <div className="relative">
            <input
              type="text"
              name="Product-Name"
              placeholder=" "
              className="w-full p-4 pt-6 bg-gray-50 rounded-lg border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 peer"
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
            />
            <label
              htmlFor="productName"
              className="absolute top-2 left-4 text-sm text-gray-500 pointer-events-none transition-all peer-focus:text-purple-600"
            >
              Product Name
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="number"
                name="Price"
                placeholder=" "
                className="w-full p-4 pt-6 bg-gray-50 rounded-lg border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 peer"
                step="0.01"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
              <label
                htmlFor="price"
                className="absolute top-2 left-4 text-sm text-gray-500 pointer-events-none transition-all peer-focus:text-purple-600"
              >
                Price ($)
              </label>
              <span className="absolute right-4 top-5 text-gray-400">$</span>
            </div>

            <div className="relative">
              <input
                type="text"
                name="Tags"
                placeholder=" "
                className="w-full p-4 pt-6 bg-gray-50 rounded-lg border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 peer"
                onChange={(e) => setTags(e.target.value)}
                value={tags}
              />
              <label
                htmlFor="tags"
                className="absolute top-2 left-4 text-sm text-gray-500 pointer-events-none transition-all peer-focus:text-purple-600"
              >
                Tags (comma separated)
              </label>
            </div>
          </div>

          {/* File Upload */}
          <div className="relative group">
            <input
              type="file"
              name="postimage"
              onChange={handleImageChange}
              className="absolute opacity-0 w-full h-full cursor-pointer"
              id="image-upload"
              accept="image/*"
            />
            <label
              htmlFor="image-upload"
              className="block p-8 text-center border-2 border-dashed border-gray-200 rounded-lg bg-gray-50 hover:border-purple-300 group-active:border-purple-400 transition-colors cursor-pointer"
            >
              <div className="space-y-2">
                <UploadIcon className="w-8 h-8 text-purple-500 mx-auto" />
                <p className="text-gray-600 font-medium">
                  Drag & drop or click to upload
                </p>
                <p className="text-sm text-gray-400">PNG, JPG up to 5MB</p>
              </div>
            </label>
          </div>
        </div>

        {/* Image Preview */}
        {previewImage && (
          <div className="mb-6 relative group">
            <img
              src={previewImage}
              alt="Preview"
              className="w-full h-48 object-cover rounded-xl border border-gray-100 shadow-sm transition-transform group-hover:scale-105"
            />
            <button
              type="button"
              onClick={() => setPreviewImage("")}
              className="absolute top-2 right-2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md transition-all"
            >
              <XIcon className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        )}

        {/* Form Actions */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <button
            type="button"
            onClick={() => {
              setPreviewImage("");
              setProductDescription("");
              setProductName("");
              setTags("");
              setPrice("");
              setImage(null);
            }}
            className="px-5 py-2.5 text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-2"
          >
            <XIcon className="w-5 h-5" />
            Clear Form
          </button>
          <Button
            type="submit"
            className="bg-gradient-to-br from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white px-8 py-2.5 rounded-lg shadow-sm hover:shadow-lg transition-all"
          >
           { isSubmitting ? "Publishing Post " :" Publish Post"}
          </Button>
        </div>
      </div>
    </fetcher.Form>
  );
}

export { CreatePostCard };
