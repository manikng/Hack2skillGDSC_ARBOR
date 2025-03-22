interface Post {
  dbid: string;
 
    id: number;
    avatarUrl: string;
    description: string;
    tags: string[];
    price: string;
    productName: string;
    imageUrl: string;
    isliked: boolean;
    likes: number;
    comments: number;
 
}

const postDetails: Post[] = [
    {
        dbid :"",
        
          id: 1,
        avatarUrl:
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        description: "Handcrafted lavender soap with natural ingredients. One rainy day, inspired by the fresh scent of blooming flowers, I decided to create an eco-friendly soap that captures the essence of nature. Perfect for those who cherish natural and handmade products.",
        tags: ["NaturaLoop", "handmade", "natural"],
        price: "$12.99",
        productName: "Lavender Soap",
        imageUrl:
            "https://hips.hearstapps.com/hmg-prod/images/lavendar-soap-crafts-for-adults-1588272930.jpg",
        isliked: true,
        likes: 45,
        comments: 12,
       
    },

  ]
//     {
//         id: 2,
//         avatarUrl:
//             "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
//         description: "Vintage inspired ceramic coffee mugs set. These mugs were designed to bring a touch of nostalgia to your morning coffee. Crafted with love and attention to detail, they are perfect for anyone who appreciates the charm of vintage kitchenware.",
//         tags: ["FastBuySell", "NaturaLoop", "ceramic", "kitchen"],
//         price: "$29.99",
//         productName: "Ceramic Mugs Set",
//         imageUrl:
//             "https://hips.hearstapps.com/hmg-prod/images/dsc2401-667c5111a3e97.jpg",
//         isliked: true,
//         likes: 59,
//         comments: 5,
//     },
//     {
//         id: 3,
//         avatarUrl:
//             "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
//             description:"hi i want to share that I have converted my house a battery swapping station if you find me nearby then feel free to swap the battery",
//         tags: ["BatterySwapper","EcoFriendly","Transport&Logistics","SelfMade",],
//         price: "$15",
//         productName: "Rainbow Bangles",
//         imageUrl:"https://evreporter.com/wp-content/uploads/2020/08/Battery-Swapping-cover-image.jpg",
//     isliked: true,
//     likes: 540,
//     comments: 254,
//   },
//     {
//         dbid: "",
//         id: 4,
//         avatarUrl:
//             "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
//         description: "Just finished creating my own Booboo Hoodie from scratch! Started as a weekend project and turned into my favorite piece of clothing. Made with super soft cotton blend fabric and custom embroidery. Each stitch represents hours of dedication and creativity. Perfect for cozy nights or casual outings!",
//         tags: ["SelfMade", "DIY", "Fashion", "BoobooHoodie", "HandCrafted"],
//         price: "$45.99",
//         productName: "Booboo Hoodie",
//         imageUrl:
//             "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633",
//         isliked: true,
//         likes: 78,
//         comments: 23,
//     },
// ];

// export default PostData;

// // const postDetails = [
// //     {
// //         id: 1,
// //         avatarUrl: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
// //         description: "I have Buga Luga awesome under 5$ just for you",
// //         tags: ["awesome", "cheap"],
// //         price: "$5",
// //         productName: "Buga Luga",
// //         imageUrl: "https://hips.hearstapps.com/hmg-prod/images/lavendar-soap-crafts-for-adults-1588272930.jpg?crop=0.668xw:1.00xh;0.179xw,0&resize=980:*",
// //         isliked:true,
// //         likes:43,
// //         comments:45,
// //     },
// //     {
// //         id: 2,
// //         avatarUrl: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
// //         description: "Check out this amazing product!",
// //         tags: ["amazing", "new"],
// //         price: "$10",
// //         productName: "Amazing Product",
// //         imageUrl: "https://hips.hearstapps.com/hmg-prod/images/dsc2401-667c5111a3e97.jpg?crop=0.934xw:1.00xh;0.0221xw,0&resize=980:*",
// //         isliked:false,
// //         likes:0,
// //         comments:5
// //     },
// //     {
// //         id: 3,
// //         avatarUrl: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
// //         description: "Limited time offer, don't miss out!",
// //         tags: ["limited", "offer"],
// //         price: "$15",
// //         productName: "Rainbow Bangles",
// //         imageUrl: "https://hips.hearstapps.com/hmg-prod/images/screenshot-2024-06-26-at-2-12-38-pm-667c5a27e7e2d.png?crop=0.9946380697050938xw:1xh;center,top&resize=980:*",
// //         isliked:true,
// //         likes:20,
// //         comments:5
// //     },
// // ];

export default postDetails;
