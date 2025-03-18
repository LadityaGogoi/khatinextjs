'use client'

import { GetTestSeries } from "@/api/test"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useAuth } from "@/context/auth-provider"
import { BookOpen, FileQuestion, Heart, Landmark, Loader, Lock } from "lucide-react"
import Link from "next/link"

const TestSeries = () => {
    const { profile } = useAuth()
    const { data, isLoading } = GetTestSeries(profile?.exam)

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
            <div className="flex flex-col mx-auto justify-center items-center gap-2 my-3 md:mt-24">
                {
                    data?.map((item, index) => (
                        <Link key={index} href={`/testseries/${item.id}`}>
                            <Card className="p-0 w-xs lg:w-md relative">
                                <div className="p-3 flex flex-col gap-2 relative">
                                    <div className="flex flex-row justify-between items-center">
                                        <div className="flex flex-row gap-2">
                                            <div className="p-1.5 bg-primary/10 rounded-full">
                                                <img src={item?.image} alt="logo" className="w-7 h-7" />
                                            </div>
                                            <div className="flex flex-col justify-between items-start">
                                                <div className="font-semibold text-base text-muted-foreground">{item.name}</div>
                                                <div className="flex flex-row">
                                                    <Landmark className="stroke-muted-foreground" size={16} />
                                                    <div className="text-xs text-muted-foreground">{item.organization}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <button>
                                                <Heart size={24} className="stroke-muted-foreground" />
                                            </button>
                                            <div className="text-sm text-muted-foreground">0</div>
                                        </div>
                                    </div>
                                    <Progress value={0} />
                                    <div className="flex flex-row w-full justify-between items-center">
                                        <div className="flex flex-row gap-0.5 justify-center items-center">
                                            <BookOpen size={16} className="text-muted-foreground" />
                                            <div className="text-xs md:text-sm text-muted-foreground">{item.total_tests} tests</div>
                                        </div>
                                        <div className="flex flex-row gap-0.5 justify-center items-center">
                                            <FileQuestion size={16} className="text-muted-foreground" />
                                            <div className="text-xs md:text-sm text-muted-foreground">0% done</div>
                                        </div>
                                        <div className="flex flex-row gap-0.5 justify-center items-center">
                                            <Lock className="stroke-muted-foreground" size={16} />
                                            <div className="text-xs text-muted-foreground">{item.isPremium ? "premium" : "free"}</div>
                                        </div>
                                    </div>
                                    {
                                        item.isTrending && (
                                            <div className="absolute top-0 right-0 rounded-bl-full bg-destructive text-xs text-white">
                                                Trending
                                            </div>
                                        )
                                    }
                                </div>
                            </Card>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default TestSeries