'use client'

import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { Button } from "@/components/ui/button";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileQuestion, Video } from "lucide-react";
import { useParams } from "next/navigation";
import { GetLessonDetails, GetLessonQuestionsByType } from "@/api/course";
import SearchBar from "@/components/custom/SearchBar";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/auth-provider";
import QuestionCard from "@/components/custom/QuestionCard";

const Page = () => {
    const { profile } = useAuth()
    const { subjectId, lessonId } = useParams()
    const [filters, setFilters] = useState<string[]>([])
    const [tab, setTab] = useState("All")
    const subject = Array.isArray(subjectId) ? subjectId[0] : subjectId
    const lesson = Array.isArray(lessonId) ? lessonId[0] : lessonId
    const { data: LessonDetails, isLoading } = GetLessonDetails(lesson)
    const { data: LessonQuestions, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading: isQuestionsLoading, refetch } = GetLessonQuestionsByType(lesson, profile?.id, tab, filters)

    useEffect(() => {
        refetch();
    }, [tab, filters])

    const QuestionData = LessonQuestions?.pages?.flatMap(page => page.questions) || [];

    const handleFiltersChange = (selectedFilters: string[]) => {
        setFilters(selectedFilters)
    }

    if (isLoading) {
        return (
            <div className="flex flex-col bg-primary/5 my-3">
                <div className="flex flex-col lg:flex-row mx-auto gap-2 md:mt-24">
                    <div className="text-center text-xs text-muted-foreground">...loading...</div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col bg-primary/5 pb-3">
            <div className="flex flex-col lg:flex-row mx-auto gap-2 my-3 md:mt-24">
                <div className="relative w-xs lg:w-md flex flex-col gap-2">
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
                                <BreadcrumbLink href={`/course/${subject}`}>subject</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{LessonDetails.name}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
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
                    <div className="flex flex-row w-full gap-2 justify-between items-center mt-3">
                        <div className="flex flex-row gap-0.5 justify-center items-center">
                            <BookOpen className="w-5 h-5 md:w-6 md:h-6" />
                            <div className="text-sm md:text-base">{LessonDetails.subtopics.length} topics</div>
                        </div>
                        <div className="flex flex-row gap-0.5 justify-center items-center">
                            <Video className="w-5 h-5 md:w-6 md:h-6" />
                            <div className="text-sm md:text-base">{LessonDetails.time} Minutes</div>
                        </div>
                        <div className="flex flex-row gap-0.5 justify-center items-center" onClick={() => console.log(LessonQuestions)}>
                            <FileQuestion className="w-5 h-5 md:w-6 md:h-6" />
                            <div className="text-sm md:text-base">{LessonDetails.total_questions} Questions</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3.5 w-xs lg:w-md">
                    <SearchBar placeholder="Search Questions" filterOptions={LessonDetails.subtopics} onFilterChange={handleFiltersChange} selectedFilters={filters} />
                    <Tabs defaultValue="All" className="w-full">
                        <TabsList className="w-full">
                            <TabsTrigger value="All" className="font-bold">All</TabsTrigger>
                            <TabsTrigger value="Saved" className="font-bold">Saved</TabsTrigger>
                        </TabsList>
                        <TabsContent value="All">
                            {
                                isQuestionsLoading ?
                                    <div>loading</div>
                                    :
                                    <>
                                        <div className="flex flex-col gap-2">
                                            {
                                                QuestionData.map((question, index) => (
                                                    <QuestionCard
                                                        key={index}
                                                        question={question}
                                                        total={LessonDetails.total_questions}
                                                    />
                                                ))
                                            }
                                        </div>
                                        {hasNextPage && (
                                            <div className="flex justify-center my-4">
                                                <Button
                                                    variant={"outline"}
                                                    className="text-xs"
                                                    size={"sm"}
                                                    onClick={() => fetchNextPage()}
                                                    disabled={isFetchingNextPage}
                                                >
                                                    {isFetchingNextPage ? 'Loading...' : 'Show More'}
                                                </Button>
                                            </div>
                                        )}
                                    </>
                            }
                        </TabsContent>
                        <TabsContent value="Saved" className="font-bold text-sm text-center">Coming Soon.</TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Page;
