import React from 'react'

// export async function Cloudinary_Avatar_Upload(avturlapiimg: string){
//     const image = {file:avturlapiimg,cloud_name:"dkxicfpye",upload_preset:"postimg"};
//     const res  = await fetch('https://api-ap.cloudinary.com/v1_1/dkxicfpye/image/upload',
//       {
//         method: "post",
//         body:JSON.stringify(image),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       }
//     )
//     let imgUrlfetched = "";
//     const img = avturlapiimg ;
//     // image.append("file",img);
//     // image.append("cloud_name","dkxicfpye");
//     // image.append("upload_preset","postimg");
//     // let imgUrlfetched = "";
  
//     // const res  = await fetch('https://api-ap.cloudinary.com/v1_1/dkxicfpye/image/upload',
//     //   {
//     //     method: "post",
//     //     body:image
//     //   }
//     // )
//     try {     
//         const imgData = await res.json();
//         const avatar_imgurl = imgData.url.toString();
//         console.log("Image URL:",avatar_imgurl);
//         imgUrlfetched = avatar_imgurl;
//         console.log("avatar image  url fxn :",imgUrlfetched);
//         return avatar_imgurl;
//     } catch (error) {
//         console.log(error);
//         return "error";
//     }
     
  
//   }

export async function CloudinaryUpload(formData: FormData){
    const image = new FormData();
    const img = formData.get('postimage') as File;
    image.append("file",img);
    image.append("cloud_name","dkxicfpye");
    image.append("upload_preset","postimg");
    let imgUrlfetched = "";
  
    const res  = await fetch('https://api-ap.cloudinary.com/v1_1/dkxicfpye/image/upload',
      {
        method: "post",
        body:image
      }
    )
    try {     
        const imgData = await res.json();
        const imgurl = imgData.url.toString();
        console.log("Image URL:",imgurl);
        imgUrlfetched = imgurl;
        console.log("Image  url fxn :",imgUrlfetched);
        return imgurl;
    } catch (error) {
        console.log(error);
        return "error";
    }
     
  
  }

  // export async function Cloudinary_Avatar_Upload(avturlapiimg: string) {
  //   // curl https://api.cloudinary.com/v1_1/demo/image/upload -X POST --data 'file=https://www.example.com/https://upload.wikimedia.org/wikipedia/commons/0/01/charvet_shirt.jpg&public_id="wiki_shirt"&quality_analysis=true&colors=true&categorization="google_tagging"&auto_tagging=true&timestamp=173719931&api_key=436464676&signature=a788d68f86a6f868af'
  //   const formData = new FormData();
  //   formData.append("file", avturlapiimg);
  //   formData.append("cloud_name", "dkxicfpye");
  //   formData.append("upload_preset", "postimg");
  //   formData.append("resource_type", "image");
  //   formData.append("fetch_format", "auto");
  
  //   try {
  //     const res = await fetch('https://api.cloudinary.com/v1_1/dkxicfpye/image/upload', {
  //       method: "post",
  //       body: avturlapiimg,
  //     });
  
  //     const imgData = await res.json();
  //     const avatar_imgurl = imgData.secure_url.toString();
  //     console.log("Avatar Image URL:", avatar_imgurl);
  //     return avatar_imgurl;
  //   } catch (error) {
  //     console.error("Error uploading avatar:", error);
  //     return "error";
  //   }
  // }
  
  export async function Cloudinary_Avatar_Upload(imgBlob: Blob) {
    try {
      // Fetch the image data
      // const imgResponse = await fetch(avturlapiimg);
      // const imgBlob = await imgResponse.blob();
  
      const formData = new FormData();
      formData.append("file", imgBlob, "image.jpg"); // Assuming it's a JPEG
      formData.append("cloud_name", "dkxicfpye");
      formData.append("upload_preset", "postimg");
      formData.append("resource_type", "image");
  
      const res = await fetch('https://api.cloudinary.com/v1_1/dkxicfpye/image/upload', {
        method: "post",
        body: formData,
      });
  
      const imgData = await res.json();
      const avatar_imgurl = imgData.secure_url.toString();
      console.log("Avatar Image URL:", avatar_imgurl);
      return avatar_imgurl;
    } catch (error) {
      console.error("Error uploading avatar:", error);
      return "error";
    }
  }
  



