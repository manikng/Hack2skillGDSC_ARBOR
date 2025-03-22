import React, { useEffect } from "react";
import { setDoc, updateDoc } from "firebase/firestore";

import { Button } from "~/components/ui/button";
import {
  OpenHeartIcon,
  FilledHeartIcon,
  ShareIcon,
  CommentIcon,
} from "./../../icons/icons";
import { getresponsefromgeminiapi } from "shared/AI/Gemini";
import { SplineIcon } from "lucide-react";

import Markdown from "react-markdown";
import { doc } from "firebase/firestore";
import { db } from "shared/database/firebase";
import { update } from "firebase/database";

interface Post {
  dbid: string;

  id: string;
  avatarUrl: string;
  description: string;
  tags: string[];
  price: string;
  productName: string;
  imageUrl: string;
  isliked: boolean;
  likes: number;
  comments: number;
  userComments: string[];
}

interface FeedPostProps {
  post: Post;
}


 function FeedPost({ post }: FeedPostProps) {
  console.log("posts in the feedposts",post);
  
  const [localPost, setLocalPost] = React.useState(post);
  const [showAIDescription, setShowAIDescription] = React.useState(false);
  const [AiDescription, setAiDescription] = React.useState("");
  const [generatingAiDescription, setGeneratingAiDescription] =
    React.useState(false);
  const [renderComments, setRenderComments] = React.useState(false);
  const [commentValue, setCommentValue] = React.useState("");
  console.log("the avatar: ", localPost.avatarUrl);
  
  const HandleAiDescriptionClick: () => Promise<void> = async () => {
    // Immediately handle hide/cancel action
    if (showAIDescription || generatingAiDescription) {
      setShowAIDescription(false);
      setGeneratingAiDescription(false);
      setAiDescription("");
      return;
    }

    // Only proceed if not already showing/generating
    try {
      setGeneratingAiDescription(true);
      const response = await getresponsefromgeminiapi(
        JSON.stringify(localPost)
      );
      setAiDescription(response || "No AI description available.");
      setShowAIDescription(true);
    } catch (error) {
      console.error("Error generating description", error);
      // Consider adding error state feedback
    } finally {
      setGeneratingAiDescription(false);
    }
  };

  const toggleLike = () => {
    console.log("the local post is : ", localPost.id);

    const docRef = doc(db, "posts", localPost.id);
    setDoc(
      docRef,
      {
        ...localPost,
        isliked: !localPost.isliked,
        likes: localPost.likes + (localPost.isliked ? -1 : 1),
      },
      { merge: true }
    )
      .then(() => {
        console.log("Document written with ID: ", localPost.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

    // update(docRef, { isliked: !localPost.isliked ,
    //   likes: localPost.likes + (localPost.isliked ? -1 : 1)
    // }).then(()=>{
    //   console.log("Document updated with new like status");
    // }).catch((error)=>{
    //   console.error("Error updating document: ", error);
    // });

    setLocalPost((prev) => ({
      ...prev,
      isliked: !prev.isliked,
      likes: prev.isliked ? prev.likes - 1 : prev.likes + 1,
    }));
  };
  console.log("the rendercomment is: ", renderComments);

  
  function handleCommentClick() {
    if (!commentValue.trim()) return; // Don't submit empty comments

    const docRef = doc(db, "posts", localPost.id);
    const existingComments = localPost?.userComments || [];
    const updatedComments = [...existingComments, commentValue];

    // Show optimistic UI update
    setLocalPost((prev) => ({
      ...prev,
      comments: prev.comments + 1,
      userComments: updatedComments,
    }));

    // Clear input field IMMEDIATELY - this is key
    setCommentValue("");

    // Update database
    setDoc(
      docRef,
      {
        ...localPost,
        comments: localPost.comments + 1,
        userComments: updatedComments,
      },
      { merge: true }
    ).catch((error) => {
      console.error("Error adding comment:", error);
      // Rollback optimistic update if needed
      setLocalPost((prev) => ({
        ...prev,
        comments: prev.comments - 1,
        userComments: existingComments,
      }));
    });
  }


  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
      {/* Header with subtle gradient */}
      <div className="flex items-center p-6 gap-4 bg-gradient-to-r from-purple-50 to-purple-25">
        <img
          src={localPost.avatarUrl}
          className="w-12 h-12 rounded-full border-2 border-purple-300 shadow-inner"
          alt="User avatar"
        />
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="font-bold text-gray-900 text-lg tracking-tight">
              {localPost.productName}
            </h3>
            <span className="text-sm bg-gradient-to-br from-orange-100 to-orange-50 text-orange-800 px-3 py-1 rounded-full border border-orange-200">
              ${localPost.price}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {localPost.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-medium text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100 hover:bg-purple-100 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content with image overlay */}
      <div className="relative px-6 pb-6">
        <div className="relative mt-4 rounded-xl overflow-hidden shadow-inner">
          <img
            src={localPost.imageUrl}
            alt="Post content"
            className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <button
            onClick={HandleAiDescriptionClick}
            className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm text-sm font-semibold text-purple-700 hover:bg-white transition-all hover:shadow-md border border-purple-100"
          >
            {/* {showAIDescription ? "Hide AI Insight" : "Generate AI Insight"} */}
            {generatingAiDescription ? (
              <span className="flex items-center gap-2">
                <SplineIcon className="w-4 h-4 animate-spin" />
                Cancel Generation
              </span>
            ) : showAIDescription ? (
              "Hide AI Insight"
            ) : (
              "Generate AI Insight"
            )}
          </button>
        </div>

        {generatingAiDescription ? (
          <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200 shadow-inner">
            <p className="text-sm text-purple-900 leading-relaxed animate-pulse">
              Generating AI Description...
            </p>
          </div>
        ) : showAIDescription && AiDescription ? (
          <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200 shadow-inner">
            <div className="text-sm text-purple-900 leading-relaxed">
              <Markdown className="AidescriptionMarkdown">
                {AiDescription}
              </Markdown>
            </div>
          </div>
        ) : null}

        <p className="text-gray-700 mt-4 text-base leading-relaxed tracking-wide">
          {localPost.description}
        </p>
      </div>

      {/* Actions with enhanced visual hierarchy */}
      <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <button
              onClick={toggleLike}
              className="flex items-center gap-2 transition-all hover:-translate-y-0.5"
            >
              {localPost.isliked ? (
                <div className="w-6 h-6 text-red-500 hover:text-red-600">
                  <FilledHeartIcon />{" "}
                </div>
              ) : (
                <div className="w-6 h-6 text-gray-500 hover:text-red-500">
                  {" "}
                  <OpenHeartIcon />{" "}
                </div>
              )}
              <span className="font-medium text-gray-700 text-sm tracking-wide">
                {localPost.likes}
              </span>
            </button>
            <button className="flex items-center gap-2 text-gray-500 hover:text-purple-700 transition-colors">
              <div className="w-6 h-6">
                <label
                  htmlFor="comments"
                  onClick={() => setRenderComments((prev) => !prev)}
                >
                  <CommentIcon />
                </label>
              </div>

              <span className="font-medium text-sm tracking-wide">
                {localPost.comments}
              </span>
            </button>
          </div>
          <Button
            variant="outline"
            className="gap-2 border-purple-200 text-purple-700 hover:bg-purple-50 hover:text-purple-800 shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-5 h-5">
              <ShareIcon />
            </div>

            <span className="text-sm tracking-wide">Share</span>
          </Button>
        </div>
        
        {renderComments && (
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg border border-amber-200 shadow-inner">
            <div className="comment-form relative">
              {/* Comment Input with Avatar */}
              <div className="flex items-center gap-3">
                <img
                  src={localPost.avatarUrl}
                  alt="Your avatar"
                  className="w-10 h-10 rounded-full border-2 border-amber-300 shadow-inner"
                />
                <div className="relative flex-1">
                  <input
                    type="text"
                    name="comment"
                    placeholder="Share your thoughts on this product..."
                    id="commentid"
                    value={commentValue}
                    onChange={(e) => setCommentValue(e.target.value)}
                    className="w-full py-2.5 px-4 pr-10 rounded-full border border-amber-200 bg-white/80 backdrop-blur-sm shadow-sm focus:ring-2 focus:ring-amber-300 focus:border-amber-300 focus:outline-none transition-all"
                  />

                  {/* Submit Button - Only visible when there's content */}
                  <button
                    onClick={handleCommentClick}
                    disabled={!commentValue.trim()}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-all ${
                      commentValue.trim()
                        ? "bg-gradient-to-r from-purple-500 to-amber-500 text-white shadow-md hover:shadow-lg transform hover:scale-105"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                    aria-label="Submit comment"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m3 10 10-5 10 5-10 5z" />
                      <path d="M7 15v5" />
                      <path d="m21 10-3.5 5.5L14 17l-3 3V10" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Comment Input Helper Text */}
              <div className="text-xs text-amber-700 mt-1.5 ml-14 font-medium">
                {commentValue.length > 0
                  ? `${commentValue.length} characters typed`
                  : "Type your comment above"}
              </div>

              {/* Fix for comment clearing - implement a fixed handleCommentClick function */}
              <script
                dangerouslySetInnerHTML={{
                  __html: `
        // This ensures the input clears after submission
        function fixedHandleCommentClick() {
          const originalHandler = ${handleCommentClick.toString()};
          return function() {
            const result = originalHandler.apply(this, arguments);
            document.getElementById('commentid').value = '';
            setCommentValue('');
            return result;
          }
        }
        // Replace original handler with fixed version
        handleCommentClick = fixedHandleCommentClick();
      `,
                }}
              />
            </div>

            {/* Display Recent Comments */}
            <div className="mt-4 space-y-3">
              {localPost?.userComments && localPost?.userComments.length > 0 ? (
                localPost?.userComments.map((comment, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 animate-fadeIn"
                  >
                    <img
                      src={localPost.avatarUrl}
                      alt="User avatar"
                      className="w-8 h-8 rounded-full mt-1"
                    />
                    <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 shadow-sm border border-gray-100">
                      <p className="text-sm">{comment}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 text-sm py-2">
                  Be the first to comment
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FeedPost;


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
//-------------
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
