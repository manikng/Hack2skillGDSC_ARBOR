import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"

function NAVBAR() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("");
  
  useEffect(() => {
    // Extract current route to highlight active category
    const path = location.pathname.substring(1);
    setActiveCategory(path || "FastBUYSELL");
  }, [location]);

  return (
    <div className='sticky top-0 z-50 bg-white border-b border-amber-200 shadow-[0_2px_10px_rgba(212,175,55,0.15)] p-0'>
      <div className='max-w-9xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          {/* Logo/Brand - Fixed visibility */}
          <div className='flex-shrink-0 flex items-center'>
            <Link to="/" className='flex items-center'>
              <span className='text-xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent'>
                Marketplace
              </span>
            </Link>
          </div>
          
          {/* Navigation Carousel */}
          <div className='flex-1 ml-8 mr-4 overflow-hidden p-2'>
            <Carousel 
              opts={{ 
                align: "start",
                loop: true
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 flex items-center">
                {navCategories.map((category, index) => (
                  <Link 
                    to={`/${category.name}`} 
                    key={index}
                    className="focus:outline-none focus:ring-2 focus:ring-amber-300"
                  >
                    <CarouselItem className="basis-auto pl-2 py-3">
                      <div className={`
                        px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-200
                        ${activeCategory === category.name ? 
                          'bg-gradient-to-r from-amber-50 to-amber-100 text-amber-800 font-medium border border-amber-300 shadow-sm' : 
                          'hover:bg-amber-50 hover:text-amber-700'}
                      `}>
                        {formatCategoryName(category.name)}
                      </div>
                    </CarouselItem>
                  </Link>
                ))}
              </CarouselContent>
              
              <CarouselPrevious className="hidden md:flex h-8 w-8 -left-1 bg-white border border-amber-200 hover:bg-amber-50 hover:border-amber-300 text-amber-800" />
              <CarouselNext className="hidden md:flex h-8 w-8 -right-1 bg-white border border-amber-200 hover:bg-amber-50 hover:border-amber-300 text-amber-800" />
            </Carousel>
          </div>
          
          {/* Search or additional controls can go here */}
          <div className="flex-shrink-0">
            <button className="p-2 rounded-full text-amber-700 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper function to format category names with spaces
function formatCategoryName(name:object) {
  return name
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .replace(/^./, str => str.toUpperCase()); // Capitalize first letter
}

// Renamed for clarity and organization
const navCategories = [
  { name: "FastBUYSELL" },
  { name: "NaturaLoop" },
  { name: "EcoHub" },
  { name: "HealthWellness" },
  { name: "TravelAdventure" },
  { name: "FoodDrink" },
  { name: "HomeGarden" },
  { name: "StyleFashion" },
  { name: "FamilyParenting" },
  { name: "EducationLearning" },
  { name: "Entertainment" },
  { name: "Technology" },
  { name: "Finance" },
  { name: "Community" },
  { name: "Other" }
];

export default NAVBAR






//--------------prv
// import React from 'react'
// import { Link } from 'react-router';

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "~/components/ui/carousel"

// function NAVBAR() {
//   return (
//     <div className='bg-white border-b shadow-sm p-4 ml-2 mr-2'>
//       <Carousel >
//         <CarouselContent className="-ml-4  ">
//           {navtopics.map((topic, index) => (
//             <Link to={`/${topic.name}`} key={index}>
//               <CarouselItem className="md:basis-1/4 lg:basis-1/8 pl-4 hover:text-amber-600 hover:font-semibold">{topic.name}</CarouselItem>
//             </Link>
//           ))}
//         </CarouselContent>
//       </Carousel>
//     </div>
//   )
// }

// const navtopics = [
//   { name: "FastBUYSELL" },
//   { name: "NaturaLoop" },
//   { name: "EcoHub" },
//   { name: "HealthWellness" },
//   { name: "TravelAdventure" },
//   { name: "FoodDrink" },
//   { name: "HomeGarden" },
//   { name: "StyleFashion" },
//   { name: "FamilyParenting" },
//   { name: "EducationLearning" },
//   { name: "Entertainment" },
//   { name: "Technology" },
//   { name: "Finance" },
//   { name: "Community" },
//   { name: "Other" }
// ];

// export default NAVBAR