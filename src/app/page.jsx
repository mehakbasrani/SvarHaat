"use client";

import React from "react";
import Image from "next/image";
import { TabPane, Tab } from "semantic-ui-react";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";

const panes = [
  {
    menuItem: "Sign In",
    render: () => (
      <TabPane>
        <SignIn />
      </TabPane>
    ),
  },
  {
    menuItem: "Sign Up",
    render: () => (
      <TabPane>
        <SignUp />
      </TabPane>
    ),
  },
];

export default function Home() {
  return (
    <div className="h-screen grid md:grid-cols-4 grid-rows-4 md:grid-rows-1">
      <div className="bg-[#FFF3EA] md:col-span-1 md:row-span-1 row-span-1 flex md:flex-col justify-between">
        <div className="">
          <Image
            src="/images/logo.png"
            alt="logo"
            className="mt-12 ml-6"
            width={100}
            height={200}
          />
        </div>
        <div className="hidden md:block">
          <Image
            src="/images/picture.png"
            alt="picture"
            className=""
            width={400}
            height={200}
          />
        </div>
        <div className="mt-4 md:ml-10 md:mb-8">
          <p className="font-bold">Welcome Back</p>
          <p className="font-bold">Expand your servies and products</p>
          <p className="md:pt-8">Your success is our mission.</p>
        </div>
      </div>

      <div className="relative bg-[#fafaf0] md:col-span-3 md:row-span-1 row-span-3 flex flex-col items-center justify-center">
        <div className="w:1/4 md:w-2/4 bg-[#fafaf0] shadow-lg rounded">
          <p className="pt-4 text-center font-bold font-mono text-3xl">
            Welcome Back
          </p>
          <div className="">
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
          </div>
        </div>
        <div className="absolute bottom-0 w-full text-center py-4">
          <p className=" text-sm">
            Copyright &copy; 2024 Svar Technology. All rights reserved | Privacy
            Policy
          </p>
        </div>
      </div>
    </div>
  );
}
