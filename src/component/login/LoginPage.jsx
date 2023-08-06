import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = [{ username: "Jane", password: "testpassword" }];
    const account = users.find((user) => user.username === username);

    if (account && account.password === password) {
      localStorage.setItem("authenticated", "true");
      navigate("/dashboard");
    }
  };

  return (
    <section className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg overflow-hidden shadow-md bg-white">
        <div className="p-6">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="w-32 h-32 mx-auto rounded-full"
            alt="Phone"
          />
          </div>

          {/* Right column container with form */}
          <div className="md:w-full lg:w-64">
            <form onSubmit={handleSubmit} className="mt-6">
              {/* Email input */}
              <div className="relative">
                <input
                  type="text"
                  className="input"
                  id="exampleFormControlInput3"
                  placeholder="Email address"
                />
                <label
                  htmlFor="exampleFormControlInput3"
                  className="label"
                >
                  Email address
                </label>
              </div>

              {/* Password input */}
              <div className="relative">
                <input
                  type="password"
                  className="input"
                  id="exampleFormControlInput33"
                  placeholder="Password"
                />
                <label
                  htmlFor="exampleFormControlInput33"
                  className="label"
                >
                  Password
                </label>
              </div>

              {/* Remember me checkbox */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="exampleCheck3"
                    checked
                  />
                  <label
                    className="cursor-pointer"
                    htmlFor="exampleCheck3"
                  >
                    Remember me
                  </label>
                </div>
                {/* Forgot password link */}
                <a
                  href="#!"
                  className="text-primary"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="btn-primary"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Sign in
              </button>

              {/* Divider */}
              <div className="flex items-center border-t border-neutral-300 mt-2">
                <p className="mx-4 mb-0 font-semibold">
                  OR
                </p>
              </div>
            </form>
          </div>
        </div>
    </section>
  );
};

export default LoginPage;
