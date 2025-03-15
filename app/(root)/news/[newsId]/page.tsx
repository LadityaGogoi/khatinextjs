'use client'

import { GetNews } from "@/api/news"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { Eye, Heart, Timer, Zap } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"

const Page = () => {
    const { newsId } = useParams()
    const id = Array.isArray(newsId) ? newsId[0] : newsId
    const { data, isLoading } = GetNews(id)

    const timeAgo = (createdAt: string | number | Date): string => {
        const createdDate = new Date(createdAt);
        const now = new Date();
        const diffInSeconds = Math.floor((now.getTime() - createdDate.getTime()) / 1000);

        const units = [
            { label: "year", seconds: 31536000 },
            { label: "month", seconds: 2592000 },
            { label: "week", seconds: 604800 },
            { label: "day", seconds: 86400 },
            { label: "hour", seconds: 3600 },
            { label: "minute", seconds: 60 },
        ];

        for (const unit of units) {
            const quotient = Math.floor(diffInSeconds / unit.seconds);
            if (quotient >= 1) {
                return quotient === 1 ? `1 ${unit.label} ago` : `${quotient} ${unit.label}s ago`;
            }
        }

        return "Just now";
    };

    if (isLoading) {
        return (
            <div className="w-full h-screen justify-center items-center bg-primary/5  my-3 md:mt-24">
                <span className="animate-spin rounded-full h-6 w-6 border-4 border-primary border-t-transparent"></span>
            </div>
        )
    }

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
                {
                    data?.trending && (
                        <div className="flex flex-row justify-start items-center">
                            <Zap className="w-5 h-5 stroke-primary" />
                            <div className="text-sm text-primary font-medium">Trending</div>
                        </div>
                    )
                }
                <div className="text-xl text-foreground font-bold">{data?.heading}</div>
                <div className="w-full h-48 md:h-64 relative">
                    <Image alt="newsimage" fill src={data?.image} className="rounded-md object-cover" priority />
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-2">
                        <div className="p-1.5 bg-primary/20 rounded-full">
                            <img src={data?.creator_image} alt="logo" className="w-7 h-7" />
                        </div>
                        <div className="text-base text-foreground font-bold">{data?.creator_name}</div>
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
                            <div className="text-sm text-muted-foreground">{timeAgo(data?.created_at)}</div>
                        </div>
                        <div className="flex flex-row justify-start items-center">
                            <div className="flex flex-row justify-start items-center">
                                <Eye className="w-4 h-4 stroke-muted-foreground" />
                                <div className="text-sm text-muted-foreground">{data?.time} minutes</div>
                            </div>
                        </div>
                    </div>
                    <div className="text-xs font-semibold py-1.5 px-3 border-2 border-primary/50 text-muted-foreground rounded-full" onClick={() => console.log(data)}>{data?.tag}</div>
                </div>
                <div className="mt-5 flex flex-col gap-2">
                    {
                        data?.description?.map((item: { text: string; type: string }, index: number) => (
                            <div key={index} className="text-sm text-foreground">{item.text}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Page