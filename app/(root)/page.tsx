'use client'

import { Button } from "@/components/ui/button";
import { Bookmark, BookOpen, Briefcase, Eye, FileQuestion, FolderDown, Rss, Timer } from "lucide-react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GetAllNews } from "@/api/news";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useAuth } from "@/context/auth-provider"
import { images } from "@/constants";

const NewsCategoriesData = [
    { id: 0, name: "Trending" },
    { id: 1, name: "Current Affairs" },
    { id: 2, name: "Business & Economy" },
    { id: 3, name: "Technology" },
    { id: 4, name: "Science & Environment" },
    { id: 5, name: "Health" },
    { id: 6, name: "Sports" },
    { id: 7, name: "Entertainment" },
    { id: 8, name: "World News" },
    { id: 9, name: "Education" },
    { id: 10, name: "Crime & Law" }
];


export default function Home() {
    const [selectedId, setSelectedId] = useState<number>(1)
    const [filter, setFilter] = useState<string[]>(["Current Affairs"])
    const { loading, profile } = useAuth()

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, refetch } = GetAllNews(filter)

    const news = data?.pages?.flatMap(page => page.news) || []

    useEffect(() => {
        refetch()
    }, [filter])

    const timeAgo = (createdAt: string | number | Date): string => {
        const createdDate = new Date(createdAt);
        const now = new Date();
        const diffInSeconds = Math.floor((now.getTime() - createdDate.getTime()) / 1000);

        const units = [
            { label: "year", seconds: 31536000 },
            { label: "month", seconds: 2592000 },
            { label: "week", seconds: 604800 },
            { label: "day", seconds: 86400 },
            { label: "hour", seconds: 3600 },
            { label: "minute", seconds: 60 },
        ];

        for (const unit of units) {
            const quotient = Math.floor(diffInSeconds / unit.seconds);
            if (quotient >= 1) {
                return quotient === 1 ? `1 ${unit.label} ago` : `${quotient} ${unit.label}s ago`;
            }
        }

        return "Just now";
    };


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
        <div className="w-full">
            <div className="flex flex-col md:pt-32 w-full pb-4 bg-primary/5">
                <div className="w-full py-6 pb-10 text-center flex-col gap-6 flex">
                    <h1 className="hidden md:block">
                        <span className="bg-clip-text text-transparent bg-[linear-gradient(74deg,#4285f4_0%,#9b72cb_33%,#d96570_66%,#4285f4_100%)] relative mx-0 max-w-[43.5rem] pt-5 md:mx-auto md:px-4 md:py-2 text-balance text-left font-bold tracking-tighter md:text-center text-5xl md:text-5xl">
                            ALL In One App
                            <br />
                            For Assamese Students
                        </span>
                    </h1>
                    <p className="max-w-2xl text-center assamese-text text-muted-foreground text-lg md:text-xl font-medium mx-auto px-4 sm:px-0">
                        জটিল বিষয়সমূহ সৰল কৰা ➜ অধ্যয়ন টোকা সৃষ্টি কৰা ➜ প্ৰশ্নকাকত সৃষ্টি কৰা ➜ পিডিএফ অনুবাদ কৰিবলৈ সৰল কৰা ➜ কুইজ আৰু ফ্লেছকাৰ্ড সৃষ্টি কৰা
                    </p>
                    <div className="w-xs mx-auto">
                        <a href="#">
                            <Button variant="default" size="lg" className="w-full bg-primary text-sm font-medium text-white">
                                Download Khati App
                                <FolderDown className="stroke-3" />
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="w-full pt-5 md:pt-0">
                    <Carousel className="max-w-11/12 mx-auto md:max-w-sm xl:max-w-5xl relative">
                        <CarouselContent className="-ml-4">
                            <CarouselItem className="basis-xs h-48 pl-4">
                                <img src={images.Carousel1.src} alt="carousel img" className="w-full h-full object-cover rounded-md" />
                            </CarouselItem>
                            <CarouselItem className="basis-xs h-48 pl-4">
                                <Link href={"/course"}>
                                    <img src={images.Carousel2.src} alt="carousel img" className="w-full h-full object-cover rounded-md" />
                                </Link>
                            </CarouselItem>
                            <CarouselItem className="basis-xs h-48 pl-4">
                                <Link href={"/testseries"}>
                                    <img src={images.Carousel3.src} alt="carousel img" className="w-full h-full object-cover rounded-md" />
                                </Link>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="absolute p-5 md:p-9 left-0 top-1/2 transform -translate-y-1/2" />
                        <CarouselNext className="absolute p-5 md:p-9 right-0 top-1/2 transform -translate-y-1/2" />
                    </Carousel>
                </div>
                <div className="pt-5 md:pt-9 hidden md:flex">
                    <VelocityScroll defaultVelocity={2} className="text-3xl md:text-5xl font-extrabold" >
                        <span>
                            <span className="mx-2 text-gray-400">|</span>
                            <span className="bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-400 dark:to-amber-300 text-transparent bg-clip-text md:leading-normal">Free Mock Test</span>
                            <span className="mx-2 text-gray-400">|</span>
                            <span className="bg-gradient-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-violet-300 text-transparent bg-clip-text">Job Board</span>
                            <span className="mx-2 text-gray-400">|</span>
                            <span className="bg-gradient-to-r from-red-600 to-red-500 dark:from-red-400 dark:to-red-300 text-transparent bg-clip-text">Important News</span>
                            <span className="mx-2 text-gray-400">|</span>
                            <span className="bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300 text-transparent bg-clip-text">Chapterwise Preparation</span>
                        </span>
                    </VelocityScroll>
                </div>
                <div className="w-full md:w-2xl lg:w-5xl mx-auto flex flex-col md:flex-row justify-center items-center">
                    <div className="flex flex-col gap-2 mt-2 md:mt-0">
                        <div className="flex flex-row gap-2 justify-start items-center w-xs mx-auto p-1.5 rounded-md bg-secondary/50" onClick={() => console.log(profile)}>
                            <div className="p-1 rounded-md justify-center items-center bg-secondary">
                                <Briefcase className="stroke-primary" />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground"># Updated Jobs Notification</span>
                        </div>
                        <div className="flex flex-row gap-2 justify-start items-center w-xs mx-auto p-1.5 rounded-md bg-secondary/50">
                            <div className="p-1 rounded-md justify-center items-center bg-secondary">
                                <FileQuestion className="stroke-primary" />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground"># Mock Test Series | Live Weekly Test</span>
                        </div>
                        <div className="flex flex-row gap-2 justify-start items-center w-xs mx-auto p-1.5 rounded-md bg-secondary/50">
                            <div className="p-1 rounded-md justify-center items-center bg-secondary">
                                <Rss className="stroke-primary" />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground"># Mock Test Series | Live Weekly Test</span>
                        </div>
                        <div className="flex flex-row gap-2 justify-start items-center w-xs mx-auto p-1.5 rounded-md bg-secondary/50">
                            <div className="p-1 rounded-md justify-center items-center bg-secondary">
                                <BookOpen className="stroke-primary" />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground"># Full Syllabus | 50,000+ questions</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full md:w-2xl lg:w-5xl mx-auto">
                    <div className="text-center font-bold text-lg text-primary transform scale-y-150 mt-3" onClick={() => console.log(news)}>Latest News</div>
                    <ScrollArea className="whitespace-nowrap">
                        <div className="flex space-x-4 p-2 mb-3">
                            {
                                NewsCategoriesData.map((item, index) => {
                                    const isSelected = item.id === selectedId
                                    return (
                                        <div
                                            key={index}
                                            onClick={() => {
                                                setFilter([item.name])
                                                setSelectedId(item.id)
                                            }}
                                            className={`${isSelected ? 'bg-primary text-white' : 'bg-secondary text-muted-foreground'} rounded-full px-3 py-1.5 cursor-pointer`}>
                                            {item.name}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <ScrollBar className="h-0" orientation="horizontal" />
                    </ScrollArea>
                    {
                        isLoading ?
                            <div className="flex justify-center items-center w-full">
                                <span className="animate-spin rounded-full h-6 w-6 border-4 border-primary border-t-transparent"></span>
                            </div>
                            :
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
                                    {
                                        news.map((item, index) => (
                                            <Link key={index} href={`/news/${item.id}`} className="w-11/12 md:w-xs">
                                                <Card className="p-0">
                                                    <CardContent className="flex flex-col gap-1 p-3">
                                                        <div className="flex flex-row justify-start items-center gap-2">
                                                            <div className="p-1.5 bg-primary/10 rounded-full">
                                                                <img src={item.creator_image} alt="logo" className="w-7 h-7" />
                                                            </div>
                                                            <div className="text-sm transform scale-y-125 text-muted-foreground font-semibold">{item.creator_name}</div>
                                                            <div className="text-xs text-muted-foreground">{item.tag}</div>
                                                        </div>
                                                        <div className="flex flex-row justify-between items-center">
                                                            <div className="text-base text-muted-foreground font-semibold line-clamp-3 assamese-text">{item.heading}</div>
                                                            <div className="w-48 h-16 relative">
                                                                <img
                                                                    src={item.image}
                                                                    className="w-full h-full rounded-md object-cover"
                                                                    alt="logo"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row justify-between items-center">
                                                            <div className="flex flex-row justify-start items-center gap-2">
                                                                <div className="flex flex-row justify-start items-center">
                                                                    <Timer className="w-4 h-4 stroke-muted-foreground" />
                                                                    <div className="text-sm text-muted-foreground">{timeAgo(item.created_at)}</div>
                                                                </div>
                                                                <div className="flex flex-row justify-start items-center">
                                                                    <div className="flex flex-row justify-start items-center">
                                                                        <Eye className="w-4 h-4 stroke-muted-foreground" />
                                                                        <div className="text-sm text-muted-foreground">{item.time} minutes</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <Bookmark />
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </Link>
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
                </div>
            </div>
        </div>
    );
}
