/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import WrappedSignMascotte from "./mascotteSign";
import { useSelector, useDispatch } from "react-redux";
import {
  login,
  logout,
  updateUser,
  getUser,
  signUp,
} from "../../redux/User/userSlice";
import { useSignUpMutation } from "../../redux/_api/UserApiSlice";
import { Link, useNavigate } from "react-router";

export const SignUp = ({ struct = false }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [signUpMutation] = useSignUpMutation();
  const navigate = useNavigate();
  const path = window.location.pathname;

  const validateEmail = (value) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const allowedDomains = [
      "@gmail.com",
      "@yahoo.com",
      "@outlook.com",
      "@hotmail.com",
      "@icloud.com",
    ];
    if (
      !emailRegex.test(value) ||
      !allowedDomains.some((domain) => value.endsWith(domain))
    ) {
      setEmailError("Invalid email address or unsupported domain");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(value)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
      );
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = (value) => {
    if (value !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  useEffect(() => {
    if (path === "/signup" && user.isAuthenticated) {
      navigate("/profile");
    }
  }, [user.isAuthenticated, path]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateEmail(email);
    validatePassword(password);
    validateConfirmPassword(confirmPassword);

    if (emailError || passwordError || confirmPasswordError) {
      setIsError(true);
      return;
    }

    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      const response = await signUpMutation({ email, password }).unwrap();
      dispatch(signUp(response));
      setIsSuccess(true);
    } catch (error) {
      console.error("Error signing up:", error);
      setIsError(true);
    }

    setIsLoading(false);
  };

  if (struct === true) {
    return (
      <div className="h-auto w-90 relative bg-black shadow-2xl rounded-lg p-4 flex flex-col items-center opacity-90 justify-center space-y-3 mt-10 mb-20">
        <h4 className="text-emerald-700 text-2xl font-bold">Sign Up</h4>

        <div className="flex items-center justify-center max-w-100 p-2">
          <WrappedSignMascotte />
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-sm"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
              if (e.target.value === "") setEmailError("");
            }}
            placeholder="Email"
            className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
              if (e.target.value === "") setPasswordError("");
            }}
            placeholder="Password"
            className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          {passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p>
          )}

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              validateConfirmPassword(e.target.value);
              if (e.target.value === "") setConfirmPasswordError("");
            }}
            placeholder="Confirm Password"
            className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          {confirmPasswordError && (
            <p className="text-red-500 text-sm">{confirmPasswordError}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#7E6C97] text-white rounded p-3 hover:bg-transparent hover:border hover:border-[#7E6C97] hover:text-[#7E6C97] transition duration-300"
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        {isError && (
          <p className="text-red-600 text-sm mt-2">
            Something went wrong. Please try again.
          </p>
        )}
        {isSuccess && (
          <p className="text-emerald-600 text-sm mt-2">
            Sign up successful! 🎉
          </p>
        )}

        <p className="text-sm text-gray-500 pt-2 pb-4">
          Already have an account?{" "}
          <Link to="/login" className="text-emerald-800 hover:underline">
            Login
          </Link>
        </p>

        <button
          className="flex w-90 items-center gap-2 border text-emerald-700 hover:text-white rounded p-3 hover:bg-emerald-700 transition duration-300"
          onClick={() => console.log("Google Sign-In")}
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-t from-[#23687D] to-[#A1C877] relative">
      {user.isAuthenticated && (
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#23687D] to-[#A1C877] opacity-50 z-0 flex items-center justify-center">
          <h4 className="text-emerald-700 text-2xl font-bold">
            Already Connected!
          </h4>
        </div>
      )}

      <div className="h-auto relative bg-white/50 bg-opacity-90 shadow-2xl rounded-lg p-4 flex flex-col items-center justify-center space-y-3 mt-10 mb-20">
        <h4 className="text-emerald-700 text-2xl font-bold">Sign Up</h4>

        <div className="flex items-center justify-center max-w-100 p-2">
          <WrappedSignMascotte />
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-sm"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
              if (e.target.value === "") setEmailError("");
            }}
            placeholder="Email"
            className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
              if (e.target.value === "") setPasswordError("");
            }}
            placeholder="Password"
            className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          {passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p>
          )}

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              validateConfirmPassword(e.target.value);
              if (e.target.value === "") setConfirmPasswordError("");
            }}
            placeholder="Confirm Password"
            className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          {confirmPasswordError && (
            <p className="text-red-500 text-sm">{confirmPasswordError}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#7E6C97] text-white rounded p-3 hover:bg-transparent hover:border hover:border-[#7E6C97] hover:text-[#7E6C97] transition duration-300"
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        {isError && (
          <p className="text-red-600 text-sm mt-2">
            Something went wrong. Please try again.
          </p>
        )}
        {isSuccess && (
          <p className="text-emerald-600 text-sm mt-2">
            Sign up successful! 🎉
          </p>
        )}

        <p className="text-sm text-gray-500 pt-2 pb-4">
          Already have an account?{" "}
          <Link to="/login" className="text-emerald-800 hover:underline">
            Login
          </Link>
        </p>

        <button
          className="flex w-90 items-center gap-2 border text-emerald-700 hover:text-white rounded p-3 hover:bg-emerald-700 transition duration-300"
          onClick={() => console.log("Google Sign-In")}
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};
