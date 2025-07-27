import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import toast from "react-hot-toast";

const SignIn = () => {
  const navigate = useNavigate();
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, loading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(name, password);
      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-4 md:px-8 py-5"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/background_banner.jpg)",
      }}
    >
      <div className="max-w-[450px] w-full bg-black bg-opacity-75 px-8 py-14 rounded mx-auto mt-8">
        <h1 className="text-3xl text-white font-medium mb-7">Sign In</h1>
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full h-[50px] bg-[#333] text-white roundded px-5 text-base"
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[50px] bg-[#333] text-white roundded px-5 text-base"
            placeholder="Password"
          />
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#e50914] text-white py-2 rounded text-base hover:opacity-90 cursor-pointer"
          >
            Sign In
          </button>
        </form>
        <div className="mt-10 text-[#737373] text-sm">
          <p>
            New to Netflix?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-white font-medium cursor-pointer ml-2 hover:underline"
            >
              Sign Up Now
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
