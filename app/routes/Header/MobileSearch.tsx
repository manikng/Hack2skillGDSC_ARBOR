// components/search/MobileSearch.tsx
export default function MobileSearch() {
    return (
        <div className="flex border rounded-full p-2 shadow-md mt-2 max-w-md mx-auto">
            <div className="flex-1 px-4 border-r">
                <strong className=" font-bold mb-1">Location</strong>
                <input
                    type="text"
                    placeholder="Choose location"
                    className="w-full outline-none"
                />
            </div>
            <div className="flex-1 px-4 border-r">
                <strong className=" font-bold mb-1">Search for items</strong>
                <input
                    type="text"
                    placeholder="e.g nike shoes"
                    className="w-full outline-none"
                />
            </div>
            {/* <div className="flex items-center justify-center px-4">
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-search"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                </svg>
            </div> */}
            <div className="flex items-center justify-center p-2">
                    <button className="bg-purple-700 hover:bg-purple-800 text-white p-3 rounded-full transition-colors duration-200 focus:ring-4 focus:ring-indigo-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform hover:scale-110"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                            <path d="M21 21l-6 -6" />
                        </svg>
                    </button>
                </div>
        </div>
    );
}
