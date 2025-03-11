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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bookmark, BookOpen, FileQuestion, Lock, Search, Video } from "lucide-react";

const Page = async ({ params }: { params: Promise<{ subjectId: string, lessonId: string }> }) => {
    const subject = (await params).subjectId;
    const lesson = (await params).lessonId

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
                                <BreadcrumbLink href={`/course/${subject}`}>{subject}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{lesson}</BreadcrumbPage>
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
                            <div className="text-sm md:text-base">2 topics</div>
                        </div>
                        <div className="flex flex-row gap-0.5 justify-center items-center">
                            <Video className="w-5 h-5 md:w-6 md:h-6" />
                            <div className="text-sm md:text-base">120 Minutes</div>
                        </div>
                        <div className="flex flex-row gap-0.5 justify-center items-center">
                            <FileQuestion className="w-5 h-5 md:w-6 md:h-6" />
                            <div className="text-sm md:text-base">99 Questions</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-xs lg:w-md">
                    <div className="flex flex-row justify-between items-center border rounded-full my-5 md:my-0 py-1.5 pl-5 pr-1.5">
                        <input
                            type="text"
                            placeholder="Search question"
                            className="text-sm w-full font-bold text-foreground focus:outline-none focus:ring-0"
                        />
                        <Button variant={"ghost"} size={"icon"}>
                            <Search className="stroke-2" />
                        </Button>
                    </div>
                    <Tabs defaultValue="All" className="w-full">
                        <TabsList className="w-full">
                            <TabsTrigger value="All" className="font-bold">All</TabsTrigger>
                            <TabsTrigger value="Saved" className="font-bold">Saved</TabsTrigger>
                        </TabsList>
                        <TabsContent value="All">
                            <div className="flex flex-col gap-2">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex flex-row justify-between items-center">
                                            <div>Q. no. 1</div>
                                            <div className="text-xs font-medium text-primary/50">#generalknowlege</div>
                                        </CardTitle>
                                        <CardDescription>Who was the first President of independent India, serving two terms from 1950 to 1962, and played a crucial role in shaping the Indian Constitution as its key contributor?
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex flex-col gap-1.5">
                                        <div className="flex flex-row justify-start items-center gap-1.5 border rounded-md p-1.5">
                                            <div className="p-0.5 border rounded-md w-7 h-7 text-center font-bold">A</div>
                                            <div className="text-sm font-medium text-foreground/80">Dr APJ Abdul Kalam</div>
                                        </div>
                                        <div className="flex flex-row justify-start items-center gap-1.5 border rounded-md p-1.5">
                                            <div className="p-0.5 border rounded-md w-7 h-7 text-center font-bold">B</div>
                                            <div className="text-sm font-medium text-foreground/80">Dr B. R. Ambedkar</div>
                                        </div>
                                        <div className="flex flex-row justify-start items-center gap-1.5 border rounded-md p-1.5">
                                            <div className="p-0.5 border rounded-md w-7 h-7 text-center font-bold">C</div>
                                            <div className="text-sm font-medium text-foreground/80">Jawaharlal Nehru</div>
                                        </div>
                                        <div className="flex flex-row justify-start items-center gap-1.5 border rounded-md p-1.5">
                                            <div className="p-0.5 border rounded-md w-7 h-7 text-center font-bold">D</div>
                                            <div className="text-sm font-medium text-foreground/80">Sardar Vallabhbhai Patel</div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex justify-between items-center">
                                        <div>
                                            <Bookmark />
                                        </div>
                                        <Button>Check Answer</Button>
                                    </CardFooter>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex flex-row justify-between items-center">
                                            <div>Q. no. 1</div>
                                            <div className="text-xs font-medium text-primary/50">#generalknowlege</div>
                                        </CardTitle>
                                        <CardDescription>Who was the first President of independent India, serving two terms from 1950 to 1962, and played a crucial role in shaping the Indian Constitution as its key contributor?
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex flex-col gap-1.5">
                                        <div className="flex flex-row justify-start items-center gap-1.5 border rounded-md p-1.5">
                                            <div className="p-0.5 border rounded-md w-7 h-7 text-center font-bold">A</div>
                                            <div className="text-sm font-medium text-foreground/80">Dr APJ Abdul Kalam</div>
                                        </div>
                                        <div className="flex flex-row justify-start items-center gap-1.5 border rounded-md p-1.5">
                                            <div className="p-0.5 border rounded-md w-7 h-7 text-center font-bold">B</div>
                                            <div className="text-sm font-medium text-foreground/80">Dr B. R. Ambedkar</div>
                                        </div>
                                        <div className="flex flex-row justify-start items-center gap-1.5 border rounded-md p-1.5">
                                            <div className="p-0.5 border rounded-md w-7 h-7 text-center font-bold">C</div>
                                            <div className="text-sm font-medium text-foreground/80">Jawaharlal Nehru</div>
                                        </div>
                                        <div className="flex flex-row justify-start items-center gap-1.5 border rounded-md p-1.5">
                                            <div className="p-0.5 border rounded-md w-7 h-7 text-center font-bold">D</div>
                                            <div className="text-sm font-medium text-foreground/80">Sardar Vallabhbhai Patel</div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex justify-between items-center">
                                        <div>
                                            <Bookmark />
                                        </div>
                                        <Button>Check Answer</Button>
                                    </CardFooter>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex flex-row justify-between items-center">
                                            <div>Q. no. 1</div>
                                            <div className="text-xs font-medium text-primary/50">#generalknowlege</div>
                                        </CardTitle>
                                        <CardDescription>Who was the first President of independent India, serving two terms from 1950 to 1962, and played a crucial role in shaping the Indian Constitution as its key contributor?
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex flex-col gap-1.5">
                                        <div className="flex flex-row justify-start items-center gap-1.5 border rounded-md p-1.5">
                                            <div className="p-0.5 border rounded-md w-7 h-7 text-center font-bold">A</div>
                                            <div className="text-sm font-medium text-foreground/80">Dr APJ Abdul Kalam</div>
                                        </div>
                                        <div className="flex flex-row justify-start items-center gap-1.5 border rounded-md p-1.5">
                                            <div className="p-0.5 border rounded-md w-7 h-7 text-center font-bold">B</div>
                                            <div className="text-sm font-medium text-foreground/80">Dr B. R. Ambedkar</div>
                                        </div>
                                        <div className="flex flex-row justify-start items-center gap-1.5 border rounded-md p-1.5">
                                            <div className="p-0.5 border rounded-md w-7 h-7 text-center font-bold">C</div>
                                            <div className="text-sm font-medium text-foreground/80">Jawaharlal Nehru</div>
                                        </div>
                                        <div className="flex flex-row justify-start items-center gap-1.5 border rounded-md p-1.5">
                                            <div className="p-0.5 border rounded-md w-7 h-7 text-center font-bold">D</div>
                                            <div className="text-sm font-medium text-foreground/80">Sardar Vallabhbhai Patel</div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex justify-between items-center">
                                        <div>
                                            <Bookmark />
                                        </div>
                                        <Button>Check Answer</Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </TabsContent>
                        <TabsContent value="Saved" className="font-bold text-sm text-center">Coming Soon.</TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Page;
