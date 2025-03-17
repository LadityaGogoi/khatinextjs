'use client'

import { GetQuestionPaper } from "@/api/test"
import PracticeQuestionCard from "@/components/custom/PracticeQuestionCard"
import QuestionCard from "@/components/custom/QuestionCard"
import { Button } from "@/components/ui/button"
import { ChevronDown, X } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const Page = () => {
    const { testId } = useParams()
    const id = Array.isArray(testId) ? testId[0] : testId

    const { data, isLoading } = GetQuestionPaper(id)

    if (isLoading) {
        return (
            <div className="flex flex-col bg-primary/5 my-3">
                <div className="flex flex-col lg:flex-row mx-auto gap-2 md:mt-24">
                    <div className="text-center text-sm text-muted-foreground">| loading |</div>
                </div>
            </div>
        )
    }

    return (
        <main className="w-full h-full mx-auto bg-background">
            <div className="flex flex-col w-full justify-center items-center">
                <div className="w-full fixed top-0 left-0 border-b z-[99] backdrop-blur-md bg-background/50">
                    <div className="w-xs md:w-md flex flex-row justify-between items-center mx-auto py-3">
                        <Link href={'/testseries'}>
                            <Button className="" variant={"destructive"} size={"sm"}>exit</Button>
                        </Link>
                        <div className="flex flex-row" onClick={() => console.log(data)}>
                            <div className="text-primary">Menu</div>
                            <ChevronDown size={24} className="stroke-primary stroke-3" />
                        </div>
                        <div className="">
                            <Button variant={"outline"} className="">12:00</Button>
                        </div>
                    </div>
                </div>
                <div className="min-h-screen w-full flex flex-col justify-center items-center gap-2 py-24">
                    {
                        data?.map((question, index) => (
                            <PracticeQuestionCard
                                key={index}
                                question={question}
                                total={data.length}
                            />
                        ))
                    }
                </div>
                <div className="w-full fixed bottom-0 left-0 border-t z-[99] backdrop-blur-md bg-background/50">
                    <div className="w-full flex justify-center items-center py-3">
                        <Button className="w-xs font-bold text-foreground">Submit Paper</Button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Page