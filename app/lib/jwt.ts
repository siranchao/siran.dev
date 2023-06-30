import { JwtPayload } from "jsonwebtoken"
import jwt from "jsonwebtoken"

interface SignOptions {
    expiresIn?: string | number
}


export function signWithJwt(payload: JwtPayload, option: SignOptions) {
    const accessToken: string = jwt.sign(payload, process.env.JWT_SECRET as string, option)
    return accessToken;
}


export function verifyJwt(token: string) {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        return decoded as JwtPayload;
    } catch(err) {
        console.log(err);
        return null;
    }
}