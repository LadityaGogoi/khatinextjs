'use client'

import { GetTestPapers } from "@/api/test"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Bookmark, FileQuestion, Quote, Timer } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"


const Page = () => {
    const { seriesId } = useParams()
    const id = Array.isArray(seriesId) ? seriesId[0] : seriesId
    const { data, isLoading } = GetTestPapers(id)

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
                    </BreadcrumbList>
                </Breadcrumb>
                {
                    data?.map((item, index) => (
                        <Card key={index} className="p-0 w-xs lg:w-md">
                            <div className="flex flex-col gap-2 p-3 relative">
                                <div className="flex flex-row justify-between items-center">
                                    <div className="text-muted-foreground text-base font-medium">{item.name}</div>
                                    <div className="text-muted-foreground text-base font-medium">{item.date}</div>
                                </div>
                                <div className="flex flex-row w-full justify-between items-center">
                                    <div className="flex flex-row gap-0.5 justify-center items-center">
                                        <FileQuestion size={16} className="stroke-muted-foreground" />
                                        <div className="text-xs md:text-sm text-muted-foreground">{item.total_questions} Questions</div>
                                    </div>
                                    <div className="flex flex-row gap-0.5 justify-center items-center">
                                        <Timer size={16} className="stroke-muted-foreground" />
                                        <div className="text-xs md:text-sm text-muted-foreground">{item.total_time} hour</div>
                                    </div>
                                    <div className="flex flex-row gap-0.5 justify-center items-center">
                                        <Quote size={16} className="stroke-muted-foreground" />
                                        <div className="text-xs md:text-sm text-muted-foreground">{item.total_marks} marks</div>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <Bookmark size={24} className="stroke-muted-foreground" />
                                    <div className="flex flex-row gap-2">
                                        <Link href={`/test/${item.id}`}>
                                            <Button variant={"outline"} className="font-medium text-muted-foreground" size={"sm"}>View Papeer</Button>
                                        </Link>
                                        <Link href={`/test/${item.id}`}>
                                            <Button className="font-medium text-white" size={"sm"}>Start Test</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Page