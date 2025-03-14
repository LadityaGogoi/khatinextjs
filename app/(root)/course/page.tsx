import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { BookOpen, Building, FileQuestion, Heart, Landmark, Loader, Lock, User } from "lucide-react";
import Link from "next/link";

export default function Course() {
    return (
        <div className="flex flex-col bg-primary/5 my-3">
            <div className="flex flex-col lg:flex-row mx-auto gap-2 md:mt-24">
                <div className="relative w-xs lg:w-md">
                    <HeroVideoDialog
                        className="block dark:hidden"
                        animationStyle="top-in-bottom-out"
                        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                        thumbnailAlt="Hero Video"
                    />
                    <HeroVideoDialog
                        className="hidden dark:block"
                        animationStyle="top-in-bottom-out"
                        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                        thumbnailAlt="Hero Video"
                    />
                </div>
                <Card className="p-0">
                    <CardContent className="flex flex-col gap-2 max-w-xs p-3">
                        <Card className="p-0">
                            <CardContent className="flex flex-row justify-between items-center p-3">
                                <div className="flex flex-row gap-2">
                                    <div className="p-1.5 bg-primary/20 rounded-full">
                                        <Loader size={32} />
                                    </div>
                                    <div className="flex flex-col justify-between items-start">
                                        <div className="font-semibold text-base">Assam Police SI</div>
                                        <div className="flex flex-row">
                                            <Landmark size={16} />
                                            <div className="text-xs">Govt. of Assam</div>
                                        </div>
                                    </div>
                                </div>
                                <button>
                                    <Heart size={24} className="stroke-secondary-foreground" />
                                </button>
                            </CardContent>
                        </Card>
                        <div className="text-sm text-foreground">This detailed Assam Police SI Syllabus 2025 covers important subjects, namely General Knowledge, the Culture and History of India & Assam, and Logical Reasoning, Aptitude, and Comprehension. In addition to the written exam, the selection process also includes a PST & PET and Viva Voce/Psychometric Tes</div>
                    </CardContent>
                </Card>
            </div>
            <div className="flex flex-col lg:flex-row mx-auto gap-2 mt-5">
                <div className="w-xs lg:w-md">
                    <div className="flex flex-col gap-2">
                        <Link href="/course/arithmetic">
                            <Card className="w-xs lg:w-md p-0">
                                <CardContent className="p-3 flex flex-col gap-2 justify-center items-center">
                                    <div className="text-sm font-semibold">Apptitute & Comprehension</div>
                                    <div className="flex flex-row w-full justify-between items-center">
                                        <div className="flex flex-row gap-0.5">
                                            <BookOpen size={16} />
                                            <div className="text-xs">0 lessons</div>
                                        </div>
                                        <div className="flex flex-row gap-0.5">
                                            <FileQuestion size={16} />
                                            <div className="text-xs">12390+ questions</div>
                                        </div>
                                        <div className="flex flex-row gap-0.5">
                                            <Lock size={16} />
                                            <div className="text-xs">free</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2 min-w-xs">
                    <div className="text-destructive font-extrabold text-lg text-center">-Notice-</div>
                    <div className="flex flex-col gap-2">
                        <Card className="w-xs p-0 m-0 relative">
                            <CardContent className="p-3">
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <div className="text-sm font-semibold text-foreground">Assam Police SI recruitement drive 2025</div>
                                    <div className="text-xs line-clamp-2">The Assam Police has officially announced the Sub-Inspector (SI) Recruitment Drive for 2025. This is a great opportunity for candidates looking to serve in the state police department. The recruitment will be conducted for various posts in different units under Assam Police.</div>
                                </div>
                                <div className="absolute top-0 right-0 rounded-bl-full bg-destructive text-xs">
                                    New
                                </div>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </div>
        </div>
    )
} 