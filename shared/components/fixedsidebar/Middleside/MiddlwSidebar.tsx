import React, { useEffect } from "react";
import FeedPost from "./../../PostCard/FeedPost";
import { CreatePostCard } from "~/routes/home";
import type { Post } from "shared/types/post";



interface MiddleSidebarProps {
posts: Post[];
className?: string;
}



function MiddleSidebar ({ posts,className }: MiddleSidebarProps) {
console.log("data in middle ", posts);

useEffect(() => {
  console.log("data in middle useeffect", posts);
},[posts,className]);

return (
<div className={`flex-1 middleside ml-1 mr-2 h-auto ${className}`}>
<CreatePostCard />
<div className="flex flex-col gap-4 mb-4">
{posts.map((post) => (
<FeedPost key={post.id} post={{ ...post, userComments: post?.userComments || [] }} />
))}
</div>
</div>
);
};

export default MiddleSidebar;
