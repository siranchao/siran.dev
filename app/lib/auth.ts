

export async function signUp(email: string, name: string, password: string) {
    
    try {
        const res = await fetch(`api/user/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                name: name,
                password: password
            })
        })
        const data = await res.json()

        if(res.status === 200) {
            return {
                message: "User created successfully",
                user: data
            }
        } else if(res.status === 400) {
            return {
                message: "User already exists",
                user: null
            }
        } else {
            return {
                message: "Unable to create user, please try again",
                user: null
            }
        }

    } catch (err: any) {
        console.log(err)
        throw new Error(err)
    }
}