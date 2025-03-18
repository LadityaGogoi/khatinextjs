'use client'

import { GetCourse } from "@/api/course";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/context/auth-provider";
import { BookOpen, FileQuestion, Heart, Landmark, Lock } from "lucide-react";
import Link from "next/link";

export default function Course() {
    const { profile } = useAuth()
    const { data, isLoading } = GetCourse(profile?.exam)

    if (isLoading) {
        return (
            <div className="flex flex-col bg-primary/5 my-3">
                <div className="flex flex-col lg:flex-row mx-auto gap-2 md:mt-24">
                    <div className="text-center text-xs text-muted-foreground">loading...</div>
                </div>
            </div>
        )
    }

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
                                    <div className="p-1 bg-primary/10 rounded-full">
                                        <img src={data?.image} alt="logo" className="w-9 h-9" />
                                    </div>
                                    <div className="flex flex-col justify-between items-start">
                                        <div className="font-semibold text-base text-muted-foreground">{data?.name}</div>
                                        <div className="flex flex-row">
                                            <Landmark size={16} className="stroke-muted-foreground" />
                                            <div className="text-xs text-muted-foreground">{data?.organization}</div>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => console.log(data)}>
                                    <Heart size={24} className="stroke-muted-foreground" />
                                </button>
                            </CardContent>
                        </Card>
                        <div className="text-base font-medium assamese-text text-muted-foreground">{data?.description}</div>
                    </CardContent>
                </Card>
            </div>
            <div className="flex flex-col lg:flex-row mx-auto gap-2 mt-5">
                <div className="w-xs lg:w-md">
                    <div className="flex flex-col gap-1">
                        {
                            data?.subjects.map((subject, index) => (
                                <Link key={index} href={`/course/${subject.id}`}>
                                    <Card className="w-xs lg:w-md p-0">
                                        <CardContent className="p-3 flex flex-col gap-2 justify-center items-center">
                                            <div className="text-base font-semibold text-muted-foreground">{subject.name}</div>
                                            <div className="flex flex-row w-full justify-between items-center">
                                                <div className="flex flex-row gap-0.5">
                                                    <BookOpen className="stroke-muted-foreground" size={16} />
                                                    <div className="text-xs text-muted-foreground">{subject.total_lessons} lessons</div>
                                                </div>
                                                <div className="flex flex-row gap-0.5">
                                                    <FileQuestion className="stroke-muted-foreground" size={16} />
                                                    <div className="text-xs text-muted-foreground">{subject.total_questions}+ questions</div>
                                                </div>
                                                <div className="flex flex-row gap-0.5">
                                                    <Lock className="stroke-muted-foreground" size={16} />
                                                    <div className="text-xs text-muted-foreground">{subject.isPremium ? "premium" : "free"}</div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-2 min-w-xs">
                    <div className="text-destructive font-extrabold text-lg text-center">-Notice-</div>
                    <div className="flex flex-col gap-2">
                        {
                            data?.exam_notice_board.map((notice, index) => (
                                <Link key={index} href={notice.notice_url}>
                                    <Card className="w-xs p-0 m-0 relative">
                                        <CardContent className="p-3">
                                            <div className="flex flex-col gap-2 justify-center items-center">
                                                <div className="text-sm font-semibold text-muted-foreground">{notice.heading}</div>
                                                <div className="text-xs line-clamp-2 text-muted-foreground">{notice.description}</div>
                                            </div>
                                            <div className="absolute top-0 right-0 rounded-bl-full bg-destructive text-xs">
                                                New
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
} 