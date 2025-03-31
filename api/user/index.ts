import { createClient } from "@/utils/supabase/client"
import { useMutation, useQuery } from "@tanstack/react-query";
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
            data: {
                name: credentials.username,
                email: credentials.email,
                password: credentials.password,
            },
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

    const user = data?.user;

    if (!user) {
        throw new Error("Authentication failed")
    }

    // const { data: activeSession } = await supabase
    //     .from("active_session")
    //     .select("*")
    //     .eq("user_id", user.id)
    //     .single()

    // if (activeSession) {
    //     await supabase.auth.signOut();
    //     throw new Error("Another session is already active")
    // }

    // const { error: sessionError } = await supabase
    //     .from("active_session")
    //     .insert([{ user_id: user.id }])

    // if (sessionError) {
    //     throw new Error("Error creating user session")
    // }

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

export async function SignOut(userId?: string) {
    const supabase = createClient()

    await supabase
        .from("active_session")
        .delete()
        .eq("user_id", userId)

    await supabase.auth.signOut()

    // Revalidate cache to ensure UI updates
    redirect('/register')
}

export const CheckActiveSession = (userId?: string) => {
    const supabase = createClient()

    return useQuery({
        queryKey: ["sessioncheck", userId],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("active_session")
                .select("*")
                .eq("user_id", userId)
                .single()

            if (error) {
                throw new Error(error.message)
            }

            return data
        }
    })
}