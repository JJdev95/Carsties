import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { cookies, headers } from 'next/headers';
import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";

export async function getSession() {
    //some issues on my local pc, with secret  being null, this is just a temporary fix until i figure it out.
    console.log('auth secret is ' + authOptions.secret);
    if (!authOptions.secret) {
        authOptions.secret = 'secret';
    }

    return await getServerSession(authOptions);
}

export async function getCurrentUser() {

    try {
        const session = await getSession();

        if (!session) return null;

        return session.user;

    } catch (error) {
        return null;
    }
}

export async function getTokenWorkaround() {
    const req = {
        headers: Object.fromEntries(headers() as Headers),
        cookies: Object.fromEntries(
            cookies()
                .getAll()
                .map(c => [c.name, c.value])
        )
    } as NextApiRequest;

    return await getToken({ req });
}