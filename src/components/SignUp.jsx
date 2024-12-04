"use client";

import React, { useState } from "react";
import { Input, Icon } from "semantic-ui-react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <div className="">
        <form action="">
          <div className="m-6">
            <label className="block font-bold mb-2">Username</label>
            <Input
              type="text"
              name="username"
              className="w-full  py-2 focus:outline-none rounded-md"
              required
            />
          </div>
          <div className="m-6">
            <label className="block font-bold mb-2">Email</label>
            <Input
              type="text"
              name="email"
              className="w-full  py-2 focus:outline-none rounded-md"
              required
            />
          </div>
          <div className="m-6">
            <label className="block font-bold mb-2">Mobile Number</label>
            <Input
              type="text"
              icon={<Icon name="check circle" color="green" />}
              name="mobno"
              className="w-full  py-2 focus:outline-none rounded-md"
              required
            />
          </div>
          <div className="m-6">
            <label className="block font-bold mb-2">Password</label>
            <Input
              type={showPassword ? "text" : "password"}
              icon={
                <Icon
                  name={showPassword ? "eye slash outline" : "eye"}
                  link
                  onClick={togglePasswordVisibility}
                  className="outline-none"
                />
              }
              name="password"
              className="w-full py-2 focus:outline-none rounded-md"
              required
            />
          </div>

          <div className="m-8">
            <button className="w-full font-bold  text-white py-4 bg-[#F18101] shadow-inner rounded-md">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
