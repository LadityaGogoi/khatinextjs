import { createClient } from "@/utils/supabase/client"
import { useMutation } from "@tanstack/react-query";
import { redirect } from "next/navigation";

interface SignUpFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

interface SignInFormData {
    email: string;
    password: string;
}

async function signUpApi(formData: SignUpFormData) {
    const supabase = createClient();

    const credentials = {
        username: formData.firstName,
        email: formData.email,
        password: formData.password,
    };

    const { error, data } = await supabase.auth.signUp({
        email: credentials.email,
        password: credentials.password,
        options: {
            data: { username: credentials.username },
        },
    });

    if (error) {
        throw new Error(error.message);
    } else if (data?.user?.identities?.length === 0) {
        throw new Error("User with this email already exists");
    }

    return data.user;
}

export function useSignUp() {
    return useMutation({
        mutationFn: signUpApi,
    });
}

export async function signInApi(formData: SignInFormData) {
    const supabase = createClient();

    const { error, data } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
    });

    if (error) {
        throw new Error(error.message);
    }

    return data?.user;
}

export function useSignIn() {
    return useMutation({
        mutationFn: signInApi,
    });
}

export async function GetUser() {
    const supaabse = createClient()

    const {
        data: { user },
    } = await supaabse.auth.getUser()

    return user
}

export async function SignOut() {
    const supabase = createClient()

    await supabase.auth.signOut()

    // Revalidate cache to ensure UI updates
    redirect('/login')
}