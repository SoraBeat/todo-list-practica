import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";

const Error404 = () => {
  return (
    <AnimatedDiv>
      <div className="h-screen w-screen flex flex-col justify-center ">
        <p className="text-gray-300 text-8xl mx-auto">404</p>
        <p className="text-gray-300 text-xl mx-auto">Page not found uwu</p>
      </div>
    </AnimatedDiv>
  );
};

export default Error404;
