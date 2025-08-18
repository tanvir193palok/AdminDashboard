import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Copyright from "../components/Copyright";
import logo from "../assets/l.svg";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    setTimeout(() => {
      const { email, password } = credentials;

      if (email === "info@bindrocket.com" && password === "123@456") {
        localStorage.setItem("auth", "true"); 
        navigate("/");
      } else {
        setError("Invalid email or password");
      }

      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-600 to-black">
      <div className="px-6 md:px-10 2xl:px-28">
        <div className="flex w-full flex-col lg:flex-row items-center lg:items-start">
          {/* Left side content */}
          <div className="hidden md:block w-full pl-20 md:pl-0 3xl:pl-28 text-white">
            <div className="w-full">
              <Link
                to="/"
                className="p-2 flex flex-col lg:flex-row lg:inline-block justify-center items-center mb-4"
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="w-14 md:w-16 xl:w-20 3xl:w-28 h-14 md:h-16 xl:h-20 3xl:h-28 drop-shadow-lg"
                />
              </Link>
              <h1 className="text-4xl leading-[3.5rem] md:text-[2rem] md:leading-[2.8rem] xl:text-[2.3rem] 2xl:text-[4rem] 2xl:leading-[5rem] 3xl:leading-[6rem] text-center lg:text-left font-bold">
                Admin Dashboard{" "}
                <p className="text-[#00B67A] font-extrabold">
                  Track Agencies and Monitor Progress
                </p>
              </h1>
            </div>
          </div>

          {/* Mobile logo */}
          <div className="flex justify-center md:hidden mb-6">
            <img
              src={logo}
              alt="Logo"
              className="w-14 md:w-16 xl:w-20 3xl:w-28 h-14 md:h-16 xl:h-20 3xl:h-28 drop-shadow-lg"
            />
          </div>

          {/* Form */}
          <div className="w-full sm:mt-14 md:mt-6 xl:mt-0 3xl:mt-10 flex justify-center 2xl:min-h-[590px] lg:min-h-[500px]">
            <div className="w-full py-8 space-y-5 max-w-[400px] md:max-w-[550px] xl:max-w-[450px] 2xl:min-w-[520px] rounded-xl bg-gray-900/80 p-4 sm:p-6 xl:p-8 shadow-2xl backdrop-blur-lg border border-gray-700">
              <div className="mb-4 text-center text-gray-200">
                <h2 className="text-xl font-semibold">Hello again</h2>
                <p className="text-sm text-gray-400">
                  Please enter your account details to continue.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-6 md:space-y-8 mt-4 sm:mt-6 md:mt-8"
              >
                <div className="space-y-3">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={credentials.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-600 bg-gray-800 p-2.5 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B67A]"
                    required
                  />

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Enter your password"
                      value={credentials.password}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-600 bg-gray-800 p-2.5 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B67A] pr-10"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
                      onClick={togglePasswordVisibility}
                    >
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="text-red-500 text-sm text-center">
                    {error}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                  <Link
                    to="/forgot-password"
                    className="text-xs text-gray-400 hover:text-[#00B67A]"
                  >
                    Forgot your password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-md bg-[#00B67A] p-2.5 text-center font-medium text-black hover:bg-[#009f68] focus:outline-none focus:ring-2 focus:ring-[#00B67A] focus:ring-offset-2 disabled:opacity-70 transition"
                >
                  {isLoading ? "Logging in..." : "Login"}
                </button>
              </form>

              <div className="pt-20 text-gray-400">
                <Copyright />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
