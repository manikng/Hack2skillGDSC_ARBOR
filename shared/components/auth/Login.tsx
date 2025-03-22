import { Button } from "~/components/ui/button";
import { Form, redirect } from "react-router";
import {
  getAuth,
  signInWithEmailAndPassword ,
  getAdditionalUserInfo,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../../database/firebase"; // Corrected import path
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useFirebase } from "../../database/firebase";

// import { putData } from "../../database/firebase";

import inspire from "./../../../features/images/inspiration-f.png";
import type { Route } from "./+types/Signup";

export function ButtonDemo() {
  return <Button>signup</Button>;
}
const auth = getAuth(app);
const db = getDatabase(app);

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const username = formData.get("username")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  if (!username || !email || !password) {
    return new Response("missing username,email or password", { status: 400 });
  }
  try {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);

        const userMeta = getAdditionalUserInfo(userCredential);
        if (userMeta?.isNewUser) {
          set(ref(db, `users/ ${userCredential.user.uid}`), {
            id:userCredential.user.uid ,
            name: username,
            email: userCredential.user.email,
            password: password,
          });
        }
        
      console.log("You have successfully logged in.");
        // putData("users/" + "hi",{email,password})
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    // putData = ()=>{
    //   set(ref(db, ), {
    //     email: email,
    //     username: username
    //   })
    // }
    // console.log(putData);

    if (typeof window !== "undefined") {
      window.alert("signup successful");
    }
    console.log(username, email, password);
    return redirect(`/user/${username}`);
  } catch (error) {
    console.error("Error during signup:", error);
    return new Response("Signup failed", { status: 500 });
  }
}
function Login() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${inspire})` }}
      >
        <h2 className="absolute inset-0 flex items-center justify-center text-white">
          Journey is like a ocean
        </h2>
      </div>
      <div className="flex-1 flex items-center justify-center p-8 ">
        <div className="w-full max-w-md ">
          <h1 className="text-3xl font-bold mb-6">Login into  Your Account</h1>
          <Form
            method="post"
            className="space-y-4  p-6 rounded shadow-md border border-pink-200 font-medium "
          >
            <div>
              <label htmlFor="username" className="block mb-1">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                className="border p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="border p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="border p-2 w-full"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white"
            >
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Login;
