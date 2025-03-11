import { Button } from "@/components/ui/button";
import { BookOpen, Briefcase, DownloadCloud, DownloadIcon, FileQuestion, Rss } from "lucide-react";
import Image from "next/image";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card } from "@/components/ui/card";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { AnimatedBeamMultipleOutputDemo } from "@/components/custom/animated-beam";


export default function Home() {
    return (
        <div className="w-full">
            <div className="flex flex-col md:pt-32 w-full pb-4 bg-primary/5">
                <div className="w-full py-6 pb-10 text-center flex-col gap-6 hidden md:flex">
                    <h1>
                        <span className="bg-clip-text text-transparent bg-[linear-gradient(74deg,#4285f4_0%,#9b72cb_33%,#d96570_66%,#4285f4_100%)] relative mx-0 max-w-[43.5rem] pt-5 md:mx-auto md:px-4 md:py-2 text-balance text-left font-extrabold tracking-tighter md:text-center text-5xl md:text-5xl">
                            ALL In One App
                            <br />
                            For Assamese Students
                        </span>
                    </h1>
                    <p className="max-w-2xl text-center text-muted-foreground md:text-sm mx-auto px-4 sm:px-0">
                        Simplify complex topics ➜ Create study notes ➜ Generate Question Papers ➜ Simplify & Translate PDFs ➜ Generate quizzes & flashcards
                    </p>
                    <div className="w-xs mx-auto">
                        <a href="#">
                            <Button variant="default" size="lg" className="w-full bg-primary text-base font-semibold">
                                Download Khati App
                                <DownloadIcon />
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
                <div className="pt-5 md:pt-9 hidden md:flex">
                    <VelocityScroll defaultVelocity={2} className="text-3xl md:text-5xl font-extrabold" >
                        <span>
                            <span className="mx-2 text-gray-400">|</span>
                            <span className="bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-400 dark:to-amber-300 text-transparent bg-clip-text">Free Mock Test</span>
                            <span className="mx-2 text-gray-400">|</span>
                            <span className="bg-gradient-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-violet-300 text-transparent bg-clip-text">Job Board</span>
                            <span className="mx-2 text-gray-400">|</span>
                            <span className="bg-gradient-to-r from-red-600 to-red-500 dark:from-red-400 dark:to-red-300 text-transparent bg-clip-text">Important News</span>
                            <span className="mx-2 text-gray-400">|</span>
                            <span className="bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300 text-transparent bg-clip-text">Chapterwise Preparation</span>
                        </span>
                    </VelocityScroll>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="hidden md:block w-1/2">
                        <AnimatedBeamMultipleOutputDemo />
                    </div>
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
            </div>
        </div>
    );
}
