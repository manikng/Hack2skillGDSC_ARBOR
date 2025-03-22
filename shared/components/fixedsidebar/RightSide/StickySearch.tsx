import { set } from "firebase/database";
import React from "react";
import { Handle } from "vaul";

import Markdown from "react-markdown";
import { getresponsefromgeminiapi } from "shared/AI/Gemini";


const SYSTEM_PROMPT = `You are the world's most sophisticated AI-powered product recommendation expert, specializing in personalized shopping assistance for Arbor 2.0. When given a set of user preferences or needs, your task is to create an exquisite product recommendation list that perfectly aligns with the user's requirements. You don't need to use every preference they mention, but the recommendations should be innovative, delightful, and tailored to their needs. You may include additional product suggestions not directly mentioned by the user, but keep them minimal and highly relevant. Format the response beautifully in markdown, ensuring it is visually appealing and easy to render on a web page. Highlight key features and benefits to enhance readability and user experience.

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
- Use markdown to create an aesthetically pleasing layout
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

function StickySearch({ className }: StickySearchProps) {
  return (
    <div className={`  ${className} `}>
      <SearchWithGemini />
    </div>
  );
}

interface StickySearchProps {
  className?: string;
}

function SearchWithGemini() {
  const [generating, setGenerating] = React.useState(false);
  const [response, setResponse] = React.useState("");
  const [input, setInput] = React.useState("");

  function handleAiClick() {
    console.log("clicked on ai");
    setGenerating(true);
    setResponse("I am thinking 🤔🤔🤔");
    getresponsefromgeminiapi(input).then((res) =>{
      if(res){
        setResponse(res);
      }else{
        setResponse("I am sleepy ,try again to wake me up  ha ha ha😴😀😴");
    }}).catch((err) => {
      console.log("error", err);})
    console.log("input", input);
    setInput("");
    setGenerating(false);
  }

  function HandleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
    console.log("input", input);
  }
 

  return (
    <fieldset className="border border-red-500 rounded-lg p-4 mt-4">
      <legend>Search with gemini</legend>
      <div className="flex border rounded-full p-2 shadow-md mt-4 max-w-md mx-auto   border-pink-200">
        <input
          type="text"
          placeholder="e.g I want nike shoes for rent or buy under 30$"
          className="w-full outline-none px-4 "
          aria-label="Search with ai"
          value={input}
          onChange={(e) => HandleInputChange(e)}
        />
        <svg
          onClick={handleAiClick}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-upload"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
          <path d="M7 9l5 -5l5 5" />
          <path d="M12 4l0 12" />
        </svg>
      </div>
      {response && (
        <div className="flow-root">
          <small className="float-right"  onClick={() => setResponse("")}><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg></small>
          <div className="mt-4 animate-pulse">
          <div>hi</div>
          <Markdown>{response}</Markdown>
        </div>
        </div>
      )}
    </fieldset>
  );
}
export default StickySearch;
