"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Correct import for Next.js
import Form from "./components/Forms";
import Image from "next/image";
import "./styles.css"; // Import the CSS file with animations

import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "./firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState(false); // State to track login status

  const router = useRouter(); // Initialize router function

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!isSigningIn) {
      setSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
        setUserLoggedIn(true); // Set login status
      } catch (error) {
        setErrorMessage("Sign-in failed. Please check your credentials.");
        setSigningIn(false);
      }
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setSigningIn(true);
      try {
        await doSignInWithGoogle();
        setUserLoggedIn(true); // Set login status
      } catch (error) {
        setErrorMessage("Google sign-in failed. Please try again.");
        setSigningIn(false);
      }
    }
  };

  useEffect(() => {
    if (userLoggedIn) {
      router.push("/components/Home"); // Redirect to Home on successful login
    }
  }, [userLoggedIn, router]);

  return (
    <div className="flex w-full h-screen text-black">
      <div className="relative hidden lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="relative flex items-center justify-center w-[25rem] h-[25rem]">
          {/* Logo */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/assets/iSomillier-logo.png"
                alt="Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-300 opacity-40 rounded-full"></div>
        </div>

        {/* Tagline or message at the bottom */}
        <div className="absolute bottom-8 w-full text-center px-6">
          <p className="text-2xl font-bold text-blue-900 fade-zoom">
            Discover the perfect wine for every occasion.
          </p>
          <p className="text-lg font-light text-blue-900 mt-2 fade-zoom">
            Elevating your wine experience with every sip.
          </p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Form
          onSubmit={onSubmit}
          onGoogleSignIn={onGoogleSignIn}
          errorMessage={errorMessage}
        />
      </div>
    </div>
  );
};

export default Login;
