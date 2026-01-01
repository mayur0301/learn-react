import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();
  return (
    <div className="py-3 px-5 border-y-green-300">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-emerald-500 px-5 py-2 rounded m-2 cursor-pointer font-medium active:scale-95"
      >
        Return to Home Bitch
      </button>

      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-emerald-500 px-5 py-2 rounded m-2 cursor-pointer font-medium active:scale-95"
      >
        Back
      </button>
    </div>
  );
};

export default Navbar2;
