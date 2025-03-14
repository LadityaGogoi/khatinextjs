import { Button } from "@/components/ui/button";
import { Bookmark, BookOpen, Briefcase, Eye, FileQuestion, FolderDown, Rss, Timer } from "lucide-react";
import Image from "next/image";

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
import { images } from "@/constants";


export default function Home() {
    return (
        <div className="w-full">
            <div className="flex flex-col md:pt-32 w-full pb-4 bg-primary/5">
                <div className="w-full py-6 pb-10 text-center flex-col gap-6 flex">
                    <h1>
                        <span className="bg-clip-text text-transparent bg-[linear-gradient(74deg,#4285f4_0%,#9b72cb_33%,#d96570_66%,#4285f4_100%)] relative mx-0 max-w-[43.5rem] pt-5 md:mx-auto md:px-4 md:py-2 text-balance text-left font-extrabold tracking-tighter md:text-center text-5xl md:text-5xl">
                            ALL In One App
                            <br />
                            For Assamese Students
                        </span>
                    </h1>
                    <p className="max-w-2xl text-center text-muted-foreground text-sm font-semibold mx-auto px-4 sm:px-0">
                        Simplify complex topics ➜ Create study notes ➜ Generate Question Papers ➜ Simplify & Translate PDFs ➜ Generate quizzes & flashcards
                    </p>
                    <div className="w-xs mx-auto">
                        <a href="#">
                            <Button variant="default" size="lg" className="w-full bg-primary text-sm font-semibold">
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
                                <Card className="h-full w-full">
                                </Card>
                            </CarouselItem>
                            <CarouselItem className="basis-xs h-48 pl-4">
                                <Card className="h-full w-full">
                                </Card>
                            </CarouselItem>
                            <CarouselItem className="basis-xs h-48 pl-4">
                                <Card className="h-full w-full">
                                </Card>
                            </CarouselItem>
                            <CarouselItem className="basis-xs h-48 pl-4">
                                <Card className="h-full w-full">
                                </Card>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="absolute p-5 md:p-9 left-0 top-1/2 transform -translate-y-1/2" />
                        <CarouselNext className="absolute p-5 md:p-9 right-0 top-1/2 transform -translate-y-1/2" />
                    </Carousel>
                </div>
                <div className="pt-5 md:pt-9 flex">
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
                        <div className="flex flex-row gap-2 justify-start items-center w-xs mx-auto p-1.5 rounded-md bg-secondary/50">
                            <div className="p-1 rounded-md justify-center items-center bg-secondary">
                                <Briefcase className="stroke-primary" />
                            </div>
                            <span className="text-sm font-semibold text-foreground"># Updated Jobs Notification</span>
                        </div>
                        <div className="flex flex-row gap-2 justify-start items-center w-xs mx-auto p-1.5 rounded-md bg-secondary/50">
                            <div className="p-1 rounded-md justify-center items-center bg-secondary">
                                <FileQuestion className="stroke-primary" />
                            </div>
                            <span className="text-sm font-semibold text-foreground"># Mock Test Series | Live Weekly Test</span>
                        </div>
                        <div className="flex flex-row gap-2 justify-start items-center w-xs mx-auto p-1.5 rounded-md bg-secondary/50">
                            <div className="p-1 rounded-md justify-center items-center bg-secondary">
                                <Rss className="stroke-primary" />
                            </div>
                            <span className="text-sm font-semibold text-foreground"># Mock Test Series | Live Weekly Test</span>
                        </div>
                        <div className="flex flex-row gap-2 justify-start items-center w-xs mx-auto p-1.5 rounded-md bg-secondary/50">
                            <div className="p-1 rounded-md justify-center items-center bg-secondary">
                                <BookOpen className="stroke-primary" />
                            </div>
                            <span className="text-sm font-semibold text-foreground"># Full Syllabus | 50,000+ questions</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full md:w-2xl lg:w-5xl mx-auto">
                    <div className="text-center font-bold text-lg text-foreground my-3">Latest News</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
                        <Link href="/news/123">
                            <Card className="p-0">
                                <CardContent className="w-xs flex flex-col gap-1 p-3">
                                    <div className="flex flex-row justify-start items-center gap-2">
                                        <div className="p-1.5 bg-primary/10 rounded-full">
                                            <Image src={images.Logo} alt="logo" className="w-7 h-7" />
                                        </div>
                                        <div className="text-xs font-bold">Khati News</div>
                                        <div className="text-xs text-muted-foreground">Current Affairs</div>
                                    </div>
                                    <div className="flex flex-row justify-between items-center">
                                        <div className="text-sm font-bold line-clamp-3">Forced into cyber crime, 283 Indians rescued from Myanmar-Thailand border</div>
                                        <div className="w-48 h-16 relative">
                                            <Image src={images.Thumbnail} alt="logo" className="rounded-md" />
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between items-center">
                                        <div className="flex flex-row justify-start items-center gap-2">
                                            <div className="flex flex-row justify-start items-center">
                                                <Timer className="w-4 h-4 stroke-muted-foreground" />
                                                <div className="text-sm text-muted-foreground">5 days ago</div>
                                            </div>
                                            <div className="flex flex-row justify-start items-center">
                                                <div className="flex flex-row justify-start items-center">
                                                    <Eye className="w-4 h-4 stroke-muted-foreground" />
                                                    <div className="text-sm text-muted-foreground">3 minutes</div>
                                                </div>
                                            </div>
                                        </div>
                                        <Bookmark />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
