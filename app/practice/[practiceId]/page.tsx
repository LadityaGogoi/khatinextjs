'use client'

import { GetQuestionPaper } from "@/api/test"
import PracticeQuestionCard from "@/components/custom/PracticeQuestionCard"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const Page = () => {
    const { practiceId } = useParams()
    const router = useRouter()
    const id = Array.isArray(practiceId) ? practiceId[0] : practiceId
    const [timeLeft, setTimeLeft] = useState<number>(0)
    const questionRefs = useRef<(HTMLDivElement | null)[]>([])
    const [open, setOpen] = useState(false)
    const { data, isLoading } = GetQuestionPaper(id)

    useEffect(() => {
        if (timeLeft >= (2 * 60 * 60)) return

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev >= (2 * 60 * 60)) {
                    clearInterval(timer)
                    return 0
                }
                return prev + 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [timeLeft])

    const formatTime = (seconds: number) => {
        const hrs = Math.floor(seconds / 3600)
        const mins = Math.floor((seconds % 3600) / 60)
        const secs = seconds % 60
        return `${hrs > 0 ? hrs + ':' : ''}${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    const scrollToQuestion = (index: number): void => {
        if (questionRefs.current[index]) {
            questionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" })
            setOpen(false)
        }
    }

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
                <div className="w-full fixed top-0 left-0 border-b z-[10] backdrop-blur-md bg-background/50">
                    <div className="w-11/12 md:w-md flex flex-row justify-between items-center mx-auto py-3">
                        <Button onClick={() => router.back()} className="w-24 text-xs font-semibold transform scale-y-125 text-white" variant={"destructive"} size={"sm"}>Exit Test</Button>
                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger asChild>
                                <div className="flex flex-row justify-center items-center">
                                    <div className="text-primary font-medium transform scale-y-125">Menu</div>
                                    <ChevronDown size={24} className="stroke-primary stroke-3" />
                                </div>
                            </DialogTrigger>
                            <DialogContent className="w-11/12 md:w-md">
                                <DialogHeader>
                                    <DialogTitle className="text-center font-semibold transform scale-y-125 text-primary">Question List</DialogTitle>
                                    <DialogDescription className="text-center">select question index</DialogDescription>
                                </DialogHeader>
                                <div className="flex flex-row flex-wrap gap-1.5 mt-4">
                                    {data?.map((_, index) => (
                                        <Button
                                            key={index}
                                            variant={"outline"}
                                            size={"sm"}
                                            onClick={() => scrollToQuestion(index)}
                                        >
                                            {index + 1}
                                        </Button>
                                    ))}
                                </div>
                            </DialogContent>
                        </Dialog>
                        <div className="">
                            <Button variant={"outline"} className="w-24 text-xs font-semibold transform scale-y-125 text-muted-foreground">{formatTime(timeLeft)}</Button>
                        </div>
                    </div>
                </div>
                <div className="min-h-screen w-full flex flex-col justify-center items-center gap-2 py-24">
                    {
                        data?.map((question, index) => (
                            <div className="w-full flex justify-center items-center" ref={(el) => { questionRefs.current[index] = el }} key={index}>
                                <PracticeQuestionCard
                                    key={index}
                                    question={question}
                                    total={data.length}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </main >
    )
}

export default Page