'use client'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { IndianRupee, Landmark, MapPin, Quote } from "lucide-react"
import HeroVideoDialog from "@/components/magicui/hero-video-dialog"
import { useParams } from "next/navigation"
import { GetJob } from "@/api/job"

const Page = () => {
    const { jobId } = useParams()
    const id = Array.isArray(jobId) ? jobId[0] : jobId

    const { data, isLoading } = GetJob(id)

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
            <div className="flex flex-col lg:flex-row mx-auto gap-5 items-center lg:items-start my-3 md:mt-24">
                <div className="w-xs flex flex-col justify-center items-center">
                    <div className="w-full mb-2">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink>Job</BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    <div className="w-24 h-24 rounded-full">
                        <img alt="newsimage" src={data?.image} className="w-full h-full object-contain" />
                    </div>
                    <div className="text-base font-semibold text-muted-foreground">{data?.title}</div>
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <Landmark className="stroke-muted-foreground" size={16} />
                        <div className="text-sm text-muted-foreground font-medium">{data?.organization}</div>
                    </div>
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <MapPin className="stroke-muted-foreground" size={16} />
                        <div className="text-sm text-muted-foreground font-medium">{data?.location}</div>
                    </div>
                    <div className="w-full flex flex-row justify-center items-center gap-2 mt-2">
                        <div className="w-2/5 py-3 px-1.5 bg-primary/5 border rounded-md flex flex-col gap-1.5 justify-center items-center">
                            <div className="bg-primary/10 rounded-full p-3">
                                <IndianRupee className="w-4 h-4" />
                            </div>
                            <div className="text-xs text-muted-foreground font-semibold">Expected Salary</div>
                            <div className="text-xs text-primary font-medium">{data?.expected_salary}</div>
                        </div>
                        <div className="w-2/5 py-3 px-1.5 bg-primary/5 border rounded-md flex flex-col gap-1.5 justify-center items-center">
                            <div className="bg-primary/10 rounded-full p-3">
                                <Quote className="w-4 h-4" />
                            </div>
                            <div className="text-xs text-muted-foreground font-semibold">Total Posts</div>
                            <div className="text-xs text-primary font-medium">{data?.total_posts}</div>
                        </div>
                    </div>
                </div>
                <div className="w-xs lg:w-md flex flex-col gap-2 justify-center items-center">
                    <div className="text-sm text-muted-foreground">
                        {data?.description}
                    </div>
                    <Table className="border">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-bold">Important Dates</TableHead>
                                <TableHead className="text-center font-bold">Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                data?.important_dates.map((item: any, index: number) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium text-muted-foreground">{item.type}</TableCell>
                                        <TableCell className="text-center  text-muted-foreground">{item.date}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                    <div className="relative w-xs lg:w-md flex flex-col gap-2">
                        <div className="text-center font-bold text-muted-foreground text-base">Detail Explanation</div>
                        <HeroVideoDialog
                            className="block dark:hidden"
                            animationStyle="top-in-bottom-out"
                            videoSrc="https://www.youtube.com/embed/OgVsq_B9D3c"
                            thumbnailSrc="https://zdkrsecozabtluyupcxi.supabase.co/storage/v1/object/sign/image/videothumbnail%20(1).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZS92aWRlb3RodW1ibmFpbCAoMSkucG5nIiwiaWF0IjoxNzQzMTYxNTA2LCJleHAiOjE3NzQ2OTc1MDZ9.P9D3mrZJvYh4g-oPMyL9Jl9Lf0fMq0tguXcvOGmr5qQ"
                            thumbnailAlt="Hero Video"
                        />
                        <HeroVideoDialog
                            className="hidden dark:block"
                            animationStyle="top-in-bottom-out"
                            videoSrc="https://www.youtube.com/embed/OgVsq_B9D3c"
                            thumbnailSrc="https://zdkrsecozabtluyupcxi.supabase.co/storage/v1/object/sign/image/videothumbnail%20(1).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZS92aWRlb3RodW1ibmFpbCAoMSkucG5nIiwiaWF0IjoxNzQzMTYxNTA2LCJleHAiOjE3NzQ2OTc1MDZ9.P9D3mrZJvYh4g-oPMyL9Jl9Lf0fMq0tguXcvOGmr5qQ"
                            thumbnailAlt="Hero Video"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page