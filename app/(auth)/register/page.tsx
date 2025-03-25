"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSignUp } from "@/api/user";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const Page: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const [showModal, setShowModal] = useState(false)
    const { mutate: signUp, isPending, isSuccess, isError, error } = useSignUp();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        signUp(formData);
    };

    useEffect(() => {
        if (isSuccess) {
            setShowModal(true)
        } else {
            console.log(error?.message)
        }
    }, [isSuccess]);

    return (
        <div className="flex-1 flex items-center justify-center p-4">
            <div className="flex flex-col gap-6 w-full max-w-sm">
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle className="text-xl">Create your account</CardTitle>
                        <CardDescription className="font-semibold text-base assamese-text">অনুগ্ৰহ কৰি আপোনাৰ তথ্য তলত পূৰণ কৰক</CardDescription>
                        {isError && (
                            <CardDescription className="font-medium text-xs text-destructive">
                                {error?.message}
                            </CardDescription>
                        )}
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
                                <Button disabled={isPending} type="submit" variant="default" className="w-full bg-primary text-white font-semibold">
                                    Continue
                                </Button>
                            </CardFooter>
                        </form>
                    </CardContent>
                    <Dialog open={showModal}>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle className="text-lg text-center font-semibold transform scale-y-125 text-primary">Congratulations</DialogTitle>
                                <DialogDescription className="text-center assamese-text text-base font-semibold text-muted-foreground">আপুনি সফলতাৰে সাইন আপ কৰিছে।</DialogDescription>
                                <Button className="font-bold text-white" onClick={() => window.location.reload()}>Go to Home</Button>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </Card>
            </div>
        </div>
    );
};

export default Page;