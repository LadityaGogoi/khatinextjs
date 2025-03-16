import { createClient } from "@/utils/supabase/client"
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

export async function SignUp(formData: SignUpFormData) {
    const supabase = createClient()

    const credentials = {
        username: formData.firstName as string,
        email: formData.email as string,
        password: formData.password as string
    }

    const { error, data } = await supabase.auth.signUp({
        email: credentials.email,
        password: credentials.password,
        options: {
            data: {
                username: credentials.username
            }
        }
    })

    if (error) {
        return {
            status: error?.message,
            user: null
        }
    } else if (data?.user?.identities?.length === 0) {
        return {
            status: "User with this email already exists",
            user: null,
        }
    }

    return { status: "success", user: data.user }
}

export async function SignIn(formData: SignInFormData) {
    const supabase = createClient()

    const credentials = {
        email: formData.email as string,
        password: formData.password as string
    }

    const { error, data } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password
    })

    if (error) {
        return {
            status: error?.message,
            user: null
        }
    }

    return { status: "success", user: data?.user }
}

export async function GetUser() {
    const supaabse = await createClient()

    const {
        data: { user },
    } = await supaabse.auth.getUser()

    return user
}

export async function SignOut() {
    const supabase = await createClient()

    await supabase.auth.signOut()

    // Revalidate cache to ensure UI updates
    // revalidatePath("/", 'layout')
    console.log("hello")

    redirect('/login')
}