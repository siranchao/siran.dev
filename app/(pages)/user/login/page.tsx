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
        <div className="flex flex-col items-center justify-around bg-base-100 border border-base-300 p-6 mx-auto rounded-2xl shadow-sm w-full sm:w-3/4 md:w-2/3 max-w-md">
            <p className="text-xl font-bold py-2 text-base-content">Sign in to your account</p>

            <form className="form-control w-full max-w-xs gap-4 py-4" onSubmit={submitForm}>
                    {msg && <p className="text-sm text-error font-medium mt-4">{msg}</p>}

                    <div>
                        <label className="label">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-base-content/50">Email</span>
                        </label>
                        <input type="email" placeholder="email@example.com" className="input w-full max-w-xs border-base-300 bg-base-100 text-base-content placeholder:text-base-content/30 focus:border-primary/50 focus:outline-none rounded-xl" required
                            value={email} onChange={(e) => {setEmail(e.target.value); setMsg("");}}/>
                    </div>

                    <div>
                        <label className="label">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-base-content/50">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" className="input w-full max-w-xs border-base-300 bg-base-100 text-base-content placeholder:text-base-content/30 focus:border-primary/50 focus:outline-none rounded-xl" required
                            value={password} onChange={(e) => {setPassword(e.target.value); setMsg("");}}/>
                    </div>

                    <div className="form-control">
                        <label className="cursor-pointer label justify-start gap-2">
                            <span className="text-sm text-base-content/60">Remember me</span>
                            <input type="checkbox" className="toggle toggle-sm toggle-primary" checked={remember} onChange={(e) => setRemember(e.target.checked)}/>
                        </label>
                    </div>


                    <button type="submit" className="btn bg-base-content text-base-100 hover:bg-base-content/85 border-none rounded-xl font-semibold mt-4">Login</button>
            </form>

            <p className="text-sm text-base-content/50 mt-4">Don&apos;t have an account? <Link href="/user/signup" className="text-primary font-semibold hover:underline underline-offset-4 pl-1">Sign up</Link></p>
        </div>

    )
}
