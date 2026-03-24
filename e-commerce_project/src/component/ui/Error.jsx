import React from "react";
import { useRouteError } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Error_image from "../../assets/Error_image.png";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <section className="flex flex-col md:flex-row  items-center justify-center h-screen gap-10">
      {/* Error image */}
      <div className="w-3xs">
        <img src={Error_image} alt="Image not found" />
      </div>
      
        {/* Error message */}
      <div className="tracking-wide text-center gap-1.5 grid scroll-auto font-mono">
        <h1 className="text-5xl font-semibold ">AWW...DON'T CRY.</h1>
        <p>It's just an error!</p>
        {error && <p> {error.data}</p>}
        <p>
          What you're looking for may have been misplaced in long term
          memory.{" "}
        </p>
        <NavLink
          to="/"
          className=" text-blue-500 hover:text-blue-400 hover:underline font-semibold cursor-pointer transition duration-200"
        >
          Go back to home
        </NavLink>
      </div>
    </section>
  );
};

export default Error;
