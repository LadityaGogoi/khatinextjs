"use client"

import { Button } from "@/components/ui/button";
import { BookOpen, Briefcase, House, Moon, Sun, Tv, User } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import React, { useEffect, useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import AuthProvider from "@/context/auth-provider";


export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <AuthProvider>
            <main className="w-full h-full mx-auto bg-background">
                <div className="flex flex-col w-full">
                    <nav className="py-1.5 w-full px-1.5 md:px-5 md:fixed top-0 left-0 backdrop-blur-md z-[10] border-b md:border-dashed flex flex-row justify-between items-center bg-background/50">
                        <div className="assamese-text font-bold text-lg text-primary md:w-28">খাতি</div>
                        <NavigationMenu className="hidden md:flex">
                            <NavigationMenuList className="w-sm rounded-full py-1.5 px-3 border flex flex-row justify-between items-center">
                                <NavigationMenuItem>
                                    <Link href="/">
                                        <Button variant={"ghost"} size="icon" className="flex flex-col justify-center items-center">
                                            <House className="stroke-muted-foreground stroke-2" />
                                            <div className="text-xs font-medium text-muted-foreground">Home</div>
                                        </Button>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/job">
                                        <Button variant={"ghost"} size="icon" className="flex flex-col justify-center items-center">
                                            <Briefcase className="stroke-muted-foreground stroke-2" />
                                            <div className="text-xs font-medium text-muted-foreground">Job Board</div>
                                        </Button>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/course">
                                        <Button variant={"ghost"} size="icon" className="flex flex-col justify-center items-center">
                                            <Tv className="stroke-muted-foreground stroke-2" />
                                            <div className="text-xs font-medium text-muted-foreground">Course</div>
                                        </Button>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/testseries">
                                        <Button variant={"ghost"} size="icon" className="flex flex-col justify-center items-center">
                                            <BookOpen className="stroke-muted-foreground stroke-2" />
                                            <div className="text-xs font-medium text-muted-foreground">Test Series</div>
                                        </Button>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/profile">
                                        <Button variant={"ghost"} size="icon" className="flex flex-col justify-center items-center">
                                            <User className="stroke-muted-foreground stroke-2" />
                                            <div className="text-xs font-medium text-muted-foreground">Profile</div>
                                        </Button>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <div className="flex flex-row justify-center items-center gap-2">
                            <Link href="/pricing">
                                <div className="text-base transform scale-y-125 font-semibold text-yellow-500 hover:text-foreground">Premium</div>
                            </Link>
                            <Toggle
                                pressed={theme === "dark"}
                                onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                            >
                                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </Toggle>
                        </div>
                    </nav>
                    <nav className="w-full fixed bottom-0 left-0 block md:hidden z-[10]">
                        <div className="flex justify-between items-center bg-primary/90 backdrop-blur-md border border-primary/50 rounded-full py-3 px-3 mx-1.5 mb-3">
                            <Link href="/">
                                <Button variant={"ghost"} size="icon" className="flex flex-col justify-center items-center">
                                    <House className="stroke-white stroke-2" />
                                    <div className="text-xs font-medium text-white">Home</div>
                                </Button>
                            </Link>
                            <Link href="/job">
                                <Button variant={"ghost"} size="icon" className="flex flex-col justify-center items-center">
                                    <Briefcase className="stroke-white stroke-2" />
                                    <div className="text-xs font-medium text-white">Job Board</div>
                                </Button>
                            </Link>
                            <Link href="/course">
                                <Button variant={"ghost"} size="icon" className="flex flex-col justify-center items-center">
                                    <Tv className="stroke-white stroke-2" />
                                    <div className="text-xs font-medium text-white">Course</div>
                                </Button>
                            </Link>
                            <Link href="/testseries">
                                <Button variant={"ghost"} size="icon" className="flex flex-col justify-center items-center">
                                    <BookOpen className="stroke-white stroke-2" />
                                    <div className="text-xs font-medium text-white">Test Series</div>
                                </Button>
                            </Link>
                            <Link href="/profile">
                                <Button variant={"ghost"} size="icon" className="flex flex-col justify-center items-center">
                                    <User className="stroke-white stroke-2" />
                                    <div className="text-xs font-medium text-white">Profile</div>
                                </Button>
                            </Link>
                        </div>
                    </nav>
                    {children}
                    <div className="pb-24 md:pb-3 pt-3 px-4 border-t">
                        <div className="max-w-md mx-auto space-y-4">
                            <div className="flex justify-center gap-4 text-sm text-muted-foreground">
                                <Link href="/" className="hover:text-foreground font-semibold">Privacy Policy</Link>
                                <Link href="/" className="hover:text-foreground font-semibold">Terms of Service</Link>
                            </div>
                            <div className="flex justify-center space-x-4">
                                <a href="https://www.instagram.com/khatiedu?igsh=b2Nnbmp3N2oyZjZ6">
                                    <Button className="bg-transparent hover:bg-primary-foreground text-muted-foreground hover:text-foreground" size={"icon"} variant={"ghost"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path></svg>
                                    </Button>
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=61573553751759">
                                    <Button className="bg-transparent hover:bg-primary-foreground text-muted-foreground hover:text-foreground" size={"icon"} variant={"ghost"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path></svg>
                                    </Button>
                                </a>
                                <Button className="bg-transparent hover:bg-primary-foreground text-muted-foreground hover:text-foreground" size={"icon"} variant={"ghost"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"></path></svg>
                                </Button>
                                <Button className="bg-transparent hover:bg-primary-foreground text-muted-foreground hover:text-foreground" size={"icon"} variant={"ghost"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.00098 3H20.001C20.5533 3 21.001 3.44772 21.001 4V20C21.001 20.5523 20.5533 21 20.001 21H4.00098C3.44869 21 3.00098 20.5523 3.00098 20V4C3.00098 3.44772 3.44869 3 4.00098 3ZM5.00098 5V19H19.001V5H5.00098ZM7.50098 9C6.67255 9 6.00098 8.32843 6.00098 7.5C6.00098 6.67157 6.67255 6 7.50098 6C8.3294 6 9.00098 6.67157 9.00098 7.5C9.00098 8.32843 8.3294 9 7.50098 9ZM6.50098 10H8.50098V17.5H6.50098V10ZM12.001 10.4295C12.5854 9.86534 13.2665 9.5 14.001 9.5C16.072 9.5 17.501 11.1789 17.501 13.25V17.5H15.501V13.25C15.501 12.2835 14.7175 11.5 13.751 11.5C12.7845 11.5 12.001 12.2835 12.001 13.25V17.5H10.001V10H12.001V10.4295Z"></path></svg>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div >
            </main >
        </AuthProvider>
    );
}
