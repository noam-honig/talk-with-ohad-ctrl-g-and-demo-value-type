import { BackendMethod, Remult, UserInfo } from "remult";
import { terms } from "./terms";
import { Roles } from "./users/roles";
import { Users } from "./users/users";
import * as jwt from 'jsonwebtoken';

export class AuthServerService {
    @BackendMethod({ allowed: true })
    static async signIn(user: string, password: string, remult?: Remult) {
        let result: UserInfo;
        let u = await remult!.repo(Users).findFirst({ name: user });
        if (u)
            if (await u.passwordMatches(password)) {
                result = {
                    id: u.id,
                    roles: [],
                    name: u.name
                };
                if (u.admin) {
                    result.roles.push(Roles.admin);
                }
            }

        if (result!) {
            return (jwt.sign(result, getJwtTokenSignKey()));
        }
        throw new Error(terms.invalidSignIn);
    }

}
export function getJwtTokenSignKey() {
    if (process.env['NODE_ENV'] === "production")
        return process.env['TOKEN_SIGN_KEY']!;
    return "my secret key";
}
