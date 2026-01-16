'use client'
import Link from "next/link"
import { useState } from "react";
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation'


export default function Login() {
    const searchParams = useSearchParams()
    const [remember, setRemember] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState(searchParams.get('error') ? "Incorrect email or password, please try again" : "");

    const submitForm = async (e: any) => {
        e.preventDefault();
        try {
            await signIn('credentials', {
                email: email,
                password: password,
                redirect: true,
                callbackUrl: "/",
            })
           
        } catch(err: any) {
            console.log(err)
            typeof err === "string" ? setMsg(err) : setMsg("Error logging in, please try again");
        }
    }


    return (
        <div className="flex flex-col items-center justify-around bg-gray-100 p-4 mx-auto rounded-lg shadow-xl w-full sm:w-3/4 md:w-2/3">
            <p className="text-xl font-semibold py-2 dark:text-gray-600">Sign in to your account</p>
                    
            <form className="form-control w-full max-w-xs gap-4 py-4" onSubmit={submitForm}>
                    {msg && <p className="text-sm text-error mt-4">{msg}</p>}

                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email@example.com" className="input input-bordered w-full max-w-xs dark:bg-transparent dark:text-gray-600 dark:border-gray-300" required
                            value={email} onChange={(e) => {setEmail(e.target.value); setMsg("");}}/>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" className="input input-bordered w-full max-w-xs dark:bg-transparent dark:text-gray-600 dark:border-gray-300" required
                            value={password} onChange={(e) => {setPassword(e.target.value); setMsg("");}}/>
                    </div>

                    <div className="form-control">
                        <label className="cursor-pointer label justify-start gap-2">
                            <span className="label-text">Remember me</span> 
                            <input type="checkbox" className="toggle toggle-sm toggle-accent" checked={remember} onChange={(e) => setRemember(e.target.checked)}/>
                        </label>
                    </div>


                    <button type="submit" className="btn btn-accent mt-4">Login</button>
            </form>

            <p className="text-sm text-gray-600 mt-4">Don&apos;t have an account? <Link href="/user/signup" className="text-blue-600 underline pl-1">Sign up</Link></p>
        </div>

    )
}