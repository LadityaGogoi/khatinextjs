import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BookOpen, FileQuestion, Heart, Landmark, Loader, Lock } from "lucide-react"
import Link from "next/link"

const TestSeries = () => {
    return (
        <div className="flex flex-col bg-primary/5">
            <div className="flex flex-col mx-auto justify-center items-center gap-2 my-3 md:mt-24">
                <Link href="/testseries/69">
                    <Card className="p-0 w-xs lg:w-md relative">
                        <div className="p-3 flex flex-col gap-2 relative">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row gap-2">
                                    <div className="p-1.5 bg-primary/20 rounded-full">
                                        <Loader size={32} />
                                    </div>
                                    <div className="flex flex-col justify-between items-start">
                                        <div className="font-semibold text-base">Khati Mock Series</div>
                                        <div className="flex flex-row">
                                            <Landmark size={16} />
                                            <div className="text-xs">Khati Education & Co.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <button>
                                        <Heart size={24} className="stroke-secondary-foreground" />
                                    </button>
                                    <div className="text-sm">0</div>
                                </div>
                            </div>
                            <Progress value={33} />
                            <div className="flex flex-row w-full justify-between items-center">
                                <div className="flex flex-row gap-0.5 justify-center items-center">
                                    <BookOpen className="w-4 h-4 md:w-5 md:h-5" />
                                    <div className="text-xs md:text-sm">2 tests</div>
                                </div>
                                <div className="flex flex-row gap-0.5 justify-center items-center">
                                    <FileQuestion className="w-4 h-4 md:w-5 md:h-5" />
                                    <div className="text-xs md:text-sm">33% done</div>
                                </div>
                                <div className="flex flex-row gap-0.5 justify-center items-center">
                                    <Lock className="w-4 h-4 md:w-5 md:h-5" />
                                    <div className="text-xs md:text-sm">free</div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 rounded-bl-full bg-destructive text-xs">
                                Trending
                            </div>
                        </div>
                    </Card>
                </Link>
            </div>
        </div>
    )
}

export default TestSeries