'use client'

import { SignOut } from "@/api/user"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/auth-provider"
import { ArrowRight, Bookmark, FileQuestion, Mail, Settings, User } from "lucide-react"

const Page = () => {
    const { profile } = useAuth()
    return (
        <div className="flex flex-col bg-primary/5">
            <div className="flex flex-col mx-auto justify-center items-center gap-3 my-3 md:mt-24">
                <div className="w-xs py-1.5 px-1.5 rounded-full border bg-secondary flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-start items-center gap-2">
                        <div className="rounded-full p-1.5 bg-primary/10">
                            <User className="stroke-muted-foreground" />
                        </div>
                        <div className="font-medium text-base text-muted-foreground">Profile</div>
                    </div>
                    <div>
                        <ArrowRight className="stroke-muted-foreground" />
                    </div>
                </div>
                <div className="w-xs py-1.5 px-1.5 rounded-full border bg-secondary flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-start items-center gap-2">
                        <div className="rounded-full p-1.5 bg-primary/10">
                            <Bookmark className="stroke-muted-foreground" />
                        </div>
                        <div className="font-medium text-base text-muted-foreground">Saved</div>
                    </div>
                    <div>
                        <ArrowRight className="stroke-muted-foreground" />
                    </div>
                </div>
                <div className="w-xs py-1.5 px-1.5 rounded-full border bg-secondary flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-start items-center gap-2">
                        <div className="rounded-full p-1.5 bg-primary/10">
                            <Settings className="stroke-muted-foreground" />
                        </div>
                        <div className="font-medium text-base text-muted-foreground">Settings</div>
                    </div>
                    <div>
                        <ArrowRight className="stroke-muted-foreground" />
                    </div>
                </div>
                <div className="w-xs py-1.5 px-1.5 rounded-full border bg-secondary flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-start items-center gap-2">
                        <div className="rounded-full p-1.5 bg-primary/10">
                            <Mail className="stroke-muted-foreground" />
                        </div>
                        <div className="font-medium text-base text-muted-foreground">Contact Us</div>
                    </div>
                    <div>
                        <ArrowRight className="stroke-muted-foreground" />
                    </div>
                </div>
                <div className="w-xs py-1.5 px-1.5 rounded-full border bg-secondary flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-start items-center gap-2">
                        <div className="rounded-full p-1.5 bg-primary/10">
                            <FileQuestion className="stroke-muted-foreground" />
                        </div>
                        <div className="font-medium text-base text-muted-foreground">Help Center</div>
                    </div>
                    <div>
                        <ArrowRight className="stroke-muted-foreground" />
                    </div>
                </div>
                <div onClick={() => SignOut(profile.id)}>
                    <Button variant={"destructive"} className="font-medium" size={"sm"}>Log Out</Button>
                </div>
            </div>
        </div>
    )
}

export default Page