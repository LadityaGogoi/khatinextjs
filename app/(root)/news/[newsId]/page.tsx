import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { images } from "@/constants"
import { Bookmark, Eye, Heart, Timer, Zap } from "lucide-react"
import Image from "next/image"

const Page = async ({ params }: { params: Promise<{ newsId: string }> }) => {
    const id = (await params).newsId

    return (
        <div className="flex flex-col bg-primary/5">
            <div className="flex flex-col gap-2 my-3 md:mt-24 w-xs md:w-3xl mx-auto">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/news">news</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href={`/news/${id}`}>{id}</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="flex flex-row justify-start items-center">
                    <Zap className="w-5 h-5 stroke-primary" />
                    <div className="text-sm text-primary font-medium">Trending</div>
                </div>
                <div className="text-xl text-foreground font-bold">Assam's rhino population grows fivefold as poaching drops 86% since 2016</div>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-2">
                        <div className="p-1.5 bg-primary/20 rounded-full">
                            <Image src={images.Logo} alt="logo" className="w-7 h-7" />
                        </div>
                        <div className="text-base text-muted-foreground font-bold">Khati News</div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <button>
                            <Heart size={24} className="stroke-secondary-foreground" />
                        </button>
                        <div className="text-sm">0</div>
                    </div>
                </div>
                <Separator />
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
                    <div className="text-xs font-semibold py-1.5 px-3 border-2 border-primary/50 text-muted-foreground rounded-full">Current Affairs</div>
                </div>
                <div className="mt-5 flex flex-col gap-2">
                    <div className="text-sm text-foreground">Kaziranga and other protected habitats of the one-horned rhinoceros in Assam recorded an 86% drop in poaching of the herbivore since 2016, Chief Minister Himanta Biswa Sarma said.</div>
                    <div className="text-sm text-foreground">In a statement marking the celebration of World Rhino Day on Sunday, the Chief Minister attributed the turnaround – poachers killed 190 rhinos between 2000 and 2021 – to Prime Minister Narendra Modi’s “commitment to promoting and preserving” an animal that has been “synonymous to the identity” of Assam</div>
                    <div className="text-sm text-foreground">“Since the double-engine government took charge (of Assam) in 2016, poaching has dropped by 86%,” he said, referring to the rhino as the crown jewel of the biodiversity of the Northeastern region.</div>
                </div>
            </div>
        </div>
    )
}

export default Page