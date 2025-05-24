import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthContext";

const Register = () => {
  const { createUser, googleLogin, manageProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Register";
  }, []);

  const handleGoogleLogin = () => {
    googleLogin().then(() => {
      toast.success("Login with Google successful");
      navigate(`${location.state ? location.state : "/"}`);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.fullname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoUrl = e.target.photourl.value;

    if (password.length < 6) {
      toast.error("Password must be at least 6 digit.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }

    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Register successful!");

        manageProfile(name, photoUrl).then(() => {
          navigate(`${location.state ? location.state : "/"}`);
        });
      })

      .catch(() => {
        toast.error("User Register Failed");
      });
  };

  return (
    <div className="flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-violet-700 mb-2">
          Create an account
        </h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-violet-600 hover:underline font-medium"
          >
            Login here
          </NavLink>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              required
              placeholder="Your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="flex items-center relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                required
                placeholder="******"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs absolute right-4"
              >
                {showPassword ? <FaEye size={16} /> : <FaEyeSlash size={16} />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="text"
              name="photourl"
              id="photourl"
              required
              placeholder="Photo URL"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700"
          >
            Register
          </button>
        </form>
        <div className="flex items-center w-full my-4">
          <hr className="w-full border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <hr className="w-full border-gray-300" />
        </div>
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="flex items-center justify-center w-full gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
        >
          <FcGoogle size={23} />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
