import { BookOpen, FileQuestion, Timer, Loader } from "lucide-react";
import Link from "next/link";

const lessons = [
    { id: 1, title: "Math Basics", topics: 5, time: "90 Minutes", progress: 40 },
    { id: 2, title: "Logical Reasoning", topics: 8, time: "120 Minutes", progress: 25 },
    { id: 3, title: "English Grammar", topics: 10, time: "60 Minutes", progress: 75 },
    { id: 4, title: "General Science", topics: 7, time: "110 Minutes", progress: 50 },
    { id: 5, title: "History & Polity", topics: 6, time: "100 Minutes", progress: 10 },
    { id: 6, title: "Aptitude & Comprehension", topics: 12, time: "150 Minutes", progress: 65 },
];

const Page = async ({ params }: { params: Promise<{ subjectId: string }> }) => {
    const id = (await params).subjectId;

    return (
        <div className="min-h-screen flex flex-col bg-primary/5">
            <div className="flex flex-col mt-3 md:mt-24 w-full md:w-2xl lg:w-5xl mx-auto">
                <div className="text-base font-bold text-center text-foreground mb-3">Lesson List</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
                    {lessons.map((lesson) => (
                        <Link key={lesson.id} href="/course/123/233">
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
