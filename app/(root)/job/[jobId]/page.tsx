import Image from "next/image"
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
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { images } from "@/constants"
import { IndianRupee, Landmark, MapPin, Quote } from "lucide-react"
import HeroVideoDialog from "@/components/magicui/hero-video-dialog"

const Page = async ({ params }: { params: Promise<{ jobId: string }> }) => {
    const id = (await params).jobId
    return (
        <div className="flex flex-col bg-primary/5">
            <div className="flex flex-col lg:flex-row mx-auto gap-5 items-center my-3 md:mt-24">
                <div className="w-xs flex flex-col justify-center items-center">
                    <div className="w-full mb-2">
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
                                    <BreadcrumbLink href={`/course/${id}`}>{id}</BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    <div className="bg-primary/10 rounded-full p-3">
                        <Image src={images.AssamPolice} alt="organization" className="w-16 h-16" />
                    </div>
                    <div className="text-lg text-foreground font-bold">IOCL Recruitment 2025</div>
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <Landmark className="stroke-muted-foreground" size={16} />
                        <div className="text-sm text-muted-foreground font-medium">IOCL</div>
                    </div>
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <MapPin className="stroke-muted-foreground" size={16} />
                        <div className="text-sm text-muted-foreground font-medium">Assam, India</div>
                    </div>
                    <div className="w-full flex flex-row justify-center items-center gap-2 mt-2">
                        <div className="w-2/5 py-3 px-1.5 bg-secondary border rounded-md flex flex-col gap-1.5 justify-center items-center">
                            <div className="bg-primary/10 rounded-full p-3">
                                <IndianRupee className="w-4 h-4" />
                            </div>
                            <div className="text-xs text-muted-foreground font-semibold">Expected Salary</div>
                            <div className="text-xs text-primary font-medium">20,000 -70,000</div>
                        </div>
                        <div className="w-2/5 py-3 px-1.5 bg-secondary border rounded-md flex flex-col gap-1.5 justify-center items-center">
                            <div className="bg-primary/10 rounded-full p-3">
                                <Quote className="w-4 h-4" />
                            </div>
                            <div className="text-xs text-muted-foreground font-semibold">Total Posts</div>
                            <div className="text-xs text-primary font-medium">246</div>
                        </div>
                    </div>
                </div>
                <div className="w-xs flex flex-col gap-2 justify-center items-center">
                    <div className="text-sm text-muted-foreground">
                        State Level Police Recruitment Board (SLPRB) already conducted the Physical Standard Test (PST), Physical Efficiency Test (PET), Trade Proficiency Test (TPT) and Written Test (CWT 2025) for the recruitment of various posts in the cadre of Constable, Sub-Inspector and others under Assam Police, APRO, Assam Commando Battalions, DGCD & CGHG, Prison Department and Directorate of Forensic Science.
                    </div>
                    <Table className="border">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-bold">Important Dates</TableHead>
                                <TableHead className="text-center font-bold">Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">Application Start</TableCell>
                                <TableCell className="text-center">29/11/2001</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Application End</TableCell>
                                <TableCell className="text-center">31/12/2025</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <div className="relative w-xs lg:w-md flex flex-col gap-2">
                        <div className="text-center font-bold text-foreground text-base">Detail Explanation</div>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page