"use client"
import Link from "next/link"
import { FormEvent } from "react"

export default function Signup() {
    // Handle signup
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        return
    }

    return (
        <div className="flex flex-col items-center w-full">
            <form onSubmit={handleSubmit} className="my-12 max-w-80 w-full">
                <div className="flex flex-col w-full">
                    <div>
                        <label
                            htmlFor="signup-email-field"
                            className="block mb-2 leading-none"
                        >
                            Email:
                        </label>
                        <input
                            required
                            type="email"
                            aria-label="email"
                            placeholder="name@domain.com"
                            data-test="signup-email-field"
                            autoCorrect="off"
                            className="w-full h-10 p-2 mb-6 border border-solid rounded focus:outline focus:outline-2 focus:outline-offset-2"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="signup-password-field"
                            className="block mb-2 leading-none"
                        >
                            Password:
                        </label>
                        <input
                            required
                            type="password"
                            aria-label="password"
                            placeholder="*****"
                            data-test="signup-password-field"
                            autoCorrect="off"
                            className="w-full h-10 p-2 mb-6 border border-solid rounded focus:outline focus:outline-2 focus:outline-offset-2"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="signup-username-field"
                            className="block mb-2 leading-none"
                        >
                            Username:
                        </label>
                        <input
                            required
                            type="username"
                            aria-label="username"
                            placeholder="omamori"
                            data-test="signup-username-field"
                            autoCorrect="off"
                            className="w-full h-10 p-2 mb-6 border border-solid rounded focus:outline focus:outline-2 focus:outline-offset-2"
                        />
                    </div>
                    <div>
                        <button className="w-full bg-[var(--primary-button)] rounded-md py-2 px-4">
                            <div className="text-center">Sign up</div>
                        </button>
                    </div>
                </div>
            </form>
            <div>
                <Link href="/login">
                    <p>Have an account? Login</p>
                </Link>
            </div>
        </div>
    )
}
