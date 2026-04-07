"use client";

import Link from "next/link";


export default function Warning({msg}: {msg: string}) {

    return (
        <div>
            <div className="alert border border-warning/30 bg-warning/10 text-warning rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <span className="text-sm font-medium">Warning: {msg}</span>
            </div>

            <div className="mt-8 flex justify-center">
                <Link href="/"><button className="btn btn-sm bg-base-content text-base-100 hover:bg-base-content/85 border-none rounded-lg font-semibold text-xs">Back to Home</button></Link>
            </div>
        </div>
    )
}
