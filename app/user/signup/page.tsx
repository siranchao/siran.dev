'use client'
import { useState } from "react";
import { signUp } from "@/app/lib/auth";
import { useRouter } from "next/navigation";

export default function SignUp() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [msg, setMsg] = useState("");

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
                router.push("/user/login");
            } else {
                setMsg(res.message);
            }
           
        } catch(err: any) {
            console.log(err)
            typeof err === "string" ? setMsg(err) : setMsg("Error creating account, please try again");
        }
    }

    return (
        <div className="flex flex-col items-center justify-around bg-gray-100 p-4 mx-auto rounded-lg shadow-xl w-full sm:w-3/4 md:w-2/3">
            <p className="text-xl font-semibold py-2 dark:text-gray-600">Create a new account</p>
                    
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
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" className="input input-bordered w-full max-w-xs dark:bg-transparent dark:text-gray-600 dark:border-gray-300" required
                            value={name} onChange={(e) => {setName(e.target.value); setMsg("");}}/>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="At least 6 characters long" className="input input-bordered w-full max-w-xs dark:bg-transparent dark:text-gray-600 dark:border-gray-300" required
                            value={password} onChange={(e) => {setPassword(e.target.value); setMsg("");}}/>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Re-enter Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full max-w-xs dark:bg-transparent dark:text-gray-600 dark:border-gray-300" required
                            value={password2} onChange={(e) => {setPassword2(e.target.value); setMsg("");}}/>
                    </div>



                    <button type="submit" className="btn btn-accent mt-4">Sign up</button>
            </form>
        </div>

    )
}