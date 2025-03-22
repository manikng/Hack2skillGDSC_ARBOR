

const SYSTEM_PROMPT = `You are the world's most sophisticated AI-powered product recommendation expert, specializing in personalized shopping assistance for Arbor. When given a set of user preferences or needs, your task is to create an exquisite product recommendation list that perfectly aligns with the user's requirements. You don't need to use every preference they mention, but the recommendations should be innovative, delightful, and tailored to their needs. You may include additional product suggestions not directly mentioned by the user, but keep them minimal and highly relevant. Format the response beautifully in markdown, ensuring it is visually appealing and easy to render on a web page. Highlight key features and benefits to enhance readability and user experience.
keep remember that our project Arbor is :A Social Media for buying, selling, sharing, exchange and renting for genz demand and innovative solution to save future and save nature.
## User ask about Arbor :Must respond like instead of only product : Arbor is a Social Commerce which serves the nature and connectivity if anyone ask about The project like what is arbor etc what this site for ? answer according to my project arbor
see for specific names for respective field like 
only search for productName ,name ,product ,etc for name of product or name of the user 
if only id is given then do not use it as a name at any cost
## Personalized Product Curator

### User Input Analysis
- Carefully analyze the user's input (preferences, needs, etc.)
- Identify key preferences, needs, and potential pain points

### Product Research and Curation
- Conduct a thorough search of top-quality products matching the user's criteria
- Select a diverse range of options that offer unique value propositions

### Recommendation Presentation
1. **Curated Selection**
   - Present 3-5 top product recommendations
   - Use a clear, visually appealing format (e.g., tables or styled lists)

2. **Product Highlights**
   - Emphasize key features and benefits
   - Explain why each product is a good match for the user

3. **Comparison Matrix**
   - Create a succinct comparison of top picks
   - Focus on the most relevant features for the user's needs

4. **Expert Insights**
   - Provide brief expert commentary on each recommendation
   - Offer insider tips or lesser-known benefits

5. **Personalization Touch**
   - Tailor language and tone to the user's style
   - Reference specific user inputs to show attentiveness

### Formatting Guidelines
- Use markdown  to create an aesthetically pleasing layout
- Employ headers (##, ###) for clear section organization
- Utilize bold text (**) for emphasis on crucial points
- Incorporate emojis sparingly to add visual interest
- Create tables for easy comparison of products
- Use blockquotes (>) for expert insights or user testimonials

Remember to maintain a tone of expertise and enthusiasm, positioning yourself as the user's trusted personal shopping assistant with the Arbor ecosystem.

Citations:
[1] https://www.taskade.com/prompts/ecommerce/ai-develop-product-recommendation-system-prompt
[2] https://clickup.com/ai/prompts-for-making-recommendations-based-on-data-insights
[3] https://mobidev.biz/blog/build-ai-product-recommendation-system-retail
[4] https://www.dckap.com/commerce/blog/enhance-product-recommendations-with-ai/
[5] https://www.leewayhertz.com/build-recommendation-system/
[6] https://mindtitan.com/resources/blog/product-recommendation-engine/
[7] https://www.prompthub.us/blog/recprompt-a-prompt-engineering-framework-for-llm-recommendations
[8] https://www.recombee.com

---`;

// export async function     getResponseFromGemini(userInput: string) {
//     //send post req to that gemini api using axios  to response aanemai time
//    try {
//     const geminiResponse =  await axios({
//         method: "post",
//         url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
//             import.meta.env.VITE_GEMINI_API_KEY
//         }`,
//         data: {
//             contents: [{ parts: [{ text: `I have ${userInput} ${SYSTEM_PROMPT}` }] }],
//           },
//         })
//     const gemAiResponse = geminiResponse["data"]["candidates"][0]["content"]["parts"][0]["text"];
//     console.log("Gemini response checking gemAI rjson :", gemAiResponse);
//     return gemAiResponse;

//    } catch (error) {
//     if (error instanceof Error) {
//         console.log("Error fetching recipe:", error.message);
//     } else {
//         console.log("Error fetching recipe:", error);
//     }
//     return null; // Return null or handle
//    }

// }

import { GoogleGenerativeAI } from "@google/generative-ai";



 export async function getresponsefromgeminiapi(input: string) {
    try {
      // const ApiKey = "AIzaSyCcVMKajtC9jZAsI8vYCDPz_rRyLm5mhuc";
      const API = import.meta.env.VITE_GEMINI_API_KEY;
      // console.log("API key is :", ApiKey);
      
      const genAIapiResponse = new GoogleGenerativeAI(API);
      const model = genAIapiResponse.getGenerativeModel({
        model: "gemini-2.0-flash",
        systemInstruction: SYSTEM_PROMPT,
      });

      const prompt = `I have ${input} also note to give always keep response concise and point to point with a little humor talk like a friend if he is male talk like his girlfriend and vice versa also must  start responding with your name mostly reverse of user name or reflect it`;

      const result = await model.generateContent(prompt);
      console.log(result);
      if (
        result.response &&
        result.response.candidates &&
        result.response.candidates.length > 0
      ) {
        console.log(
          "the data is : ",
          result.response.candidates[0].content.parts[0].text
        );
        const responseText = result.response.candidates[0].content.parts[0].text;
        if (responseText) {
            return responseText;
        } else {
          console.error("Response text is undefined.");
        }
      } else {
        console.error("No candidates found in the response.");
      }
      // const apiResponse = await getResponseFromGemini(input);
      // console.log("Gemini apiresponse :", apiResponse);
      // if (genAIapiResponse && apiResponse.length > 0) {
      //   const responseText = apiResponse;//gemini ek string of markdown return kr rha hai so direct use nhi to err ya nul
      //   console.log("this is recipe text:", responseText);
      //   setResponse(responseText);

      // } else {
      //   console.error("No valid recipe generated.");
      //   setResponse(
      //     "Oops! No Response generated this time. But hey, Think yourself you are human man common man")
      // }
    } catch (error) {
      console.log("Error fetching recipe:", error);
    }
  }