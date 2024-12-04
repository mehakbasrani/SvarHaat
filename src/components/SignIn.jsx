"use client";

import React, { useState } from "react";
import { Input, Icon } from "semantic-ui-react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      <div className="">
        <form action="">
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
              Login
            </button>
            <button className="w-full mt-6 text-orange-500 underline">
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
