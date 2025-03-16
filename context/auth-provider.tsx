'use client'

import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

type AuthData = {
    user: User | null;
    profile: any;
    loading: boolean;
    setProfile: (profile: any) => void;
}

const AuthContext = createContext<AuthData>({
    user: null,
    profile: null,
    loading: true,
    setProfile: () => { }
});

export default function AuthProvider({ children }: PropsWithChildren) {
    const [user, setUser] = useState<User | null>(null);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    const supabase = createClient();

    useEffect(() => {
        const fetchUser = async () => {
            const { data: userData } = await supabase.auth.getUser();
            setUser(userData.user);

            if (userData.user) {
                const { data } = await supabase
                    .from("users")
                    .select("*")
                    .eq("id", userData.user.id)
                    .single();

                setProfile(data || null);
            }
            setLoading(false);
        };

        fetchUser();

        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, profile, setProfile }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);