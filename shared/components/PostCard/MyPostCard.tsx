import React from "react";
import { Button } from "~/components/ui/button";

function MyPostCard() {
  return (
    <div className="bg-white mt-4 relative rounded-lg border-4 border-b-blue-950 shadow-lg p-3 overflow-hidden ">
      <div className="flex  items-center p-4 border-b">
        <img
          className="w-12 h-12 rounded-full"
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          alt="User Avatar"
        />
        <div className="ml-4 flex items-center gap-2 ">
          <h4 className=" name text-lg font-semibold text-gray-800">
            Crish entonie
          </h4>
          <p className="productName text-sm text-gray-600">Creativecreata</p>
          <p className="productName text-md ml-6">Tags</p>
        </div>
      </div>
      <div className="ml-2">
        <p className="productDiscrriipt text-3xl font-mono">
          I have buga luga{" "}
        </p>
      </div>
      <div className="">
        <img
          className="object-cover w-full rounded-lg"
          src="https://img.buzzfeed.com/buzzfeed-static/static/2021-12/21/23/asset/e882fdf53383/sub-buzz-10272-1640128794-4.jpg?crop=1200%3A1600%3B0%2C0&downsize=300:*&output-format=auto&output-quality=auto"
          alt="chair"
        />
      </div>
      <Button className="font-mono">Price </Button>
    </div>
  );
}

export default MyPostCard;
