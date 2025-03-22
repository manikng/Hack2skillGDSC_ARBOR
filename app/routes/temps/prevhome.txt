// home.tsx
import type { Route } from "./+types/home";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "shared/database/firebase";
import { CloudinaryUpload } from "./cloudUpload";
import { useEffect, useState } from "react";
import { useFetcher } from "react-router";

import Header from "./Header/Header";
import NAVBAR from "../../shared/components/nav/NAVBAR";



// 3 column ui 
import LeftSidebar from "../../shared/components/fixedsidebar/Leftsidebar/LeftSidebar";
import MiddleSidebar from "../../shared/components/fixedsidebar/Middleside/MiddlwSidebar";
import RightSidebar from "../../shared/components/fixedsidebar/RightSide/RightSidebar";
import { CheckCircleIcon, UploadIcon, XIcon } from "lucide-react";
import type { Post } from "shared/types/post";




export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}





const User_Avatar_image = "https://res.cloudinary.com/dkxicfpye/image/upload/v1742461554/ifwnkigstnfx5vwdu8la.jpg";

export async function action({ request }: Route.ActionArgs) {
  try {
    const formData = await request.formData();
    const imageUrl = await CloudinaryUpload(formData);
    
    if (!imageUrl) throw new Error("Image upload failed");

    const newPost = {
      avatarUrl: User_Avatar_image,
      description: formData.get("Product-Description")?.toString() || "No description",
      tags: (formData.get("Tags")?.toString() || "").split(",").map((t: string) => t.trim()),
      price: `${formData.get("Price")?.toString() || "0"}`,
      productName: formData.get("Product-Name")?.toString() || "Unnamed Product",
      imageUrl,
      isliked: false,
      likes: 0,
      comments: 0,
    };

    const docRef = await addDoc(collection(db, "posts"), newPost);
    return { 
      success: true, 
      message: "Post created successfully!",
      newPost: { ...newPost, id: docRef.id }
    };
  } catch (error) {
    console.error("Post creation error:", error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : "Failed to create post"
    };
  }
}

// CreatePostCard.tsx
export function CreatePostCard() {
  const fetcher = useFetcher();
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [formValues, setFormValues] = useState({
    description: "",
    productName: "",
    tags: "",
    price: ""
  });

  useEffect(() => {
    if (fetcher.data?.success) {
      setPreviewImage(null);
      setFormValues({ description: "", productName: "", tags: "", price: "" });
      const fileInput = document.getElementById("image-upload") as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    }
  }, [fetcher.data]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    file && setPreviewImage(URL.createObjectURL(file));
  };

  return (
    <fetcher.Form
      method="post"
      encType="multipart/form-data"
      className="mb-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-200"
    >
      <div className="p-6">
        {fetcher.data?.message && (
          <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
            fetcher.data.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}>
            <span>{fetcher.data.message}</span>
          </div>
        )}

        {/* Form fields */}
        <input 
          type="file" 
          name="postimage" 
          onChange={handleImageChange}
          id="image-upload"
          accept="image/*"
        />
        
        <input
          name="Product-Name"
          value={formValues.productName}
          onChange={e => setFormValues(p => ({ ...p, productName: e.target.value }))}
          placeholder="Product Name"
        />

        {/* Other form fields */}

        <button 
          type="submit" 
          disabled={fetcher.state === "submitting"}
          className="bg-purple-600 text-white px-8 py-2.5 rounded-lg disabled:opacity-50"
        >
          {fetcher.state === "submitting" ? "Publishing..." : "Publish Post"}
        </button>
      </div>
    </fetcher.Form>
  );
}





export async function loader() {
  //and when load it using loader then fetch its dbid and post data

  let querySnapshotPostData = await getDocs(collection(db, "posts"));

  
  
  let AllPosts = querySnapshotPostData.docs.map((doc) => {
    let fetchedData = { dbid: doc.id, PostData: doc.data() };
    let postdata = { ...fetchedData.PostData, id: doc.id };
   

    return postdata;
  });
  console.log("All posts are : ", AllPosts);
  return { posts: AllPosts };
}

export default function Home({loaderData}:Route.ComponentProps) {

  // console.log("now the post with their dbid are home mai : ", loaderData.posts);

  return (
    <div className="h-auto  w-full mb-4">
      <Header />
      <NAVBAR />
      <div className="flex w-full mt-10 min-h-screen">
        <LeftSidebar username="" className="flex-shrink-0" />
        <MiddleSidebar posts={loaderData.posts} className="flex-grow" />
        <RightSidebar className="flex-shrink-0" />
      </div>
    </div>
  );
}