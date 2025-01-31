"use client";
import { FormEvent } from "react";

export default function Login() {
  // Handle login
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    return;
  };

  return (
    <div className="flex flex-col items-center w-full">
      <form onSubmit={handleSubmit} className="my-12 max-w-80 w-full">
        <div className="flex flex-col w-full">
          <div>
            <label
              htmlFor="login-email-field"
              className="block mb-2 leading-none"
            >
              Email:
            </label>
            <input
              required
              type="email"
              aria-label="email"
              placeholder="name@domain.com"
              data-test="login-email-field"
              autoCorrect="off"
              className="w-full h-10 p-2 mb-6 border border-solid rounded focus:outline focus:outline-2 focus:outline-offset-2"
            />
          </div>
          <div>
            <label
              htmlFor="login-password-field"
              className="block mb-2 leading-none"
            >
              Password:
            </label>
            <input
              required
              type="password"
              aria-label="password"
              placeholder="*****"
              data-test="login-password-field"
              autoCorrect="off"
              className="w-full h-10 p-2 mb-6 border border-solid rounded focus:outline focus:outline-2 focus:outline-offset-2"
            />
          </div>
          <div>
            <button className="w-full bg-[var(--primary-button)] rounded-md py-2 px-4">
              <div className="text-center">Log in</div>
            </button>
          </div>
        </div>
      </form>
      <div>
        <a href="/signup">
          <p>Sign up</p>
        </a>
      </div>
    </div>
  );
}
