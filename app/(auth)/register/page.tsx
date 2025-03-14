"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignUp } from "@/api/user";
import { redirect } from "next/navigation";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const Page: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "laditya",
        lastName: "gogoi",
        email: "gogoiladitya@gmail.com",
        password: "1234567489"
    });
    const [loading, setLoading] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true)


        const result = await SignUp(formData);

        if (result.status === "success") {
            console.log(result.user)
        } else {
            console.log(result.status)
        }

        setLoading(false)
        redirect('/')
    };

    return (
        <div className="flex-1 flex items-center justify-center p-4">
            <div className="flex flex-col gap-6 w-full max-w-sm">
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle className="text-xl">Create your account</CardTitle>
                        <CardDescription>Welcome! Please fill in the details to get started</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-6">
                                <div className="grid gap-6">
                                    <div className="flex justify-between items-center gap-2">
                                        <div className="grid gap-2">
                                            <Label htmlFor="firstName">First Name</Label>
                                            <Input id="firstName" type="text" placeholder="First Name" required onChange={handleChange} />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="lastName">Last Name</Label>
                                            <Input id="lastName" type="text" placeholder="Last Name" required onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input id="email" type="email" placeholder="example@gmail.com" required onChange={handleChange} />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="password">Password</Label>
                                        <Input id="password" type="password" placeholder="Enter Your Password" required onChange={handleChange} />
                                    </div>
                                    <div className="text-center text-sm">
                                        Already have an account?{" "}
                                        <a href="/login" className="underline underline-offset-4">
                                            Sign In
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <CardFooter>
                                <Button disabled={loading} type="submit" variant="default" className="w-full bg-primary text-foreground font-semibold">
                                    Continue
                                </Button>
                            </CardFooter>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Page;