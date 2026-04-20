'use client'
import { useState } from "react";
import { signUp } from "@/app/lib/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUp() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [msg, setMsg] = useState("");
    const [success, setSuccess] = useState("");

    const submitForm = async (e: any) => {
        e.preventDefault();
        if(password.length < 6 || password2.length < 6) {
            setMsg("Password must be at least 6 characters");
            return;
        }
        if(password !== password2) {
            setMsg("Passwords does not match");
            return;
        }

        try {
            const res = await signUp(email, name, password)

            if(res.user) {
                setSuccess("Account created, page redirecting...");
                setTimeout(() => {
                    router.push("/user/login");
                }, 2000);
            } else {
                setMsg(res.message);
            }

        } catch(err: any) {
            console.log(err)
            typeof err === "string" ? setMsg(err) : setMsg("Error creating account, please try again");
        }
    }

    return (
        <div className="flex flex-col items-center justify-around bg-base-100 border border-base-300 p-6 mx-auto rounded-2xl shadow-sm w-full sm:w-3/4 md:w-2/3 max-w-md">
            <p className="text-xl font-bold py-2 text-base-content">Create a new account</p>

            <form className="form-control w-full max-w-xs gap-4 py-4" onSubmit={submitForm}>
                    {msg && <p className="text-sm text-error font-medium mt-4">{msg}</p>}
                    {success && <p className="text-sm text-success font-medium mt-4">{success}</p>}

                    <div>
                        <label className="label">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-base-content/50">Email</span>
                        </label>
                        <input type="email" placeholder="email@example.com" className="input w-full max-w-xs border-base-300 bg-base-100 text-base-content placeholder:text-base-content/30 focus:border-primary/50 focus:outline-none rounded-xl" required
                            value={email} onChange={(e) => {setEmail(e.target.value); setMsg("");}}/>
                    </div>

                    <div>
                        <label className="label">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-base-content/50">Name</span>
                        </label>
                        <input type="text" className="input w-full max-w-xs border-base-300 bg-base-100 text-base-content placeholder:text-base-content/30 focus:border-primary/50 focus:outline-none rounded-xl" required
                            value={name} onChange={(e) => {setName(e.target.value); setMsg("");}}/>
                    </div>

                    <div>
                        <label className="label">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-base-content/50">Password</span>
                        </label>
                        <input type="password" placeholder="At least 6 characters long" className="input w-full max-w-xs border-base-300 bg-base-100 text-base-content placeholder:text-base-content/30 focus:border-primary/50 focus:outline-none rounded-xl" required
                            value={password} onChange={(e) => {setPassword(e.target.value); setMsg("");}}/>
                    </div>

                    <div>
                        <label className="label">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-base-content/50">Re-enter Password</span>
                        </label>
                        <input type="password" className="input w-full max-w-xs border-base-300 bg-base-100 text-base-content placeholder:text-base-content/30 focus:border-primary/50 focus:outline-none rounded-xl" required
                            value={password2} onChange={(e) => {setPassword2(e.target.value); setMsg("");}}/>
                    </div>



                    <button type="submit" className="btn bg-base-content text-base-100 hover:bg-base-content/85 border-none rounded-xl font-semibold mt-4">Sign up</button>
            </form>

            <p className="text-sm text-base-content/50 mt-4">Already have an account? <Link href="/user/login" className="text-primary font-semibold hover:underline underline-offset-4 pl-1">Log in</Link></p>
        </div>

    )
}
