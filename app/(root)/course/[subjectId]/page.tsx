'use client'

import { BookOpen, FileQuestion, Timer } from "lucide-react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-provider";
import { GetLessonBySubject } from "@/api/course";

const Page = () => {
    const { subjectId } = useParams()
    const { profile, loading } = useAuth()
    const id = Array.isArray(subjectId) ? subjectId[0] : subjectId
    const router = useRouter()

    const { data, isLoading } = GetLessonBySubject(id, profile?.id)

    if (isLoading || loading) {
        return (
            <div className="flex flex-col bg-primary/5 my-3">
                <div className="flex flex-col lg:flex-row mx-auto gap-2 md:mt-24">
                    <div className="text-center text-xs text-muted-foreground">loading...</div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col bg-primary/5">
            <div className="flex flex-col my-3 md:mt-24 w-full md:w-2xl lg:w-5xl mx-auto">
                <div className="w-xs md:w-full mx-auto mb-3">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/course">course</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-muted-foreground">subject</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="text-center" onClick={() => console.log(profile)}>test</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
                    {data?.map((lesson, index) => (
                        <div onClick={() => router.push('/plan')} key={index}>
                            <Card className="p-0">
                                <div className="w-xs flex flex-row gap-2 justify-between items-center p-3">
                                    <div className="p-1 bg-primary/10 rounded-full">
                                        <img src={lesson.image} alt="logo" className="w-9 h-9" />
                                    </div>
                                    <div className="flex-1 flex-col items-start gap-2">
                                        <div className="text-xs font-semibold text-muted-foreground transform scale-y-150 mb-2">{lesson.name}</div>
                                        <div className="flex flex-row w-full justify-between items-center">
                                            <div className="flex flex-row gap-0.5">
                                                <BookOpen size={16} className="text-muted-foreground" />
                                                <div className="text-xs text-muted-foreground">{lesson.totalSubtopics} Sub Topics</div>
                                            </div>
                                            <div className="flex flex-row gap-0.5">
                                                <Timer size={16} className="text-muted-foreground" />
                                                <div className="text-xs text-muted-foreground">{lesson.timeRequired} hr</div>
                                            </div>
                                            <div className="flex flex-row gap-0.5">
                                                <FileQuestion size={16} className="text-muted-foreground" />
                                                <div className="text-xs text-muted-foreground">{lesson.progress}% done</div>
                                            </div>
                                        </div>
                                        <div className="flex-1 h-1.5 bg-primary/30 rounded-full">
                                            <div className="h-full bg-primary rounded-full" style={{ width: `${lesson.progress}%` }} />
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
