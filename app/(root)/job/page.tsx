'use client'

import { GetJobs } from "@/api/job"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Bookmark, Landmark } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import SearchBar from "@/components/custom/SearchBar"

const Page = () => {
    const [filters, setFilters] = useState<string[]>([])
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, refetch } = GetJobs(filters)

    const jobs = data?.pages?.flatMap(page => page.jobs) || []

    useEffect(() => {
        refetch();
    }, [filters]);

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

    const handleFiltersChange = (selectedFilters: string[]) => {
        setFilters(selectedFilters)
    }


    return (
        <div className="flex flex-col bg-primary/5">
            <div className="flex flex-col gap-5 items-center my-3 md:mt-24">
                <SearchBar
                    placeholder="Search Jobs..."
                    filterOptions={["Class 8th Pass", "Class 10th Pass", "Class 12th Pass", "Degree Completed", "Masters Completed", "Arts Stream", "Science Stream", "Commerce Stream", "Grade IV", "Grade III", "Private Sector", "Govt. Job"]}
                    onFilterChange={handleFiltersChange}
                    selectedFilters={filters}
                />

                <div className="flex flex-col">
                    {
                        isLoading ?
                            <div className="flex justify-center items-center w-full">
                                <span className="animate-spin rounded-full h-6 w-6 border-4 border-primary border-t-transparent"></span>
                            </div>
                            :
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
                                    {
                                        jobs.map((item, index) => (
                                            <Link key={index} href={`/job/${item.id}`}>
                                                <Card className="w-xs p-0">
                                                    <CardContent className="flex flex-col gap-2 p-3">
                                                        <div className="flex flex-row justify-between items-center">
                                                            <div className="flex flex-row gap-2">
                                                                <div className="p-1.5 bg-primary/10 rounded-full">
                                                                    <img src={item?.image} alt="logo" className="w-7 h-7" />
                                                                </div>
                                                                <div className="flex flex-col justify-between items-start">
                                                                    <div className="font-semibold text-base text-foreground">{item.title}</div>
                                                                    <div className="flex flex-row justify-center items-center">
                                                                        <Landmark className="stroke-muted-foreground" size={16} />
                                                                        <div className="text-xs font-medium text-muted-foreground">{item.organization}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button>
                                                                <Bookmark size={24} className="stroke-muted-foreground" />
                                                            </button>
                                                        </div>
                                                        <div className="flex flex-row justify-between items-center">
                                                            <div className="text-sm font-medium text-muted-foreground">Expected Salary</div>
                                                            <div className="text-sm text-primary">{item.expected_salary}</div>
                                                        </div>
                                                        <div className="w-full h-5 flex flex-row justify-between items-center">
                                                            <div className="text-xs text-muted-foreground">{timeAgo(item.created_at)}</div>
                                                            <Separator orientation="vertical" />
                                                            <div className="text-xs text-muted-foreground">{item.total_posts} Posts</div>
                                                            <Separator orientation="vertical" />
                                                            <div className="text-xs text-muted-foreground">{item.location}</div>
                                                        </div>
                                                        <div className="flex flex-row flex-wrap gap-1.5">
                                                            {
                                                                item.tags.map((tag: string, index: number) => (
                                                                    <div key={index} className="text-xs font-semibold py-1.5 px-3 border-2 border-primary/50 text-muted-foreground rounded-full">{tag}</div>
                                                                ))
                                                            }
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </Link>
                                        ))
                                    }
                                </div>
                                {hasNextPage && (
                                    <div className="flex justify-center my-4">
                                        <Button
                                            variant={"outline"}
                                            className="text-xs"
                                            size={"sm"}
                                            onClick={() => fetchNextPage()}
                                            disabled={isFetchingNextPage}
                                        >
                                            {isFetchingNextPage ? 'Loading...' : 'Show More'}
                                        </Button>
                                    </div>
                                )}
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Page