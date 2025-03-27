import { Link } from "react-router";
import { DrawerDialogDemo } from "./AskAiDrawer/AskAI";
import StickySearch from "./StickySearch";
import {
  ClosedSidebarSvg,
  OpenSidebarSvg,
} from "../Leftsidebar/LeftSidebar copy";
import { HashIcon, Search,  StarIcon } from "lucide-react";

interface RightSidebarProps {
  className?: string;
  isCollapsed: boolean;
  onToggle: () => void;
}

function RightSidebar({ className, isCollapsed, onToggle }: RightSidebarProps) {
  return (
    <nav
      className={`h-auto ${className} ${
      isCollapsed ? "w-16" : "w-72"
      } transition-all duration-300 border-l border-amber-100 bg-gradient-to-b from-white to-amber-50 shadow-[-2px_0_15px_rgba(212,175,55,0.1)]
      sticky top-0 z-30 h-screen overflow-y-auto custom-scrollbar
      `}
    >
      <div className="flex flex-col  h-full p-6">
      <button
        onClick={onToggle}
        className="self-start mb-4 hover:scale-110 transition-transform"
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? <ClosedSidebarSvg /> : <OpenSidebarSvg />}
      </button>

      {!isCollapsed ? (
        <div className="">
        {/* AI Assistant Section */}
        <div className="mb-6 ">
          <h3 className="text-sm uppercase text-gray-500 font-semibold tracking-wider mb-3">
          AI Assistant
          </h3>
          <div className="bg-white rounded-xl shadow-sm border border-amber-200 p-3 transition-all hover:shadow-md group">
          <DrawerDialogDemo />
          <p className="mt-2 text-xs text-gray-500 group-hover:text-gray-700 transition-colors">
            Ask AI for recommendations
          </p>
          </div>
        </div>

        {/* Search Section */}
        <div className="mb-6">
          <h3 className="text-sm uppercase text-gray-500 font-semibold tracking-wider mb-3">
          Quick Search
          </h3>
          <div className="bg-white rounded-xl shadow-sm border border-amber-200 p-3 transition-all hover:shadow-md">
          <StickySearch className="w-full" />
          </div>
        </div>

        {/* Discover Section */}
        <div className="mb-6">
          <h3 className="text-sm uppercase text-gray-500 font-semibold tracking-wider mb-3">
          Discover
          </h3>

          <Link
          to="/TopSelled"
          className="block mb-3 focus:outline-none focus:ring-2 focus:ring-amber-300 rounded-xl"
          >
          <div className="bg-white rounded-xl shadow-sm border border-amber-200 p-4 transition-all hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 hover:border-orange-300 hover:shadow-md">
            <div className="flex items-center gap-3">
            <div className="bg-orange-100 rounded-full p-2">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-orange-600"
              >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">
              Top Selling Products
              </h4>
              <p className="text-xs text-gray-500">
              Today's bestsellers
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
                      className="ml-auto text-gray-400"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </Link>
              {/* trending product card */}
              <Link
                to="/TopTrending"
                className="block mb-3 focus:outline-none focus:ring-2 focus:ring-amber-300 rounded-xl"
              >
                <div className="bg-white rounded-xl shadow-sm border border-amber-200 p-4 transition-all hover:bg-gradient-to-r hover:from-purple-50 hover:to-amber-50 hover:border-purple-300 hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 rounded-full p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-600"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Trending Products
                      </h4>
                      <p className="text-xs text-gray-500">
                        Gaining popularity fast
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-auto text-gray-400"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>

            {/* Trending Tags Section */}
            <div className="mb-6">
              <h3 className="text-sm uppercase text-gray-500 font-semibold tracking-wider mb-3">
                Trending Tags
              </h3>
              <div className="bg-white rounded-xl shadow-sm border border-amber-200 p-4 transition-all hover:shadow-md">
                {/* Add trending tags content here */}
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-purple-50 text-purple-800 border border-purple-200">
                    #BugaLuga
                  </span>
                  <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 text-orange-800 border border-orange-200">
                    #aloveraBags
                  </span>
                  <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-100 to-amber-50 text-amber-800 border border-amber-200">
                    #EcoFriendly
                  </span>
                  <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-purple-50 text-purple-800 border border-purple-200">
                    #Handmade
                  </span>
                </div>
                <Link
                  to="/tags"
                  className="text-xs text-purple-600 hover:text-purple-800 font-medium flex items-center"
                >
                  See all trending tags
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              </div>
            </div>
            {/* Pro Tips Section */}
            <div>
              <div className="bg-gradient-to-r from-purple-600 to-orange-500 rounded-xl p-5 text-white shadow-lg">
                <h3 className="font-bold text-lg mb-2">Marketplace Tips</h3>
                <p className="text-sm opacity-90 mb-3">
                  Looking to boost your sales? Complete your seller profile and
                  add high-quality images to your products.
                </p>
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-lg transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div >
        ) : (
          <nav className="flex flex-col space-y-4 items-center">
            {/* Add collapsed view icons here */}
            <Link
              to="/ai-assistant"
              className="p-2 rounded-lg transition-all duration-200"
              title="AI Assistant"
            >
              <span className="text-lg">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-orange-600"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                </svg>
              </span>
            </Link>
            <Link
              to="/search"
              className="p-2 rounded-lg transition-all duration-200"
              title="Search"
            >
              <span className="text-lg">
                <Search className="text-amber-600"></Search>{" "}
              </span>
            </Link>
            <Link
              to="/discover"
              className="p-2 rounded-lg transition-all duration-200"
              title="Discover"
            >
              <span className="text-lg">
                <StarIcon className="text-amber-600" />{" "}
              </span>
            </Link>
            <Link
              to="/tags"
              className="p-2 rounded-lg transition-all duration-200"
              title="Trending Tags"
            >
              <span className="text-lg">
                <HashIcon  className="text-amber-600"/>{" "}
              </span>
            </Link>
          </nav>
        )}
      </div>
    </nav>
  );
}




// Simple Tooltip Component
// function Tooltip({ content, children }) {
//   return (
//     <div className="group relative flex items-center">
//       {children}
//       <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
//         {content}
//       </div>
//     </div>
//   );
// }
export default RightSidebar;

