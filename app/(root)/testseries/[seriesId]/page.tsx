import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Bookmark, BookOpen, FileQuestion, Lock, Quote, Timer } from "lucide-react"
import Link from "next/link"


const Page = async ({ params }: { params: Promise<{ seriesId: string }> }) => {
    const id = (await params).seriesId

    return (
        <div className="flex flex-col bg-primary/5">
            <div className="flex flex-col mx-auto justify-start items-start gap-2 my-3 md:mt-24 w-xs lg:w-md">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/testseries">testseries</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{id}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <Link href="/testseries/69">
                    <div className="w-xs lg:w-md flex flex-col  bg-secondary rounded-md border py-3 px-1.5 gap-1 relative">
                        <div className="flex flex-row justify-between items-center">
                            <div>Paper I</div>
                            <div>29/11/2001</div>
                        </div>
                        <div className="flex flex-row w-full justify-between items-center">
                            <div className="flex flex-row gap-0.5 justify-center items-center">
                                <FileQuestion className="w-4 h-4 md:w-5 md:h-5" />
                                <div className="text-xs md:text-sm">100 Questions</div>
                            </div>
                            <div className="flex flex-row gap-0.5 justify-center items-center">
                                <Timer className="w-4 h-4 md:w-5 md:h-5" />
                                <div className="text-xs md:text-sm">2 hour</div>
                            </div>
                            <div className="flex flex-row gap-0.5 justify-center items-center">
                                <Quote className="w-4 h-4 md:w-5 md:h-5" />
                                <div className="text-xs md:text-sm">100 marks</div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <Bookmark />
                            <div className="flex flex-row gap-2">
                                <Button variant={"outline"}>View Papeer</Button>
                                <Button>Start Test</Button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Page