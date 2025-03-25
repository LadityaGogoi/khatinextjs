'use client'

import { useSignIn } from "@/api/user"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface FormData {
    email: string;
    password: string;
}


const Page: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: ""
    })
    const [showModal, setShowModal] = useState(false)
    const { mutate: signIn, error, isError, isPending, isSuccess } = useSignIn();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    useEffect(() => {
        if (isSuccess) {
            setShowModal(true)
        } else {
            console.log(error?.message)
        }
    }, [isSuccess])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        signIn(formData)
    }

    return (
        <div className="flex-1 flex items-center justify-center p-4">
            <div className="flex flex-col gap-6 w-full max-w-sm">
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle className="text-xl">Login to your account</CardTitle>
                        <CardDescription className="font-semibold text-base assamese-text">অনুগ্ৰহ কৰি আপোনাৰ তথ্য তলত পূৰণ কৰক</CardDescription>
                        {
                            isError && (
                                <CardDescription className="font-medium text-xs text-destructive">{error?.message}</CardDescription>
                            )
                        }
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-6">
                                <div className="flex flex-col gap-4">
                                    <Button variant="outline" className="w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        Login with Google
                                    </Button>
                                </div>
                                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                                    <span className="relative z-10 bg-background px-2 text-muted-foreground">Or continue with</span>
                                </div>
                                <div className="grid gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input id="email" type="email" placeholder="example@gmail.com" required onChange={handleChange} />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="password">Password</Label>
                                        <Input id="password" type="password" placeholder="Enter Your Password" required onChange={handleChange} />
                                    </div>
                                    <div className="text-center text-sm">
                                        Don&apos;t have an account?{" "}
                                        <a href="/register" className="underline underline-offset-4">
                                            Sign up
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <CardFooter>
                                <Button disabled={isPending} type="submit" variant="default" className="w-full bg-primary font-bold text-white">
                                    Continue
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 12L10 18V6L16 12Z"></path></svg>
                                </Button>
                            </CardFooter>
                        </form>
                    </CardContent>
                    <Dialog open={showModal}>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle className="text-lg text-center font-semibold transform scale-y-125 text-primary">Congratulations</DialogTitle>
                            <DialogDescription className="text-center assamese-text text-base font-semibold text-muted-foreground">আপুনি সফলতাৰে লগইন কৰিছে।</DialogDescription>
                            <Button className="font-bold text-white" onClick={() => window.location.reload()}>Go to Home</Button>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </Card>
        </div>
        </div >
    )
}

export default Page