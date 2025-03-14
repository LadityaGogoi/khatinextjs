import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Bookmark, Heart, Landmark, Loader, Search, SlidersHorizontal } from "lucide-react"
import Link from "next/link"

const Page = () => {
    return (
        <div className="flex flex-col bg-primary/5">
            <div className="flex flex-col gap-5 items-center my-3 md:mt-24">
                <Card className="p-0 w-xs rounded-full lg:w-md md:my-0">
                    <CardContent className="flex flex-row justify-between items-center py-1 pl-5 pr-1">
                        <input
                            type="text"
                            placeholder="Search question"
                            className="text-sm w-full font-medium text-foreground focus:outline-none focus:ring-0"
                        />
                        <div className="rounded-full p-3 bg-primary/10">
                            <SlidersHorizontal
                                className="stroke-muted-foreground" />
                        </div>
                    </CardContent>
                </Card>

                <div className="flex flex-col">
                    <Link href="/job/iocl2025">
                        <Card className="w-xs lg:w-md p-0">
                            <CardContent className="flex flex-col gap-2 p-3">
                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex flex-row gap-2">
                                        <div className="p-1.5 bg-primary/20 rounded-full">
                                            <Loader size={32} />
                                        </div>
                                        <div className="flex flex-col justify-between items-start">
                                            <div className="font-semibold text-base text-foreground">IOCL Recruitment 2025</div>
                                            <div className="flex flex-row justify-center items-center">
                                                <Landmark className="stroke-muted-foreground" size={16} />
                                                <div className="text-xs font-medium text-muted-foreground">IOCL</div>
                                            </div>
                                        </div>
                                    </div>
                                    <button>
                                        <Bookmark size={24} className="stroke-muted-foreground" />
                                    </button>
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <div className="text-sm font-medium text-muted-foreground">Expected Salary</div>
                                    <div className="text-sm text-primary">20,000 - 70,000</div>
                                </div>
                                <div className="w-full h-5 flex flex-row justify-between items-center">
                                    <div className="text-xs text-muted-foreground">2 days ago</div>
                                    <Separator orientation="vertical" />
                                    <div className="text-xs text-muted-foreground">246 Posts</div>
                                    <Separator orientation="vertical" />
                                    <div className="text-xs text-muted-foreground">Assam, India</div>
                                </div>
                                <div className="flex flex-row flex-wrap">
                                    <div className="text-xs font-semibold py-1.5 px-3 border-2 border-primary/50 text-muted-foreground rounded-full">Grade IV</div>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Page