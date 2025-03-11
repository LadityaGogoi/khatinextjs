import { BookOpen, FileQuestion, Timer, Loader } from "lucide-react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link";

const lessons = [
    { id: 1, title: "Math Basics", topics: 5, time: "90 Minutes", progress: 40 },
];

const Page = async ({ params }: { params: Promise<{ subjectId: string }> }) => {
    const id = (await params).subjectId;

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
                                <BreadcrumbPage>{id}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
                    {lessons.map((lesson) => (
                        <Link key={lesson.id} href="/course/arithmetic/lcm">
                            <div className="w-xs flex flex-row gap-2 justify-between items-center bg-secondary rounded-md border py-3 px-1.5">
                                <div className="p-1.5 bg-primary/20 rounded-full">
                                    <Loader size={32} />
                                </div>
                                <div className="flex-1 flex-col items-start">
                                    <div className="font-semibold text-base">{lesson.title}</div>
                                    <div className="flex flex-row w-full justify-between items-center">
                                        <div className="flex flex-row gap-0.5">
                                            <BookOpen size={16} />
                                            <div className="text-xs">{lesson.topics} Sub Topics</div>
                                        </div>
                                        <div className="flex flex-row gap-0.5">
                                            <Timer size={16} />
                                            <div className="text-xs">{lesson.time}</div>
                                        </div>
                                        <div className="flex flex-row gap-0.5">
                                            <FileQuestion size={16} />
                                            <div className="text-xs">{lesson.progress}% done</div>
                                        </div>
                                    </div>
                                    <div className="flex-1 h-1.5 bg-primary/30 rounded-full">
                                        <div className="h-full bg-primary rounded-full" style={{ width: `${lesson.progress}%` }} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
